import React from 'react';
import Button from '@ingka/button'
import { Select, Option } from '@ingka/select'
import Input from '@ingka/input-field'
import { postCaseStatus } from '../services/case';
import ls from '../services/localStorage'
const CaseStatus = ({ caseID, caseNotes,handleStatus ,CaseStatus,rcaFile}) => {
    const optionsFilter =['RJ','AP']
    const options = optionsFilter.includes(CaseStatus)? {'open':'Enabel'} : {'AI':'Request more info from reporting store','AP':'Approve','RJ':'Reject'};//,'buyes_claim':'Buyers claim'
    const NoteFiled = { name: 'notes',label:'Notes',type: 'text',id: 'notes_id',placeholder: 'Notes',readOnly:false}
    const fileFiled = { name: 'RCA_approval',label:'RCA',type: 'file',id: 'RCA_id',placeholder: 'RCA'}
    const [btnLoading, setBtnloading] = React.useState(false);
    const [inputDispayStatus, setinputDispayStatus] = React.useState(false);
    const [status, setStatus] = React.useState();
    const [notes, setNotes] = React.useState();
    const selectedFile = [];
    const RenderOptions = (options) => {
        const list = Object.keys(options)
            .map((key) => <Option key={key} name={options[key]} value={key} />)
        return list;

    }
    const handleChange = (e) => {
        setStatus(e.target.value)
        if(e.target.value==='AP'){
            setinputDispayStatus(true)
        }else{
            setinputDispayStatus(false)
        }
        e.preventDefault();
        return;
    }
    const triggerInputChange = (e) => {
        let fileName = e.target.name;
        let file = e.target.files[0]
        selectedFile.push({ 'file': file, 'name': fileName });
    }
    const onSubmitsStatus = () => {
        
        const data = { 'caseId': caseID, 'status': status,'qsc_notes':notes,'user':ls.get('user_email'),'old_rca_file':rcaFile }
        if(notes!=''){
            data['existing_notes']=caseNotes;
        }
        const formData = new FormData();
        formData.append('data', JSON.stringify(data));
        for (const key of Object.keys(selectedFile)) {
            formData.append('file_names[]', selectedFile[key].name)
            formData.append(selectedFile[key].name, selectedFile[key].file)
        }
        setBtnloading(true)
        postCaseStatus(formData)
            .then(res => {
                setBtnloading(false)
                if (res.status === 200) {
                    return handleStatus(status)
                }
            })
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <Select name="case_status" onChange={(e) => handleChange(e)} label={'Status'}  value={status}>
                        <RenderOptions {...options} />
                    </Select>
                </div>
                <div className="col-md-3">
                  <Input {...NoteFiled}  onChange={(e)=>setNotes(e.target.value)}/> 
                </div>
                <div className="col-md-3">
                {inputDispayStatus ?  <Input {...fileFiled}  onChange={(e)=>triggerInputChange(e)} /> :''}  
                </div>
            </div>

            <Button text="Update" type="primary" loading={btnLoading} onClick={onSubmitsStatus} style={{ color: '#fff' }} />
        </div>

    )
}
export default CaseStatus;