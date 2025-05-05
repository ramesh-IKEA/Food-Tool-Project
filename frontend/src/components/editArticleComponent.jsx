import React from 'react';
import Button from '@ingka/button';
import renderForm from '../utils/renderForm'
import { FormProvider, useForm } from 'react-hook-form'
import { postUpdateArticles } from '../services/articles'
import Loader from './loading'
const EditAricleComponent = ({ fields, selectedArticle, caseid, articleID, CloseModal }) => {
    const [btnLoading, setBtnloading] = React.useState(false);
    const selectedFile = [];
    const methods = useForm({

    })
    const triggerSelectChange = (selectedType) => {
        // console.log(selectedType)
    }
    const triggerInputChange = (e) => {
        let fileName = e.target.name;
        let file = e.target.files[0]
        selectedFile.push({ 'file': file, 'name': fileName })
    }
    const renderAForm = fields.map(field => {
        let filedExist = selectedArticle[field.name];
        if (filedExist !== 'undefined') { field.value = filedExist };
        return renderForm(field, triggerSelectChange, triggerInputChange);

    });
    //  handle form submit
    const onSubmit = methods.handleSubmit(data => {
        setBtnloading(true);
        data['request_type'] = 'update';
        data['caseID'] = caseid
        data['articleID'] = articleID
        data['damage_picture']=Object.keys(selectedArticle.damage_picture).length === 0 ? null : selectedArticle.damage_picture
        data['id']=selectedArticle.id
        data['articel_number'] = selectedArticle.articel_number + '-' + selectedArticle.article_name;
        data['supplier_number'] = selectedArticle.supplier_number + '-' + selectedArticle.supplier_name;
        data['manufacturing_date']=data['manufacturing_date']===undefined? selectedArticle.manufacturing_date :data['manufacturing_date'];
        data['dispatch_date']= data['dispatch_date'] ===undefined? selectedArticle.dispatch_date :data['dispatch_date'] ;
        data['best_before_date']= data['best_before_date'] ===undefined? selectedArticle.best_before_date :data['best_before_date'] ;
        data['expiry_date']= data['expiry_date'] ===undefined? selectedArticle.expiry_date :data['expiry_date'] ;
        const formData = new FormData();
        formData.append('data', JSON.stringify(data));

        for (const key of Object.keys(selectedFile)) {
            formData.append('file_names[]', selectedFile[key].name)
            formData.append(selectedFile[key].name, selectedFile[key].file)
        }
        postUpdateArticles(formData)
            .then(res => {
                setBtnloading(false);
                if (res.status === 200) {
                    CloseModal('articleUpdate', res.data.message)
                }
            })
            .catch(error => {
                setBtnloading(false);
            })
    });
    return (
        <div>
            <FormProvider {...methods}> 
                <form onSubmit={e => e.preventDefault()}>
                    <div className="row">
                        {renderAForm}
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <Button text="Update" type="primary" onClick={onSubmit} style={{ color: '#fff' }} loading={btnLoading}  />
                        </div>
                    </div>
                </form>
            </FormProvider>
        </div>
    )

}

export default EditAricleComponent;