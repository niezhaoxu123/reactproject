import webstorage from '../utils/webstorage'
export default {
    // 添加人员的表头信息
    employeehead:[
        {title:'姓名',dataIndex:'name'},
        {title:'性别',dataIndex:'sex'},
        {title:'身份证号',dataIndex:'department'},
        {title:'职位',dataIndex:'job'},
        {title:'入职日期',dataIndex:'entryData'},
        {title:'联系方式',dataIndex:'tel'},
        {title:'家庭住址',dataIndex:'address'},
        {title:'年龄',dataIndex:'age'},
        {title:'邮箱',dataIndex:'email'},
        {title:'备注',dataIndex:'remark'}],
    // 添加人员列表
    employeeList:webstorage.getItem('employeeList')||[
        {name:"haha",
        sex:"女",
        department:"技术部",
        job:"H5前端开发",
        entryData:"2019-11-05",
        tel:"13842093690",
        address:"哈哈",
        age:"9",
        email:"@222",
        remark:"无"
        }
    ],
    //部门信息
    department:[
        {code: '技术部', name: '技术部',},
        {code: '研发部', name: '研发部',},
    ],
    // 职位信息
    job:[
        {code: '技术大佬',name: '技术大佬',},
        {code: 'H5前端开发',name: 'H5前端开发',},
    ]
}