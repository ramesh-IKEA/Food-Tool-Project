// import _ from "lodash";
import React from 'react'
import Button from '@ingka/button';
import renderForm from '../../utils/renderForm'
import { pq, sq } from '../../config/case_form'
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateCasePQ, CreateCaseSQ } from '../../schemas/CreateCase'
import { FormProvider, useForm } from 'react-hook-form'
import { postCase } from '../../services/case'
import { useNavigate } from "react-router-dom";
import ls from '../../services/localStorage'
const CaseCreate = () => {
    const [type, setType] = React.useState();
    const [btnLoading, setBtnloading] = React.useState(false);
    const selectedFile = [];
    // assign validation 
    const CreateCase = type === 'SQ' ? CreateCaseSQ : CreateCasePQ;
    const methods = useForm({
        // resolver: yupResolver(CreateCase),
    })
    const navigate = useNavigate();
    // assign fields based on the dropdown selection
    const formInputFields = type === 'SQ' ? sq : pq;
    const triggerSelectChange = (selectedType) => {
        const Type=selectedType.split('-');
        setType(Type[0])
        return false;
    }
    const fields = [...formInputFields];
     // handle file upload
     const triggerInputChange = (e) => {
        let fileName = e.target.name;
        let file = e.target.files[0]
        selectedFile.push({ 'file': file, 'name': fileName })
    }
    // render fields
    const renderFields = fields.map(field => {
        return renderForm(field, triggerSelectChange,triggerInputChange);
    });
   
    //  handle form submit
    const onSubmit = methods.handleSubmit(data => {
        setBtnloading(true);
        data['created_by'] =ls.get('user_email');
        data['type'] =type;
        data['carrier_name'] ='NA';
        const formData = new FormData();
        formData.append('data', JSON.stringify(data));
        for (const key of Object.keys(selectedFile)) {
            formData.append('file_names[]', selectedFile[key].name)
            formData.append(selectedFile[key].name, selectedFile[key].file)
        }
        postCase(formData)
            .then(res => {
                if (res.status === 200) {
                    setBtnloading(false);
                    const { caseID, type ,sender_name,receiving_unit} = res.data;
                        navigate("/add_articles?caseID=" + caseID + "&type=" + type+"&supplier="+sender_name+"&receiving_unit="+receiving_unit);
                }
            })
            .catch(error => {
                setBtnloading(false);
            })
    });

    return (
        <>
        <FormProvider {...methods}>
            <div className="container">
                <h3 style={{ paddingTop: 40 + "px" }}>Create Case</h3>
                <form onSubmit={e => e.preventDefault()}>
                    <div className="row">
                        {renderFields}
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <Button text="Save and add articles" type="primary" loading={btnLoading} onClick={onSubmit} style={{ color: '#fff' }} />
                        </div>
                    </div>
                </form>
            </div>
        </FormProvider>
        </>
    );
}

export default CaseCreate;