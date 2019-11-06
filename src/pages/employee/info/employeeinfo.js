import React from 'react'
import loadable from "../../../utils/loadable";
import {connect} from 'react-redux'
import { Table ,Pagination} from 'antd';
import Style from './style.module.less'


class EmployeeInfo extends React.Component{
    onShowSizeChange=(current, pageSize)=>{
        ;
    };
    render() {
        let {employeehead,employeeList}=this.props;
       return(
           <div>
               <Table
                   columns={employeehead}
                   dataSource={employeeList}
                   bordered
                   pagination={false}
               />
               <br/>
               <div className={Style.page}>
                   <Pagination
                       showSizeChanger
                       onShowSizeChange={this.onShowSizeChange}
                       defaultCurrent={1}
                       total={employeeList.length}
                       pageSizeOptions={['5','10','20']}
                       defaultPageSize={5}
                   />
               </div>

           </div>


       )
    }
}
export default connect((state)=>state)(EmployeeInfo)