import State from './state';
import Store from "./store";
export default (prevState=State,action)=>{
    let newDate=JSON.parse(JSON.stringify(prevState));
    console.log(prevState)
    return newDate;
}