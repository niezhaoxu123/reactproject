import  React from 'react'
import {HashRouter,Switch,Route,Redirect}  from 'react-router-dom'
import loadable from './utils/loadable'
//不用懒加载得方式
// import Nzx from './pages/nzx/nzx'
//使用懒加载得方式


// const Nzx=loadable(()=>import('./pages/nzx/nzx'))
const Login=loadable(()=>import('./pages/login/login'))

const Admin=loadable(()=>import('./pages/admin/admin'))
const Home=loadable(()=>import('./pages/home/home'))

class Router extends React.Component{
        render(){
        return(
            <HashRouter>
                <Switch>

                    <Redirect exact from='/' to='/login'></Redirect>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' component={()=>{
                       return(
                           <Admin>
                               {/*<Route path='/admin/home' component={Home}/>*/}
                               <Route path='/admin/home' component={Home}></Route>
                           </Admin>
                       )
                    }}>
                    </Route>
                </Switch>
            </HashRouter>
        )
    }
}
export default Router