import React, { useRef } from 'react'
import Table, { TableHeader, TableBody } from "@ingka/table";
import { formtDate, storeName ,StatusText,StatusClass,actionLabel} from '../utils/format'
import { generateBCPdf, assignCase } from '../services/case'
import infoImg from '../images/information-circle.svg'
import localStorage from '../services/localStorage'
const CaseListComponent = ({ data, ViewMore, source, refreshList, pComponent }) => {
    const reportTemplateRef = useRef(null);
    const [LoadingStatus, setLoadingStatus] = React.useState(false)
    const [CaseData, setCaseData] = React.useState(false)
    const user_type = localStorage.get('user-unit')
    const link = (caseID, type, status) => {
        switch (source) {
            case 'new_cases':
                return <a href={'/case/edit/' + caseID + '/' + type}>Edit</a>
            case 'buyes_claim':
                return <div id={'loading_' + caseID}> <a href='#' onClick={(e) => DownloadBC(caseID, e)}>Download BC</a></div>
            default:
                return <div className='important_font'> {status === 'AI'  && pComponent!=='associated_list' ? <a href={'/case/edit/' + caseID + '/' + type}> <img src={infoImg} /> Update Information</a> : '-'}</div>;
        }

    }
    const DownloadBC = (caseID, e) => {
        e.target.text = 'Please wait..'
        generateBCPdf(caseID)
            .then(res => {
                const file = new Blob(
                    [res.data],
                    { type: 'application/pdf' });
                //Build a URL from the file
                const fileURL = URL.createObjectURL(file);
                const link = document.createElement('a');
                link.href = fileURL
                link.setAttribute('download', caseID + '_bc.pdf');
                document.body.appendChild(link);
                link.click()
                e.target.text = 'Download BC'
                setLoadingStatus(false)
                link.remove();
            })
            .catch(err => {
                setLoadingStatus(false)
                e.target.text = 'Download BC'
            })
    }
    const assignTo = (case_id) => {
        let user_email = localStorage.get('user_email')
        const data = { 'case_id': case_id, 'user_email': user_email };
        assignCase(data)
            .then(res => {
                if (res.status === 200) {
                    refreshList();
                }
            });
    }
    const renderLinks = (list) => {
        return JSON.parse(list).map((val, key) => {
            return <div className='important_font'> {val.status ==='open'? <a key={key} href={'/case/add_qty/' + val.article}>{val.article} Add </a>:<span className='success_font'>{val.article} Updated</span> }</div>
        });
    }
    return (
        <div>
            <Table style={{ fontSize: 14 + 'px' }}>
                <TableHeader sticky={true} >
                    <tr>
                        <th>Case ID</th>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Invoice Number</th>
                        <th>Invoice Date</th>
                        <th>Receiving Unit</th>
                        <th>Carrier Name</th>
                        <th>Sender Name</th>
                        <th>Status</th>
                        <th>Final action by QSC</th>
                        <th>Created Date</th>
                        <th>Created By</th>
                        <th>Assigned</th>
                        <th></th>
                        <th></th>
                    </tr>
                </TableHeader>
                <TableBody style={{ fontSize: 12 + 'px' }}>
                    { data.length > 0 ?
                    data.map((list, index) => {
                        return (
                            <tr key={index} >
                                <td>{list.case_id}</td>
                                <td>{list.type}</td>
                                <td>{list.name}</td>
                                <td>{list.invoice_number}</td>
                                <td>{formtDate(list.invoice_date)}</td>
                                <td>{storeName(list.receiving_unit_code)}</td>
                                <td>{list.carrier_name}</td>
                                <td>{list.sender_name}</td>
                                <td><span className={'label '+StatusClass(list.status)}>{StatusText(list.status)} </span></td>
                                <td>{list.action_confirmation ? actionLabel(list.action_confirmation) : 'NA'}</td>
                                <td>{formtDate(list.created_at)}</td>
                                <td>
                                    {list.created_by}
                                </td>
                                <td>
                                    {list.assign_to === null ? user_type==='SO'? <a onClick={() => assignTo(list.case_id)}>Assign to me</a>:'-' : list.assign_to_name}
                                </td>
                                <td>
                                   {link(list.case_id, list.type, list.status)}
                                </td>
                                <td>
                                {/* {list.case_id} */}
                                {(pComponent !== undefined && pComponent !== '') ?
                                           <div><b>QSC Notes </b>: <span className=''>{list.notes ? list.notes :'-'} </span>{renderLinks(list.article_is)}</div>
                                            : <a href='#' style={{'color':'#073c69','cursor':'pointer','fontWeight':'bold'}} onClick={() => ViewMore(list.case_id)}> {user_type==='SO' ?'Analyze':'More'}</a>}
                                </td>
                            </tr>
                        )
                    })
                : 
                <tr><td  colspan="14" text-align="center">No records</td></tr>
                }
                </TableBody>
            </Table>
        </div>
    )
};
export default CaseListComponent;
