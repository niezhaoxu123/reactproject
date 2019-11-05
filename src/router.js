import  React from 'react'
import {HashRouter,Switch,Route,Redirect}  from 'react-router-dom'
import loadable from './utils/loadable'
//不用懒加载得方式
// import Nzx from './pages/nzx/nzx'
//使用懒加载得方式
// const Nzx=loadable(()=>import('./pages/nzx/nzx'))
const Login=loadable(()=>import('./pages/login/login'))
class Router extends React.Component{
        render(){
        return(
            <HashRouter>
                <Switch>
                    <Redirect exact from='/' to='/login'></Redirect>
                    <Route path='/login' component={Login}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
export default Router