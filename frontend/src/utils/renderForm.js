import React from 'react'
import { Input } from '../components/input'
import { SelectComp } from '../components/select'
import { FreeTextArea } from '../components/textArea'
import { DatePickerComponent } from '../components/datePicker'
const RenderForm = (field ,triggerSelectChange,triggerInputChange,class_name=null)=> {
        const divId =field.id+'_div';
        const divClass = class_name !=null ? class_name :'col-md-3'
        if (field.type === 'text' || field.type === 'file' || field.type==='password') {
            return (<div className={divClass} key={divId} id={divId} ><Input {...field}   handleInputChange={triggerInputChange} /></div>)
        } if (field.type === 'textarea') {
            return (<div className={divClass} key={divId} id={divId} ><FreeTextArea {...field} /></div>)
        }
        if (field.type === 'select') {
            return (<div className={divClass} key={divId} id={divId} ><SelectComp handleSelectChange={triggerSelectChange} {...field} /></div>)
        }if (field.type === 'date') {
            return (<div className={divClass} key={divId}id={divId} ><DatePickerComponent {...field} /></div>)
        }
        return;
  }
  export default  RenderForm;