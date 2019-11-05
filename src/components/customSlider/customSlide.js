import React from 'react'
import {withRouter}  from 'react-router-dom'
// import { Menu, Icon } from 'antd';
// import webStorage from '../../utils/webstorage'
// const { SubMenu } = Menu;
// const root=[
//     {
//         name:'首页',
//         path:'/admin/home',
//         key:'/admin/home'
//     },
//     {
//         name:'用户管理',
//         path:'/admin/user',
//         key:'/admin/user',
//         children:[
//             {
//                 name:'权限管理',
//                 path:'/admin/user/root',
//                 key:'/admin/user/root'
//             },
//             {
//                 name:'信息管理',
//                 path:'/admin/user/info',
//                 key:'/admin/user/info',
//             },
//         ]
//     },
//     {
//         name:'设置',
//         path:'/admin/setting',
//         key:'/admin/setting'
//     },
// ]
// const root=webStorage.getItem('rootList')
// class CustomSlider extends  React.Component{
//     // jump=(path)=>{
//     //     this.props.history.push(path)
//     // }
//     renderItem=(data)=>{
//         //1.判断有没有children  有sub  没有  item
//         console.log(data)
//         return data.map((item,index)=>{
//             if(item.subprime){
//                 //渲染次级
//                 return(
//                     <SubMenu title={item.name}>
//                         {this.renderItem(item.subprime)}
//                     </SubMenu>
//                 )
//             }else{
//                 return (
//                     <Menu.Item key={item.key} onClick={this.jump.bind(this,item.path)}>
//                         {item.name}
//                     </Menu.Item>
//                 )
//             }
//         })
//     }
//     render(){
//         return(
//             <Menu  style={{ width: 256 }} mode="vertical" theme='dark'>
//
//
//                 {this.renderItem(root)}
//                 {/* {root.map((item,index)=>{
//                 if(item.children){
//                     //渲染次级导航
//                     return  (
//                         <SubMenu title={item.name}>
//                             {item.children.map((item2,index)=>{
//                                 return <Menu.Item key={item2.key}
//                                 onClick={this.jump.bind(this,item2.path)}
//                                 >{item2.name}</Menu.Item>
//                             })}
//                         </SubMenu>
//                     )
//                 }else{
//                     return(
//                         <Menu.Item key={item.key} onClick={this.jump.bind(this,item.path)}>{item.name}</Menu.Item>
//                     )
//                 }
//
//             })} */}
//                 {/* <Menu.Item key="1">首页</Menu.Item>
//             <SubMenu title='用户管理'>
//                     <Menu.Item key="1">Option 1</Menu.Item>
//                     <Menu.Item key="2">Option 2</Menu.Item>
//                 <SubMenu title='用户管理'>
//                     <Menu.Item key="1">Option 1</Menu.Item>
//                     <Menu.Item key="2">Option 2</Menu.Item>
//                 </SubMenu>
//             </SubMenu> */}
//             </Menu>
//             // <div>
//             //     <button onClick={this.jump.bind(this,'/admin/home')}>首页</button>
//             //     <button onClick={this.jump.bind(this,'/admin/user')}>用户管理</button>
//             // </div>
//         )
//     }
// }
// export default withRouter(CustomSlider)
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
                name:'权限管理',
                path:'/admin/user/root',
                key:'/admin/user/root'
            },
            {
                name:'信息管理',
                path:'/admin/user/info',
                key:'/admin/user/info',
            },
        ]
    },
    {
        name:'设置',
        path:'/admin/setting',
        key:'/admin/setting'
    },
            ]
        }
    }
    render(){
        let {nav}=this.state
        console.log(nav)
        return(
            <div>
                {nav.map((item,index)=>{
                    return(
                        <ul>
                            <li >{item.name}</li>
                        </ul>
                    )
                })}
            </div>
        )
    }

}
export default withRouter(CustomSlider)