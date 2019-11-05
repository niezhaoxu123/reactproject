import React from 'react'
import {withRouter}  from 'react-router-dom'
import { Menu } from 'antd';

const { SubMenu } = Menu;
class CustomSlider extends React.Component{
    constructor(){
        super()
        this.state={
            nav:[
                {
                  name:'首页',
                  path:'/admin/home',
                  key:'/admin/home'
                },
                {
        name:'用户管理',
        path:'/admin/user',
        key:'/admin/user',
                    children:[
                        {
                            name:'用户查询',
                            path:'/admin/user/userinfo',
                            key:'/admin/user/userinfo'
                        },
                        {
                            name:'添加用户',
                            path:'/admin/user/adduser',
                            key:'/admin/user/adduser',
                        },
                    ]
    },
    {
        name:'部门管理',
        path:'/admin/branch',
        key:'/admin/branch',
        children:[
            {
                name:'部门查询',
                path:'/admin/branch/branchinfo',
                key:'/admin/branch/branchinfo'
            },
            {
                name:'添加部门',
                path:'/admin/branch/addbranch',
                key:'/admin/branch/addbranch',
            },
        ]
    },
                {
                    name:'职位管理',
                    path:'/admin/job',
                    key:'/admin/job',
                    children:[
                        {
                            name:'职位查询',
                            path:'/admin/job/jobinfo',
                            key:'/admin/job/jobinfo'
                        },
                        {
                            name:'添加职位',
                            path:'/admin/job/jobadd',
                            key:'/admin/job/jobadd',
                        },
                    ]
                },
                {
                    name:'员工管理',
                    path:'/admin/employee',
                    key:'/admin/employee',
                    children:[
                        {
                            name:'员工查询',
                            path:'/admin/employee/employeeinfo',
                            key:'/admin/employee/employeeinfo'
                        },
                        {
                            name:'员工添加',
                            path:'/admin/employee/employeeadd',
                            key:'/admin/employee/employeeadd',
                        },
                    ]
                },
                {
                    name:'公告管理',
                    path:'/admin/notice',
                    key:'/admin/notice',
                    children:[
                        {
                            name:'公告查询',
                            path:'/admin/notice/noticeinfo',
                            key:'/admin/notice/noticeinfo'
                        },
                        {
                            name:'添加公告',
                            path:'/admin/notice/noticeadd',
                            key:'/admin/notice/noticeadd',
                        },
                    ]
                },
            ]
        }
    }
    jump=(path)=>{
        this.props.history.push(path)
      }
      renderItem=(data)=>{
        // 1.判断 children  有 sub  没有 item
        return data.map((item,index)=>{
          if(item.children){
              // 渲染次级
              return(
                <SubMenu title={item.name}>
                   {this.renderItem(item.children)}
                </SubMenu>
              )
          }else{
              return (
                <Menu.Item key={item.key} onClick={this.jump.bind(this,item.path)}>
                  {item.name}
                </Menu.Item>
              )
          }
        })
      }
    render(){
        let {nav}=this.state
        console.log(nav)
        return(
            <div>     
            <Menu
            theme='dark'
            onClick={this.handleClick}
            style={{ width: 200 }}
            // defaultOpenKeys={['sub1']}
            selectedKeys={[this.state.current]}
            mode="inline"
            >
          {/*}  {nav.map((item,index)=>{
                if(item.children){
                    return(
                            <SubMenu
                        title={
                            <span>
                            <Icon type="mail" />
                            <span >{item.name}</span>
                            </span>
                        }
                        
                    >
                    {item.children.map((citem,index)=>{
                        return(
                            <Menu.Item key={citem.index} >{citem.name}</Menu.Item>
                        )
                    })} 
                    </SubMenu>
                    )
                    }else{
                        return(
                            <Menu.Item key={item.key} onClick={this.jump.bind(this,item.path)}>
                            {item.name}
                            </Menu.Item>
                        )
                    }
            
            
            
            })}  */}
            {this.renderItem(nav)}
            </Menu>

            </div>
       
        )
    }

}
export default withRouter(CustomSlider)


