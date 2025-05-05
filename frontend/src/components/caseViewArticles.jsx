import React from 'react'
import Table, { TableHeader, TableBody } from "@ingka/table";
import ArticletStatus from './articleStatus'
import { senderName, articleName, formtDate, ViewFile, actionLabel } from '../utils/format'
import Checkbox from '@ingka/checkbox';
const CaseViewArticles = ({ data, RemoveIteam, caseID, receving_unit, userFunction,status ,type}) => {
    const [selectedArticles, setselectedArticles] = React.useState([])
    const [DiffrentUnit, setDiffrentUnit] = React.useState('')
    let tempSelectedArticles = [...selectedArticles]
    console.log(selectedArticles)
    const HandleCheckBox = (e) => {
        let storeId = e.target.getAttribute('dataStore');
        let masterID = e.target.getAttribute('dataMasterID');
        if (e.target.checked) {
            tempSelectedArticles.push({ 'article': e.target.value, 'status': 'open' ,'master_id':masterID})
        } else {
            tempSelectedArticles = tempSelectedArticles.filter((article) => article.article !== e.target.value)
        }
        if (storeId !== receving_unit) {
            setDiffrentUnit(storeId)
        }else{
            setDiffrentUnit('')
        }
        setselectedArticles(tempSelectedArticles)

    }

    return (
        <div>
            <Table>
                <TableHeader sticky={true} style={{ fontSize: 10 + 'px' }}>
                    <tr>
                        <th></th>
                        <th>Store ID</th>
                        <th>Status</th>
                        <th>Article</th>
                        <th>Article Value</th>
                        <th>Suggested action</th>
                        <th>Final action by QSC</th>
                        <th>Supplier</th>
                        <th>Consingnment ID</th>
                        <th>Damage Type</th>
                        <th>Causing Party</th>
                        <th>Batch Number</th>
                        <th>Invoice Quantity</th>
                        <th>Received/Avilable Quantity</th>
                        <th>Damaged Quantity</th>
                        <th>Dispatch Date</th>
                        <th>Manufacturing Date</th>
                        <th>Best Before Date</th>
                        <th>Expiry Date</th>
                        <th></th>
                        <th></th>
                    </tr>
                </TableHeader>
                <TableBody>
                    {data.map((list, index) => {
                        return (
                            <tr key={index} style={{ fontSize: 10 + 'px' }}>
                                <td>

                                    <Checkbox value={list.uniquie_id} onChange={(e) => HandleCheckBox(e)} dataStore={list.store_id} dataMasterID={list.master_article_id} />
                                </td>
                                <td>{list.store_id}</td>
                                <td>{list.status ? list.status : '-'}</td>
                                <td>{articleName(list.articel_number)}</td>
                                <td>{list.article_value ? list.article_value : 'NA'}</td>
                                <td>{actionLabel(list.suggested_action)}</td>
                                <td>{list.action_confirmation ? list.action_confirmation : 'NA'}</td>
                                <td>{senderName(list.supplier_number)}</td>
                                <td>{list.consingnment_id}</td>
                                <td>{list.damage_type}</td>
                                <td>{senderName(list.causing_party_code)}</td>
                                <td>{list.batch_number}</td>
                                <td>{list.invoice_quantity}</td>
                                <td>{type==='SQ' ? list.received_quantity : list.available_stock}</td>
                                <td>{list.damaged_quantity}</td>
                                <td>{formtDate(list.dispatch_date)}</td>
                                <td>{formtDate(list.manufacturing_date)}</td>
                                <td>{formtDate(list.best_before_date)}</td>
                                <td>{formtDate(list.expiry_date)}</td>
                                <td>
                                    {RemoveIteam ? <a href onClick={() => RemoveIteam(list.articel_number)}>Remove</a> : ''}
                                </td>
                                <td>
                                    {list.damage_picture != null ?
                                       
                                        Object.keys(JSON.parse(list.damage_picture)).map((key) => {
                                            return (
                                                
                                                <p key={key}><a style={{ 'color': '#073c69', 'cursor': 'pointer', 'fontWeight': 'bold' }} onClick={(e) => { ViewFile(JSON.parse(list.damage_picture)[key].file_name, 'article_pictures', e) }}>Download</a></p>
                                            )
                                        })

                                        : 'NA'
                                    }
                                </td>
                            </tr>

                        );
                    })}

                </TableBody>
            </Table>
            {userFunction === 'PQ' && (status==='open' || status==='AI') ?
                <div className="updateCaseStatus row ">
                    <div className="col-md-6">
                        <h4>Request from Other units</h4>
                        <ArticletStatus caseID={caseID} receiving_unit={receving_unit} articles={selectedArticles} DiffrentUnit={DiffrentUnit}/>
                    </div>
                </div>
                : ''}
        </div>
    );
}
export default CaseViewArticles;