import React from 'react'
import ViewArticles from '../../components/caseViewArticles';
import SupportingFiles from '../../components/supportingFiles'
import { formtDate, storeName,ViewFile } from '../../utils/format'
import CaseStatus from '../../components/caseStatus'
import localStorage from '../../services/localStorage'


import { json } from 'react-router-dom';
const ViewCase = ({ caseData, handleModalClose }) => {
    const userFunction =localStorage.get('user-function')
    let totalValue = 0;
    let labourHours = 0;
    let OtherCost = 0;
    caseData.articles.map((list) => {
        console.log(list.labor_hours)
        totalValue += list.article_value!=='NA' ?  parseFloat(list.article_value) : 0;
        labourHours += list.labor_hours!==null ?  parseFloat(list.labor_hours) :0;
        OtherCost += list.other_cost !==null ? parseFloat(list.other_cost) : 0;
        return;
    })
   
    const CloseModles = (status=null) => {
        handleModalClose(status)
    }
    return (
        <div>
            
            <div className="row case_info">
                    <h5 >Case Information : {caseData.case_id}</h5>
                    <hr />
                <div className="col-md-9">
                    <div className="row ">
                        <div className="col-md-4">
                            <div className="form-field">
                                <div className="input-field input-field--prefixed input-field--suffixed label-wrapper label-wrapper--text-input">
                                    <label>Type : {caseData.type}</label>
                                </div>
                                <div className="input-field input-field--prefixed input-field--suffixed label-wrapper label-wrapper--text-input">
                                    <label>Invoice Number : {caseData.invoice_number}</label>
                                </div>
                                <div className="input-field input-field--prefixed input-field--suffixed label-wrapper label-wrapper--text-input">
                                    <label>Shipment Type : {caseData.shipment_type ? caseData.shipment_type : 'NA'}</label>
                                </div>
                                <div className="input-field input-field--prefixed input-field--suffixed label-wrapper label-wrapper--text-input">
                                    <label>Dispatch date : {caseData.dispatch_date ? formtDate(caseData.dispatch_date) : 'NA'}</label>
                                </div> 
                                <div className="input-field input-field--prefixed input-field--suffixed label-wrapper label-wrapper--text-input">
                                    <label>RCA copy : {caseData.rca_file ? <a style={{'color':'#073c69','cursor':'pointer','fontWeight':'bold'}} href onClick={(e)=>{ViewFile(caseData.rca_file,'supporting_files',e)}}>Download</a> : 'NA'}</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="input-field input-field--prefixed input-field--suffixed label-wrapper label-wrapper--text-input">
                                <label>Name : {caseData.name}</label>
                            </div>
                            <div className="input-field input-field--prefixed input-field--suffixed label-wrapper label-wrapper--text-input">
                                <label>Receiving Unit :  {storeName(caseData.receiving_unit_code)}</label>
                            </div>
                            <div className="input-field input-field--prefixed input-field--suffixed label-wrapper label-wrapper--text-input">
                                <label>Serial Number : {caseData.searl_number ? caseData.searl_number : 'NA'}</label>
                            </div>
                            <div className="input-field input-field--prefixed input-field--suffixed label-wrapper label-wrapper--text-input">
                                <label>Total Article Cost : {totalValue}</label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="input-field input-field--prefixed input-field--suffixed label-wrapper label-wrapper--text-input">
                                <label>Invoice Date : {formtDate(caseData.invoice_date)}</label>
                            </div>
                            <div className="input-field input-field--prefixed input-field--suffixed label-wrapper label-wrapper--text-input">
                                <label>Sender Name : {caseData.sender_name}</label>
                            </div>
                            <div className="input-field input-field--prefixed input-field--suffixed label-wrapper label-wrapper--text-input">
                                <label>Truck Temprature : {caseData.truck_temprature ? caseData.truck_temprature : 'NA'}</label>
                            </div>
                            <div className="input-field input-field--prefixed input-field--suffixed label-wrapper label-wrapper--text-input">
                                <label>Total Labor hours : {labourHours > 0 ?Math.trunc(labourHours/60) + 'Hr '+ labourHours %60 +' Min' : 'NA'}</label>
                            </div>
                            <div className="input-field input-field--prefixed input-field--suffixed label-wrapper label-wrapper--text-input">
                                <label>Other Cost : {OtherCost > 0 ? OtherCost : '0'}</label>
                            </div>

                        </div>
                    </div>
                </div>
                {caseData.supportingFiles.length ? <div className="col-md-3" > <SupportingFiles data={caseData.supportingFiles} /></div> : ''}
            </div>
            <div className="row Action_to_Units">
            <div className="col-md-6">
                <div className="input-field input-field--prefixed input-field--suffixed label-wrapper label-wrapper--text-input">
                    <label className=''>Store notes : {caseData.store_notes ? caseData.store_notes : 'NA'}</label>
                </div>
                </div>
                { caseData.type==='PQ'?
                <div className="col-md-6">
                    <div className="input-field input-field--prefixed input-field--suffixed label-wrapper label-wrapper--text-input">
                        <label className=''>Final Action to Units : {caseData.action_confirmation ? caseData.action_confirmation : 'Waiting'}</label>
                    </div>
                    </div>
                    :''
                }
                
            </div>

            <h5 className='pt-2'>Case Articles</h5>
            <hr />
             <ViewArticles data={caseData.articles} RemoveIteam={''} caseID={caseData.case_id} status={caseData.status} receving_unit={caseData.receiving_unit_code} userFunction={userFunction} type={caseData.type}/> 
            {userFunction !=='store' ?
            <div className="updateCaseStatus row">
                <hr />
                <div className="col-md-6">
                    <h4>Update Case</h4>
                    <CaseStatus caseID={caseData.case_id} caseNotes={caseData.case_notes} rcaFile={caseData.rca_file} handleStatus={CloseModles} CaseStatus={caseData.status}/>
                </div>
                
            </div>
                :''}
        </div>
    )
}
export default ViewCase;