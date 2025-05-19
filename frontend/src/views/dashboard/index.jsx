import React from 'react'
import { useParams } from 'react-router-dom'
import ListView, { ListViewItem } from "@ingka/list-view";

import Content from './content'
const Dashboard = () => {
    const URLdata = useParams()
    const type = URLdata.type;
    
    const handleClick= (e) =>{
        return false;
    }
    return (
        <div className="">
            <div className="row">
                
                <div className="col-md-2">
                    <ListView
                        id="unique-id"
                        showDivider
                        size="medium"
                    >
                        <ListViewItem
                        key="tab-0"
                            addOn=""
                            control="link"
                            controlProps={{
                                value: 'control value 1',
                            }}
                            description=""
                            href="/dashboard/new_cases"
                            image={null}
                            leadingIconPosition="center"
                            onClick={(e)=>handleClick(e)}
                            paymentLogo={null}
                            quantityLabel=""
                            title="New Cases"
                        />
                        {/* <ListViewItem
                        key="tab-1"
                            addOn=""
                            control="link"
                            controlProps={{
                                value: 'control value 2'
                            }}
                            description=""
                            href="/dashboard/buyes_claim"
                            image={null}
                            leadingIconPosition=""
                            onClick={(e)=>handleClick(e)}
                            paymentLogo={null}
                            quantityLabel=""
                            title="Buye claims"
                        /> */}
                        <ListViewItem
                        key="tab-2"
                            addOn=""
                            control="link"
                            controlProps={{
                                value: 'control value 3'
                            }}
                            description=""
                            href="/dashboard/approved"
                            image={null}
                            leadingIconPosition=""
                            onClick={(e)=>handleClick(e)}
                            paymentLogo={null}
                            quantityLabel=""
                            title="Approvedd"
                        />
                          <ListViewItem
                          key="tab-3"
                            addOn=""
                            control="link"
                            controlProps={{
                                value: 'control value 4'
                            }}
                            description=""
                            href="/dashboard/rejected"
                            image={null}
                            leadingIconPosition=""
                            onClick={(e)=>handleClick(e)}
                            paymentLogo={null}
                            quantityLabel=""
                            title="Rejected"
                        />
                        
                    </ListView>
                </div>
                <div className="col-md-10">
                    {(type !== null) ?
                        <Content type={type} />
                        : ''}
                </div>
            </div>
        </div>
    )
}
export default Dashboard;
