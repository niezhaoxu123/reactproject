import React from 'react'
import Loadable from 'react-loadable'

const loadingComponent=()=>{
    return(
        <div>过场组件</div>
    )
}
export default (loader,loading=loadingComponent)=>{
    return Loadable({
        loader,
        loading
    })
}