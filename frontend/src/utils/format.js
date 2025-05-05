import {SenderData,articlesList,storeLocation} from '../config/varieraDataSource'
import {Status_lable,status_class,suggested_action} from '../config/status'
import { getSupportingFileView } from '../services/case'
import { saveAs } from 'file-saver';
import moment from 'moment';
export const senderName =(code)=>{
    return SenderData[code]
}
export const articleName =(code)=>{
    return articlesList[code]
}

export const formtDate =(date,format=null)=>{
    console.log(date,typeof date)
    return moment(date).format( format ? format : 'DD-MMM-yyyy')
}
export const storeName=(storeCode)=>{
    return storeCode + '-' +storeLocation[storeCode]
}
export const ViewFile =(fileName,path,e)=>{
    e.target.text = 'Please wait..'
    getSupportingFileView(fileName,path)
        .then((res)=>{
            e.target.text = 'Download'
        const file = new Blob(
            [res.data], { type:res.data.type});
            saveAs(file,fileName)
        });
}
export const StatusText=(status)=>{
    return Status_lable[status]
}
export const actionLabel=(action)=>{
    if(action){
        let key=action.split(['-'])
         return suggested_action[key[0]];
    }
    return 'NA';
    
}
export const StatusClass=(status)=>{
    return status_class[status]
}
export const filterStores =(store_id)=>{
 
    let list=  Object.keys(storeLocation).map((key)=>{
        if(key !== store_id && key!=='SO'){
            return key;
        }
        else {
            return;
        }
    });
    return list.filter(Number);

}
