import React from 'react';
import Style from './style.module.less';
import {connect} from 'react-redux'
import {Form,Input,Button,Cascader,DatePicker,message } from 'antd';
import webStorage from '../../../utils/webstorage'

class EmployeeAdd extends React.Component{
    constructor(){
        super();
    }
    submit=()=>{
        let arr=[];
        let {employeeList}=this.props;
        let obj={};
        this.props.form.validateFields((err,info)=>{
            for(let i in info){
                if(typeof info[i]==='object'){   //对象
                    if(info[i][0]){//对象--数组
                        obj[i]=info[i][0];
                        // arr.push(info[i][0])
                    }else{  //对象--日期格式
                        let date=new Date(info[i]._d)
                        let dateTime = date.getFullYear()+'-'+checkTime(date.getMonth()+1)+'-'+checkTime(date.getDate());
                        function checkTime(t){
                            if(t<10){
                                t = '0'+t
                            }
                            return t
                        }
                        obj[i]=dateTime;
                        // arr.push(dateTime)
                    }
                }
                else{ //字符
                    obj[i]=info[i];
                    arr.push(info[i])
                }
            }
            employeeList.push(obj);
            message.success('添加成功')
        });
        webStorage.setItem('employeeList',employeeList);
        this.setState({employeeList})
    };
    render() {
        const {getFieldDecorator}=this.props.form;
        let {department,job}=this.props;
        return(
            <div className={Style.inputWarp}>
                <h3>员工添加</h3>
                <div className={Style.centent}>
                    <div className={Style.input}>
                        <label>姓&emsp;&emsp;名:</label>
                        <Form.Item>
                            {getFieldDecorator('name', {
                                rules:[{min:2,message:'请输入姓名'}],
                            })(<Input placeholder="name" autoComplete="off"/>
                            )}
                        </Form.Item>
                    </div>
                    <div className={Style.input}>
                        <label>姓&emsp;&emsp;别:</label>
                        <Form.Item>
                            {getFieldDecorator('sex', {
                            })(
                                <Cascader
                                    fieldNames={{ label: 'name', value: 'code', children: 'items' }}
                                    options={[{
                                        code: '男',
                                        name: '男'},
                                        {
                                            code: '女',
                                            name: '女'}
                                    ]}
                                    placeholder="性别"
                                    className={Style.select}
                                />
                            )}
                        </Form.Item>

                    </div>
                    <div className={Style.input}>
                        <label>部&emsp;&emsp;门:</label>
                        <Form.Item>
                            {getFieldDecorator('department', {
                            })(
                                <Cascader
                                    fieldNames={{ label: 'name', value: 'code', children: 'items' }}
                                    options={department}
                                    placeholder="请选择部门"
                                    className={Style.select}
                                />
                            )}
                        </Form.Item>
                    </div>
                    <div className={Style.input}>
                        <label>职&emsp;&emsp;位:</label>
                        <Form.Item>
                            {getFieldDecorator('job', {
                            })(
                                <Cascader
                                    fieldNames={{ label: 'name', value: 'code', children: 'items' }}
                                    options={job}
                                    placeholder="请选择职位"
                                    className={Style.select}
                                />
                            )}
                        </Form.Item>
                    </div>
                    <div className={Style.input}>
                        <label>入职日期:</label>
                        <Form.Item>
                            {getFieldDecorator('entryData', {
                            })(<DatePicker onChange={this.onChange}/>)}
                        </Form.Item>
                    </div>
                    <div className={Style.input}>
                        <label>联系方式:</label>
                        <Form.Item>
                            {getFieldDecorator('tel', {
                            })(<Input placeholder="联系方式"/>)}
                        </Form.Item>
                    </div>
                    <div className={Style.input}>
                        <label>家庭住址:</label>
                        <Form.Item>
                            {getFieldDecorator('address', {
                            })(<Input placeholder="家庭住址"/>)}
                        </Form.Item>
                    </div>
                    <div className={Style.input}>
                        <label>年&emsp;&emsp;龄:</label>
                        <Form.Item>
                            {getFieldDecorator('age', {
                            })(<Input placeholder="年龄"/>)}
                        </Form.Item>

                    </div>
                    <div className={Style.input}>
                        <label>邮&emsp;&emsp;箱:</label>
                        <Form.Item>
                            {getFieldDecorator('email', {
                            })(<Input placeholder="邮箱" autoComplete="off"/>)}
                        </Form.Item>

                    </div>
                    <div className={Style.input}>
                        <label>备&emsp;&emsp;注:</label>
                        <Form.Item>
                            {getFieldDecorator('remark', {
                            })(<Input placeholder="备注"/>)}
                        </Form.Item>

                    </div>
                </div>
                <Button type="primary" className={Style.btn} onClick={this.submit}>添加</Button>
            </div>

        )
    }
}

export default connect((state)=>state)(Form.create()(EmployeeAdd))
