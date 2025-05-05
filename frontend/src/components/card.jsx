import React from 'react'
import {storeName} from '../utils/format'
const Card = ({ store_id, sortedData,HandleSelect }) => {
    const handleChange = (e) => {
        HandleSelect(e)
    }
    return (
        <div className="col-md-3  col-sm-12 col-lg-3" style={{cursor:'pointer'}}  data-storeid={store_id} onClick={(e) =>handleChange(store_id)}>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{storeName(store_id)}</h5>
                    <p className="card-text">{sortedData[store_id] ? sortedData[store_id].length : 'zero'}</p>
                </div>
            </div>
            </div>
    )
}
export default Card;