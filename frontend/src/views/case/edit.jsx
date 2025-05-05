import React, { useRef, useEffect, useState } from 'react'
import Button from '@ingka/button';
import { useParams } from "react-router-dom";
import MySheets from '../../components/model'
import { pq, sq, pqQSCfields } from '../../config/case_form'
import renderForm from '../../utils/renderForm'
import { formtDate } from '../../utils/format'
import { getCaseData, postUpdateCase } from '../../services/case'
import localStorage from '../../services/localStorage'
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from 'react-hook-form'
import ViewArticles from '../../components/viewArticles'
import { pqArticle, sqArticle, sqQSCfields } from '../../config/articleFileds'
import { CreateCasePQ, CreateCaseSQ } from '../../schemas/CreateCase'
import EditAricleComponent from '../../components/editArticleComponent'
import ToastComp from '../../components/toats'
import CaseStatus from '../../components/caseStatus'
import Loader from '../../components/loading'
const Editcase = () => {
    const [btnLoading, setBtnloading] = React.useState(false);
    const [successMessage, setSuccessMessage] = React.useState();
    const userFunction = localStorage.get('user-function')
    const [CaseData, setCaseData] = React.useState([]);
    const [Articles, setArticles] = React.useState([]);
    const [SupportingFiles, setSupportingFiles] = React.useState([]);
    const [modalVisibality, setModalVisibality] = useState(false);
    const [modelContent, setModalContent] = useState('');
    const [modelHeaderData, setModalHeaderData] = useState({});
    const [toastVisible, settoastVisible] = useState(false);
    const [ToastMessage, setToastMessage] = useState('');
    const [loadingStatus, setloadingStatus] = useState(true);
    const initialized = useRef(false);
    const selectedFile = [];
    const URLdata = useParams()
    const caseID = URLdata.caseID;
    const type = URLdata.type;
    function getcase() {
        getCaseData(caseID).then(res => {
            setloadingStatus(false)
            setCaseData(res.data.case);
            setArticles(res.data.articles);
            setSupportingFiles(res.data.supporting_files);
            return;
        })
    }
    // assign validation 
    // unser files validation untill fix is done end
    const CreateCase = type === 'PQ' ? CreateCasePQ : CreateCaseSQ;
    let ArticelCreate = type === 'PQ' ? pqArticle : sqArticle;;
    const methods = useForm({
        // resolver: yupResolver(CreateCase),
    })

    // assign fields based on the type
    let formInputFileds = type === 'PQ' ? pq : sq;
    if (userFunction !== 'store' && type === 'PQ') {
        formInputFileds = [...formInputFileds, ...pqQSCfields]
    }
    if (userFunction !== 'store' && type === 'SQ') {
        ArticelCreate = [...ArticelCreate, ...sqQSCfields]
    }
    const fileds = [...formInputFileds];
    // render fields
    const triggerSelectChange = (selectedType) => {
        // console.log(selectedType)
    }
    const triggerInputChange = (e) => {
        let fileName = e.target.name;
        let file = e.target.files[0]
        selectedFile.push({ 'file': file, 'name': fileName });
    }
    const renderFields = fileds.map(field => {
        let filedExist = CaseData[field.name];
        if (field.type === 'file') {
            if (typeof SupportingFiles !=='undefined') {
                Object.keys(SupportingFiles).find(key=>{
                    if(SupportingFiles[key].field_name==field.name){
                        field.value= SupportingFiles[key].file_name
                    }
                })
            }

        } else {
            if (filedExist) { field.value = filedExist };
        }
        return renderForm(field, triggerSelectChange, triggerInputChange);
    });
    const ShowEditModel = (index) => {
        let slectedArticle = Articles[index];
        modelHeaderData['title'] = 'Edit article';
        modelHeaderData['titleId'] = index;
        setModalHeaderData(modelHeaderData);
        const Editlayout = <EditAricleComponent fields={ArticelCreate} selectedArticle={slectedArticle} caseid={CaseData.caseID} articleID={Articles[index].id} CloseModal={handleModalViewClick} />
        setModalContent(Editlayout);
        return modalVisibality === true ? setModalVisibality(false) : setModalVisibality(true)
    }
    const handleModalViewClick = (from = null, message = null) => {
        if (from === 'articleUpdate') {
            setToastVisibleAction()
            setToastMessage(message)
            getcase()

        }
        setModalVisibality(false);
    }
    const updateCase = methods.handleSubmit(data => {
        setBtnloading(true);
        data['case_id'] = caseID;
        data['status'] = CaseData.status==='AI' ? 'open': CaseData.status;
        data['invoice_date']= data['invoice_date'] ==='' || data['invoice_date']===undefined ? CaseData.invoice_date :data['invoice_date'] ;
        data['unloading_date']= data['unloading_date'] ==='' || data['unloading_date']===undefined ? CaseData.unloading_date :data['unloading_date'] ;
        data['dispatch_date']= data['dispatch_date'] ==='' || data['dispatch_date']===undefined ? CaseData.dispatch_date :data['dispatch_date'] ;
        const formData = new FormData();
        formData.append('data', JSON.stringify(data));
        for (const key of Object.keys(selectedFile)) {
            formData.append('file_names[]', selectedFile[key].name)
            formData.append(selectedFile[key].name, selectedFile[key].file)
        }
        postUpdateCase(formData).then(res => {
            if (res.status === 200) {
                setSuccessMessage('Sucessfully updated..');
                setBtnloading(false);
                setTimeout(() => {
                    setSuccessMessage('');
                    CloseModles();
                }, 3000);
            }
        })
            .catch(error => {
                setBtnloading(false);
            });
        return;
    });
    const CloseModles = (status) => {
       window.location.href=document.referrer;
    }
    const setToastVisibleAction = () => {
        settoastVisible(!toastVisible);
    }
    const getLastNote =(notes)=>{
       const note =notes[notes.length-1];
       return <p id={'loadin'}><b>Date</b>: {formtDate(note.date)} <b>Note : </b>{note.notes}</p>
    }
    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true
            getcase();
        }
    }, [caseID]);
    return (
        <div className="container">
            <br />
            {loadingStatus === false ?
                <div>
                    <h5>Edit Case : {caseID}</h5>
                    <p> <b>Created By</b>: {CaseData.created_by} <b>Creted Date</b> : {formtDate(CaseData.created_at)} </p>
                    {CaseData.case_notes !== null ?
                        <p><b>QSC Request</b>: {getLastNote(JSON.parse(CaseData.case_notes))}</p>
                        : ''}
                    <FormProvider {...methods}>
                        <form onSubmit={e => e.preventDefault()}>
                            <div className="row">
                                {renderFields}
                            </div>
                        </form>
                        <div className="row">
                            <div className="col-md-4">
                                <Button text="Update" type="primary" style={{ color: '#fff' }} loading={btnLoading} onClick={() => updateCase()} />
                               <span className='success_font'> {successMessage}</span>
                            </div>
                        </div>
                        <hr />
                    </FormProvider>
                    <ToastComp message={ToastMessage} toastVisible={toastVisible} setToastVisibleAction={setToastVisibleAction} />
                    {Articles.length ? <ViewArticles data={Articles} RemoveIteam={''} from={'edit'} EditIteam={ShowEditModel} type={type} /> : ''}
                    <MySheets visibality={modalVisibality} handleModalClose={handleModalViewClick} modelContent={modelContent} modelHeaderData={modelHeaderData} />
                    {userFunction !== 'store' ?
                        <div className="updateCaseStatus row">
                            <div className="col-md-6">
                                <h4>Update Case</h4>
                                <CaseStatus caseID={caseID} caseNotes={CaseData.case_notes} handleStatus={CloseModles} CaseStatus={CaseData.status}/>
                            </div>
                        </div>
                        : ''}
                </div>
                : <Loader status={loadingStatus} />}
        </div>
    )
}
export default Editcase;