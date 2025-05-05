import React, { useState ,useEffect} from 'react'
import { fetchCases,getCaseData } from '../../services/case'
import CaseListComponent from '../../components/caseList'
import MySheets from '../../components/model'
import ViewCase from './viewCase'
import Loader from '../../components/loading'
import axios from 'axios'
const CaseList = () => {
    const [caseList, setCaseList] = useState([]);
    const [modalVisibality, setModalVisibality] = useState(false);
    const [loadingStatus, setloadingStatus] = useState(true);
    const [modelContent, setModalContent] = useState('');
    const [modelHeaderData, setModalHeaderData] = useState({});
    const cases = () => {
        setloadingStatus(true)
        fetchCases('all').then(res => {
            setloadingStatus(false)
            if (res.data.records.length > 0) {
                setCaseList(res.data.records)
            }else{
                setCaseList([])
            }
        })
    };
    const handleModalViewClick = () => {
        return setModalVisibality(!modalVisibality)
    }
    const closeModel = () => {
        setModalVisibality(false)
        cases()
    }
    const caseViewMore = (index) => {

        getCaseData(index).then(res=>{
            setModalVisibality(!modalVisibality);
            let selectedCase =res.data.case;
            selectedCase ['articles'] =res.data.articles;
            selectedCase ['supportingFiles'] =res.data.supporting_files;
            modelHeaderData['title'] = selectedCase.case_id
            modelHeaderData['titleId'] = selectedCase.case_id
            setModalHeaderData(modelHeaderData)
            renderMoreCaseInformation(selectedCase)
        })
        

    }
    const renderMoreCaseInformation = (data) => {
        setModalContent(<ViewCase caseData={data} handleModalClose={closeModel} />);
        return setModalVisibality(!modalVisibality)
    }
    

    useEffect(() => {
        cases();
    }, []);
    return (
        <div className="container">
           <h3 style={{ paddingTop: 40 + "px" }}>Case List</h3>
           <div>
                {loadingStatus===false ? <CaseListComponent data={caseList} ViewMore={caseViewMore} /> :<Loader status={loadingStatus} /> }
           </div>
            
            <MySheets visibality={modalVisibality} handleModalClose={handleModalViewClick} modelContent={modelContent} modelHeaderData={modelHeaderData} />
        </div>
    )
}
export default CaseList;