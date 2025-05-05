import React from 'react'
import Table, { TableHeader, TableBody } from "@ingka/table";
import {ViewFile,formtDate } from '../utils/format'
const SupportingFiles = (data) => {
    
    return (
        <div>
            <h5>Supporting Files</h5>
            <Table style={{backgroundColor:'#F5F5F5'}}>
                <TableHeader sticky={true} style={{ fontSize: 10 + 'px' }}>
                    <tr>
                        <th>Date</th>
                        <th>File Type</th>
                        <th>File</th>

                    </tr>
                </TableHeader>
                <TableBody>
                    {data.data.map((list, index) => {
                        return (
                            <tr key={index + 'files'} style={{ fontSize: 10 + 'px' }}>
                                <td>
                                    {formtDate(list.created_at)}
                                </td>
                                <td>
                                    {list.field_name}
                                </td>
                                <td>
                                    <a style={{'color':'#073c69','cursor':'pointer','fontWeight':'bold'}} href onClick={(e)=>{ViewFile(list.file_name,'supporting_files',e)}}>Download</a>
                                </td>
                            </tr>
                        )
                    })
                    }
                </TableBody>
            </Table>
        </div>
    )
}
export default SupportingFiles