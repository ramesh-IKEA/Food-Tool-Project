import React from 'react'
import Modal, { Sheets, ModalHeader,ModalBody } from "@ingka/modal";

const MySheets = ({ visibality,handleModalClose ,modelContent,modelHeaderData}) => {
    const closeButtonClick= ()=>{
            // const escp =visibality ? false : true;
        return handleModalClose()
    }
    return(
    <Modal visible={visibality} escapable handleCloseBtn={closeButtonClick}>
        <Sheets size={'large'}
            header={<ModalHeader titleId={modelHeaderData? modelHeaderData.title :''}
            title={modelHeaderData? modelHeaderData.title :''}
            backBtnClick={closeButtonClick} 
             />}
            
        >
            <ModalBody>
                <div className="container">
                    {modelContent}
                </div>
            </ModalBody>
        </Sheets>
    </Modal>
)}
export default MySheets;