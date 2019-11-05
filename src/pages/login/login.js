import React from 'react'
import {Form, Icon, Input, Button, Checkbox,message,Card } from 'antd';
import webStorage from '../../utils/webstorage'
// antd 的form组件
import Style from './index.module.less'
class Login extends React.Component{

    submit=()=>{

        this.props.form.validateFields((err,userinfo)=>{
            // err验证是不是通过  通过 null
            if(err){
                message.error('信息输入有误请重试')
            }else{
                this.$axios.post('/hehe/v1/admin/user/login',userinfo)
                    .then((data)=>{
                        console.log(data)
                        if(data.err===0){
                            // 存值
                            webStorage.setItem('rootList',data.rootList)
                            webStorage.setItem('token',data.token)
                            webStorage.setItem('uid',data.uid)
                            this.props.history.push('/admin/home')
                            // 跳转到首页
                        }else{

                        }

                    })
                // message.success('登录成功,1后跳转首页')
            }
        })


    }
    render(){
        console.log(this,'login')
        const { getFieldDecorator } = this.props.form;
        //  getFieldDecorator  表单组件获取数据的方法 也是一个高阶
        return(
            <div className={Style.login}>
                <Card title='用户登录' className={Style.loginCard} >

                    <div className="login-form">
                        <Form.Item>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="用户名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('passWord', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>记住密码</Checkbox>)}
                            <a className="login-form-forgot" href="">
                                忘记密码
                            </a>
                            <br/>
                            <Button type="primary" onClick={this.submit} className="login-form-button">
                                登录
                            </Button>
                            Or <a href="">立即注册</a>
                        </Form.Item>
                    </div>
                </Card>
            </div>
        )
    }
}
export default Form.create()(Login)