import React from "react";
import Loading, { LoadingBall } from "@ingka/loading";
const Loader = ({status})=>{
    const prefix = 'some-prefix-';
    return (
        <Loading className={`${prefix}loading--custom-class`} text="" labelTransitions>
        {status ? <LoadingBall /> :''}
        </Loading>
      );
}
export default Loader;