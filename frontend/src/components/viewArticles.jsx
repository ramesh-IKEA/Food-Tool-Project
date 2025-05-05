import React from 'react'
import Table, { TableHeader, TableBody } from "@ingka/table";
import { senderName, articleName, formtDate } from '../utils/format'
import ls from '../services/localStorage'
const ViewArticles = ({ data, RemoveIteam ,from=null,EditIteam=null,type}) => {
    
    const userStore=ls.get('user-store-id') 
    const geteName=(data)=>{
        let name =data.split('-');
        return name[1];
    }
    return (
        <Table>
            <TableHeader sticky={true} style={{ fontSize: 10 + 'px' }}>
                <tr>
                    <th>Store ID</th>
                    <th>Article</th>
                    <th>Article Value</th>
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
                </tr>
            </TableHeader>
            <TableBody>
                {data.map((list, index) => {
                    return (
                        <tr key={index} style={{ fontSize: 10 + 'px' }}>
                            <td>{list.store_id}</td>
                            <td>{list.articel_number}</td>
                            <td>{list.article_value ? list.article_value : 'NA'}</td>
                            <td>{list.supplier_number? geteName(list.supplier_number) :'NA'}</td>
                            <td>{list.consingnment_id}</td>
                            <td>{list.damage_type}</td>
                            <td>{list.causing_party_name}</td>
                            <td>{list.batch_number}</td>
                            <td>{list.invoice_quantity}</td>
                            <td>{type==='SQ' ? list.received_quantity : list.available_stock}</td>
                            <td>{list.damaged_quantity}</td>
                            <td>{formtDate(list.dispatch_date)}</td>
                            <td>{formtDate(list.manufacturing_date)}</td>
                            <td>{formtDate(list.best_before_date)}</td>
                            <td>{formtDate(list.expiry_date)}</td>
                            <td>
                                {RemoveIteam ? <a href onClick={() => RemoveIteam(list.articel_number)}>Remove</a> : '-'}
                            </td>
                            <td>
                                {from==='edit' && (userStore===list.store_id || userStore==='SO')  ? <a href onClick={() => EditIteam(index)}>Edit</a>: '-'}
                            </td>
                            <td>
                            </td>
                        </tr>
                    );
                })}

            </TableBody>
        </Table>
    );
}
export default ViewArticles;