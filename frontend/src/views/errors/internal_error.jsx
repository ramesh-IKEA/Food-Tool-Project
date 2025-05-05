const InternalError = () => {
    return (
            <div className="row" style={{ paddingTop: 8 + "rem", paddingLeft: 30 + "rem" }}>
                <div className="col-md-12 col-sm-12">
                    <div >
                       <h4>Internal service error</h4>
                       <p>
                        Please go back and try again. 
                       </p>
                    </div>
                </div>
            </div>
    )
}
export default InternalError;