import React from "react";
import localStorage from '../services/localStorage'
import { useParams } from 'react-router-dom'
import { getSingleArticleData, postStoreArticleQty } from '../services/articles'
import { articleName, storeName } from '../utils/format'
import { pqStoreQuantity } from '../config/articleFileds'
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from 'react-hook-form'
import renderForm from '../utils/renderForm'
import Button from '@ingka/button';
import { UpdateArticleQty } from '../schemas/ArticleQty'
import { useNavigate } from "react-router-dom";
import Loader from './loading'
export const StoreQuantityUpdate = () => {
    const [btnLoading, setBtnloading] = React.useState(false);
    const UserStore = localStorage.get('user-store-id')
    let selectedFile = [];
    const navigate = useNavigate();
    const methods = useForm({
        // resolver: yupResolver(UpdateArticleQty),
    })
    const triggerSelectChange = (selectedType) => {
    }
    // handle file upload
    const triggerInputChange = (e) => {
        let fileName = e.target.name;
        let file = e.target.files[0]
        selectedFile.push({ 'file': file, 'name': fileName })
    }

    const URLdata = useParams()
    const Splitparams = URLdata.id.split('_');
    const params = { 'caseID': Splitparams[0], 'article_unique_id': URLdata.id }
    const [successMessage, setSuccessMessage] = React.useState('');
    const [CaseData, setCaseData] = React.useState();
    const [selectedArticle, setArticle] = React.useState([]);
    const [formStatus, setformStatus] = React.useState('create');
    function getCase() {
        getSingleArticleData(params)
            .then(res => {
                if (res.data.case) {
                    const CaseDetails = res.data;
                    setCaseData(CaseDetails.case)
                    checkStoreRecords(CaseDetails);
                    return true;;
                } else {
                    console.log('nodata')
                }
            })
            .catch(error => {

            });
    };
    const checkStoreRecords = (CaseDetails) => {
        const requestedArticle = CaseDetails.articles.filter((store, index) => store.uniquie_id === URLdata.id)
        const Artcledata = CaseDetails.articles.filter((store, index) => store.store_id === UserStore)
        if (Artcledata.length > 0) {
            setArticle(Artcledata[0]); 
            setformStatus('update')
        } else {
            setArticle(requestedArticle[0]);
            setformStatus('create')
        }


    }
    const renderFields = pqStoreQuantity.map(field => {
        let filedExist = selectedArticle[field.name];
        if (filedExist) { field.value = filedExist };
        return renderForm(field, triggerSelectChange, triggerInputChange);
    });
    const onSubmit = methods.handleSubmit(data => {
        setBtnloading(true);
        data['request_type'] = formStatus;
        data['uniquie_id'] = URLdata.id;
        data['caseId'] = params.caseID;
        data['store_id'] = UserStore;
        data['articel_number'] = selectedArticle.articel_number + '-' + selectedArticle.article_name;
        data['supplier_number'] = selectedArticle.supplier_number + '-' + selectedArticle.supplier_name;
        data['causing_party_code'] = selectedArticle.causing_party_code;
        data['manufacturing_date']=data['manufacturing_date']===undefined ? selectedArticle.manufacturing_date :data['manufacturing_date'];
        data['dispatch_date']= data['dispatch_date'] ===undefined ? selectedArticle.dispatch_date :data['dispatch_date'] ;
        data['best_before_date']= data['best_before_date'] ===undefined ? selectedArticle.best_before_date :data['best_before_date'] ;
        data['expiry_date']= data['expiry_date'] ===undefined ? selectedArticle.expiry_date :data['expiry_date'] ;
        data['damage_type'] = selectedArticle.damage_type;
        if(formStatus==='update'){
            data['damage_picture']=Object.keys(selectedArticle.damage_picture).length === 0 ? null : selectedArticle.damage_picture
            data['articleID']=selectedArticle.id
        }
        const formData = new FormData();
        formData.append('data', JSON.stringify(data));

        for (const key of Object.keys(selectedFile)) {
            formData.append('file_names[]', selectedFile[key].name)
            formData.append(selectedFile[key].name, selectedFile[key].file)
        }
        postStoreArticleQty(formData).then(res => {
            setBtnloading(false);
            if (res.status === 200) {
                setSuccessMessage('Sucessfully updated..');
                setTimeout(() => {
                    navigate('/case_associated')
                }, 2000);
            }
        })
            .catch(error => {
                setBtnloading(false);
            })
    });
    React.useEffect(() => {
        getCase();
    }, ['']);
    return (
        <div className="container">
            <div>
                <FormProvider {...methods}>
                    <div className="row">
                        <div>&nbsp;</div>
                        <h4>Update quantity for {selectedArticle ? articleName(selectedArticle.articel_number) : 'NA'}  : Store : {storeName(UserStore)}</h4>
                        {CaseData ?
                            <div>
                                Case Name : {CaseData.name}   Receiving Unit : {storeName(CaseData.receiving_unit_code)}

                            </div>
                            : '-'}
                        <hr />
                        {renderFields}
                    </div>

                    <div className="row">
                        <div className='col-md-3'>
                            <Button text="Update" type="primary" style={{ color: '#fff' }} onClick={onSubmit} loading={btnLoading}  />
                        </div>
                        <div className="col-md-3">
                         <span className="success_font"> <br />  {successMessage}</span> 
                        </div>
                    </div>
                </FormProvider>
            </div>

        </div>
    )
}
