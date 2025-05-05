import React, { useRef } from 'react'
import Table, { TableHeader, TableBody } from "@ingka/table";
import { formtDate } from '../../utils/format';
import { ResetPassword } from '../../services/users'
const List = ({ data, resetUserPassword,updateUserStatus }) => {
    const bgColor ={'ture':'','false':'#ebebeb'}
    return (
        <div style={{ overflow: 'scroll', height: '500px' }}>
            <Table style={{ fontSize: 14 + 'px' }}>
                <TableHeader sticky={true} >
                    <tr>
                        <th>Sl.No,</th>
                        <th>Short ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Unit</th>
                        <th>Function</th>
                        <th>Status</th>
                        <th></th>
                        <th>Cretaed at</th>
                    </tr>
                </TableHeader>
                <TableBody style={{ fontSize: 12 + 'px' }}>
                    {data.length > 0 ?
                        data.map((list, index) => {
                            return (
                                <tr style={{ 'background-color': bgColor[list.is_active],'padding-left':'1rem'}} key={index} >
                                    <td>&nbsp;&nbsp;&nbsp;{index + 1}</td>
                                    <td>{list.short_id}</td>
                                    <td>{list.name}</td>
                                    <td>{list.email}</td>
                                    <td>{list.unit_id}</td>
                                    <td>{list.user_function}</td>
                                    <td>{list.is_active ? <a style={{ 'color': '#073c69', 'cursor': 'pointer', 'fontWeight': 'bold' }} onClick={() => { updateUserStatus(list.email,!list.is_active) }}>De-activate</a> : <a style={{ 'color': '#073c69', 'cursor': 'pointer', 'fontWeight': 'bold' }} onClick={() => {  updateUserStatus(list.email,!list.is_active) }} >Activate</a>}</td>
                                    <td>
                                        <a style={{ 'color': '#073c69', 'cursor': 'pointer', 'fontWeight': 'bold' }} onClick={() => { resetUserPassword(list.email, list.short_id) }}>Reset password</a>
                                    </td>
                                    <td>{formtDate(list.created_at)}</td>
                                </tr>
                            )
                        })
                        :
                        <tr><td colspan="14" text-align="center">No records</td></tr>
                    }
                </TableBody>
            </Table>
        </div>
    )
};
export default List;