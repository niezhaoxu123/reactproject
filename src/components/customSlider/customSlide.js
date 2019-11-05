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


