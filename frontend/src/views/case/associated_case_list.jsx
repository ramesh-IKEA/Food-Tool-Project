import React, { useState ,useEffect} from 'react'
import { fetchAssociatedCases } from '../../services/case'
import CaseListComponent from '../../components/caseList'
import Loader from '../../components/loading'
const AssociatedCaseList = () => {
    const [loadingStatus, setloadingStatus] = useState(true);
    const [caseList, setCaseList] = useState([]);
    const cases = () => {
        fetchAssociatedCases().then(res => {
            setloadingStatus(false)
            if (res.data.length > 0) {
                setCaseList(res.data)
            }
        })
    };
    useEffect(() => {
        cases();
    }, []);

    return (
        <div className="container">
           <h3 style={{ paddingTop: 40 + "px" }}>Associated Case List</h3>
           <div>
                {loadingStatus===false ? <CaseListComponent data={caseList} pComponent={'associated_list'} /> :<Loader status={loadingStatus} /> }
           </div>
            
            {/* <MySheets visibality={modalVisibality} handleModalClose={handleModalViewClick} modelContent={modelContent} modelHeaderData={modelHeaderData} /> */}
        </div>
    )
}

export default AssociatedCaseList;