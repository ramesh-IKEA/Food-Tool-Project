import React, { useState } from 'react'
import Button from '@ingka/button';
import renderForm from '../../utils/renderForm'
import { pqArticle, sqArticle } from '../../config/articleFileds'
import { supplierArticlesList } from '../../config/varieraDataSource'
import { yupResolver } from "@hookform/resolvers/yup";
import { ArticelCreatePQ, ArticelCreateSQ } from '../../schemas/ArticelCreate'
import { FormProvider, useForm } from 'react-hook-form'
import { postCaseArticles } from '../../services/articles'
import { useSearchParams } from "react-router-dom";
import ViewArticles from '../../components/viewArticles'
const CaseCreateArticles = () => {
    // console.log();
    // get url pramanters
    let [searchParams] = useSearchParams();
    const [btnLoading, setBtnloading] = React.useState(false);
    let selectedFile = [];
    const caseID = searchParams.get("caseID");
    const caseType = searchParams.get("type");
    const supplier = searchParams.get("supplier");
    const receiving_unit = searchParams.get("receiving_unit");
    // assign validation based on case type
    const ArticelCreate = caseType === 'PQ' ? ArticelCreatePQ : ArticelCreateSQ;
    const showForm = true;
    const Article = [];
    const [state, setState] = useState(Article ?? []);
    const methods = useForm({
        // resolver: yupResolver(ArticelCreate),
    })
    // assign fields based on case type
    const formInputFileds = caseType === 'PQ' ? pqArticle : sqArticle;
    const triggerSelectChange = (selectedType) => {
    }
    // handle file upload
    const triggerInputChange = (e) => {
        let fileName = e.target.name;
        let file = e.target.files[0]
        selectedFile.push({ 'file': file, 'name': fileName })
    }
    const fileds = [...formInputFileds];
    if (supplier !== null && caseType=='PQ') {
        let index = caseType=='PQ' ?0 : 7;
        fileds[index].value = supplier
    }
    // filter articles 
    let supplierCode = supplier.split('-')
    let Articleindex = caseType=='PQ' ?1 : 0;
    fileds[1].options = supplierArticlesList[supplierCode[0]];
    const renderFields = fileds.map(field => {
        return renderForm(field, triggerSelectChange, triggerInputChange);
    });
    // handel  save button click
    const onSaveArticle = methods.handleSubmit(data => {
        if (supplier !== null && caseType=='PQ') {
            data["supplier_number"] = supplier;
        }
        data["receiving_unit"] = receiving_unit;
        data['damage_picture'] = selectedFile;
        selectedFile = [];
        setState([...state, data]);
    });

    // handle submit button click
    const onSubmitArticle = methods.handleSubmit(() => {
        setBtnloading(true);
        const data = { 'caseId': caseID, 'articles': state }
        const formData = new FormData();
        formData.append('data', JSON.stringify(data));

        for (const key of Object.keys(state)) {
            if (state[key].damage_picture) {
                for (const picKey of Object.keys(state[key].damage_picture)) {
                    formData.append('file_names[]', key + state[key].articel_number + picKey);
                    formData.append(key + state[key].articel_number + picKey, state[key].damage_picture[picKey].file)
                }
            }
        }
        // console.log(formData)
        postCaseArticles(formData)
            .then(res => {
                //    console.log(res);
                window.location.href = '/case_list'
            })
            .catch(error => {
                setBtnloading(false);
            });
    });
    // remove saved articles 
    const RemoveArticle = (articel_number) => {
        setState((state) =>
            state.filter((article) => article.articel_number !== articel_number)
        );

    }
    return (
        <div className="container" style={{ paddingTop: 40 + "px" }}>
            {showForm ? <h3 >Add Articles</h3> : ''}
            <p>Articles for case : <b>{caseID}</b>  </p>
            {showForm ?
                <FormProvider {...methods}>
                    <form onSubmit={e => e.preventDefault()} >
                        <div className="row">
                            {renderFields}
                        </div>
                        <div className="row" style={{ paddingTop: 40 + "px" }}>
                            <div className="col-md-4">
                                <Button text="Save Article" type="primary" onClick={onSaveArticle} style={{ color: '#fff' }} />
                            </div>
                            <div className="finalSubmit col-md-4">
                                {state.length > 0 ? <Button text="Submit case for review" type="primary" loading={btnLoading} onClick={onSubmitArticle} style={{ color: '#fff' }} /> : ''}
                            </div>
                        </div>
                    </form>
                </FormProvider>
                : ''}

            <div className="list ">
                {state.length > 0 ? <ViewArticles data={state} RemoveIteam={RemoveArticle} /> : ''}
            </div>
        </div>
    );
}
export default CaseCreateArticles