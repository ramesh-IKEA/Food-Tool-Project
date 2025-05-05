import React from 'react'
import { Select, Option } from '@ingka/select'
import Input from '@ingka/input-field'
import { postArticleStatus } from '../services/articles'
import { filterStores } from '../utils/format'
import Button from '@ingka/button'
import { requestOtherStores ,requestMoreInfoSingleStore} from '../services/case';
import localStorage from '../services/localStorage'
const ArticletStatus = ({ caseID, articles, receiving_unit, DiffrentUnit}) => {
    const options = ['Take quantity', 'Reject', 'Suggested Action', 'Approve']
    const [btnLoading, setBtnloading] = React.useState(false);
    const [status, setStatus] = React.useState();
    const [notes, setNotes] = React.useState();
    const [articleErrorMsg, setArticleErrorMsg] = React.useState('');
    const[messageClass,setmessageClass]=React.useState('')
    const RenderOptions = (options) => {
        const list = Object.keys(options)
            .map((key) => <Option key={key} name={options[key]} value={options[key]} />)
        return list;

    }
    const onSubmit = () => {
        setBtnloading(true)
        setArticleErrorMsg('')
        if (articles.length > 0) {
            const formData = { 'caseId': caseID, 'status': status, 'article': articles }
            postArticleStatus(formData)
                .then(res => {
                    setBtnloading(false)
                    if (res.status === 200) {
                    }
                })
        }
        else {
            setBtnloading(false)
            setArticleErrorMsg('Please select the articles to update');
        }
    }
    const handleChange = (e) => {
        setStatus(e.target.value);
        e.preventDefault();
        return;
    }
    const requestFromUnits = (case_id, receiving_unit) => {
        // setBtnloading(true)
        setArticleErrorMsg('')
        if (articles.length > 0) {
            if (DiffrentUnit === '') {
                const stores = filterStores(receiving_unit);
                const user_email = localStorage.get('user_email');
                const formData = { 'case_id': case_id, 'stores': stores, 'article': articles, 'user_email': user_email, 'notes': notes }
                requestOtherStores(formData).then((res) => {
                    setBtnloading(false)
                    if (res.status === 200) {
                        setmessageClass('success_font');
                        setArticleErrorMsg(res.data.message);
                        setNotes('')
                    }
                });
            }
            else{ // if selected unit is diffrent from receiving unit
                const user_email = localStorage.get('user_email');
                const formData = { 'case_id': case_id, 'storeId': DiffrentUnit, 'article': articles, 'user_email': user_email, 'notes': notes }
                requestMoreInfoSingleStore(formData).then((res) => {
                    setBtnloading(false)
                    if (res.status === 200) {
                        setmessageClass('success_font');
                        setArticleErrorMsg(res.data.message);
                        setNotes('')
                    }
                });
            }

        } else {
            setBtnloading(false)
            setmessageClass('error_font');
            setArticleErrorMsg('Please select the articles to update');
        }
    };
    return (
        <div>
            {/* <Select name="status"  onChange={(e) =>handleChange(e)} >
                <RenderOptions {...options}  />
            </Select>
            <Button  text="Update" type="primary" loading={btnLoading} style={{ color: '#fff' }} onClick={onSubmit}/> */}
            <div className='col-md-12'>
                <Input label={'Enter comments'} placeholder={'Enter commnents'} onChange={(e) => setNotes(e.target.value)} />
                <Button text="Request" type="primary" loading={btnLoading} style={{ color: '#fff' }} onClick={() => requestFromUnits(caseID, receiving_unit)} />

            </div>
           <span className={messageClass}>{articleErrorMsg}  <br /></span> 
        </div>
    )
}
export default ArticletStatus;