import React, { useEffect, useRef, useState } from 'react'
import { fetchCases, fetchCaseData } from '../../services/case'
import { storeLocation } from '../../config/varieraDataSource'
import localStorage from '../../services/localStorage'
import Card from '../../components/card'
import CaseListComponent from '../../components/caseList'
import Loader from '../../components/loading'
import MySheets from '../../components/model'
import ViewCase from '../case/viewCase'

const Content = ({ type }) => {
    const filterKeys = { 'new_cases': 'open', 'buyes_claim': 'buyes_claim', 'financial_claim': 'Finacial claim', 'approved': 'AP','rejected':'RJ' }
    const Labels = { 'new_cases': 'New cases', 'buyes_claim': 'Buyer claims', 'financial_claim': 'Finacial claim', 'approved': 'Approved' ,'rejected':'Rejected'}
    const [UserFunction] = useState(localStorage.get('user-function'));
    const initialized = useRef(false);
    const ref = useRef(null);
    const filteredValue = filterKeys[type];
    const [CaseList, setCaseList] = React.useState([])
    const [selectedStore, setselectedStore] = React.useState(localStorage.get('selectd_store'))
    let [sortedData, setsortedData] = React.useState([])
    const [selectedCaseList, setSelectedCaseList] = useState([]);
    const [haveCases, sethaveCases] = useState(false);
    const [modalVisibality, setModalVisibality] = useState(false);
    const [modelContent, setModalContent] = useState('');
    const [modelHeaderData, setModalHeaderData] = useState({});
    const [loadingStatus, setloadingStatus] = useState(true);
    const listItems = {
        'new_cases': 'unique-id-0',
        // 'buyes_claim': 'unique-id-1',
        'approved': 'unique-id-1',
        'rejected': 'unique-id-2',
    }
    let selecedtElement = document.getElementById(listItems[type]);
    if (selecedtElement !== null) {
        selecedtElement.classList.add('active_nav');
    }
    const cases = (source = null) => {
        setloadingStatus(true)
        fetchCases(filteredValue).then(res => {
            setloadingStatus(false)
            if (res.data.records.length > 0) {
                setCaseList(res.data.records)
                const result = Object.groupBy(res.data.records, ({ type }) => type);
                let records = result[UserFunction]
                if (records !== undefined) {
                    sortBystore(records, 'refresh');
                }

            }
        })
    }
    const sortBystore = (CaseList, source) => {
        setsortedData([])
        let templits = [];
        CaseList.map(list => {
            if (list.receiving_unit_code in templits) {
                templits[list.receiving_unit_code].push(list)
            }
            else {
                templits[list.receiving_unit_code] = [list]
            }
        })
        sortedData = templits;
        setsortedData(sortedData)
        if (source === 'refresh' || source == 'reload') {
            HandleSelect(selectedStore);
        }
    }
    const HandleSelect = (storeId) => {
        setselectedStore(storeId)
        localStorage.set('selectd_store', storeId)
        if (sortedData[storeId]) {
            sethaveCases(true)
            setSelectedCaseList(sortedData[storeId]);
            ref.current?.scrollIntoView({ behavior: 'smooth' });
        } else {
            sethaveCases(false)
        }
        return;
    }
    const handleModalViewClick = () => {

        return setModalVisibality(!modalVisibality)
    }
    const closeModel = (status) => {
        setModalVisibality(false)
        if(status==='open'){
            window.location.reload()
        }else{
            return cases()
        }
    }
    const caseViewMore = (index) => {
        fetchCaseData(index).then(res => {
            let selectedCase = res.data.case;
            selectedCase['articles'] = res.data.articles;
            selectedCase['supportingFiles'] = res.data.supporting_files;
            modelHeaderData['title'] = selectedCase.caseID
            modelHeaderData['titleId'] = selectedCase.caseID
            setModalHeaderData(modelHeaderData)
            renderMoreCaseInformation(selectedCase)
        })

    }
    const renderMoreCaseInformation = (data) => {
        setModalContent(<ViewCase caseData={data} handleModalClose={closeModel} />);
        return setModalVisibality(!modalVisibality)
    }
    const content = Object.keys(storeLocation).map((key) => {
        return (
            key !== 'SO' ? <Card store_id={key} sortedData={sortedData} HandleSelect={HandleSelect} /> : '')

    })
    const refreshList = () => {
        return cases('refresh');

    }
    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true
            cases();
        }
    }, []);
    return (
        <div>
            <h3 className="font-size-25 pt-2" id='heading'>{Labels[type]}</h3>
            {loadingStatus === false ?
                <div className="row pt-2"> {content} </div>
                : <Loader status={loadingStatus} />}
            {haveCases ?
                <div ref={ref}>
                    <div>&nbsp;</div>
                    <div className="row">
                        <div className="col-md-4">
                            <h4>Case List for Store {selectedStore}</h4>
                        </div>
                        <div className="col-md-3">
                        </div>
                    </div>

                    <CaseListComponent data={selectedCaseList} ViewMore={caseViewMore} source={type} refreshList={refreshList} />
                    <MySheets visibality={modalVisibality} handleModalClose={handleModalViewClick} modelContent={modelContent} modelHeaderData={modelHeaderData} />
                </div>
                : ''}
        </div>
    )
}
export default Content;