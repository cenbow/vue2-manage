import axios from 'axios'


// const baseURL = 'http://192.168.1.161:8080/biaodaa-back/'
// const baseURL = 'http://192.168.1.131:8080/'
const baseURL = 'http://120.79.116.245:19004/'
axios.defaults.baseURL = baseURL

axios.interceptors.request.use(function (config) {
    // 将token给到一个前后台约定好的key中，作为请求发送
    let token = localStorage.getItem('Authorization')

    if (token) {
        config.headers['Authorization'] = token
    }
    return config
}, function (error) {
    // Do something with request error
    return Promise.reject(error)
})

axios.interceptors.response.use(function (response) { // ①10010 token过期（30天） ②10011 token无效
    if (response.data.code === 402 || response.data.code === 401) {
        localStorage.removeItem('Authorization')
        this.$router.replace({
            path: '/login' // 到登录页重新获取token
        })
    }
    return response
}, function (error) {
    return Promise.reject(error)
})

export const getJsonData = (url, params) => {
    return new Promise((resolve, reject) => {
        let token = localStorage.getItem("Authorization")
        if (params != null) {
            axios.post(url, params, {
                headers: { 'Content-Type': 'application/json', 'Authorization': token }
            }).then(res => {
                resolve(res.data)
            }).catch(error => {
                reject(error)
            })
        } else {
            axios.post(url, null, {
                headers: { 'Content-Type': 'application/json', 'Authorization': token }
            }).then(res => {
                resolve(res.data)
            }).catch(error => {
                reject(error)
            })
        }
    })

}
// 获取省份code
export const province = params => {
    return axios.post('dataMaintain/listProvince').then(res => res.data)
}

// 资质列表查询
export const queryList = params => {
    return axios.post('qual/list', params).then(res => res.data)
}

//添加 修改得
export const curd = params => {
    return axios.post('qual/add', params).then(res => res.data)
}

// 资质类别接口
export const checkType = params => {
    return axios.post('qual/qualCate').then(res => res.data)
}
//
export const register = params => {
    return axios.post('authorize/login', params).then(res => res.data)
}
//添加别名
export const addtAlias = params => {
    return axios.post('dataMaintain/insertPbModeAlias', params).then(res => res.data)
}
//删除别名
export const delectAlias = params => {
    return axios.post('dataMaintain/deletePbModeAlias', params).then(res => res.data)
}
//获取别名
export const showAlias = params => {
    return axios.post('dataMaintain/deletePbModeAlias', params).then(res => res.data)
}

//删除资质
export const deleteApi = params => {
    return axios.post('qual/del', params).then(res => res.data)
}
//资质别名的添加
export const addAlias = params => {
    return axios.post('qual/alias/add', params).then(res => res.data)
}
//别名资质上传
export const uploadAlias = params => {
    return axios.post('upload/quaAlias', params).then(res => res.data)
}
//添加公告等级
export const addLevel = params => {
    return axios.post('qual/grade/add', params).then(res => res.data)
}
// 展示等级
export const showLevel = params => {
    return axios.post('qual/grade/list', params).then(res => res.data)
}
//等级列表
export const showtLevel = params => {
    return axios.post('grade/list').then(res => res.data)
}
// 别名搜索
export const selectAlias = params => {
    return axios.post('alias/list', params).then(res => res.data)
}
// 资质别名得修改
export const amendAlias = params => {
    return axios.post('qual/alias/update', params).then(res => res.data)
}
//等级一级查询
export const firstgrade = params => {
    return axios.post('grade/cate/list', params).then(res => res.data)
}
//等级二级查询
export const secondLevel = params => {
    return axios.post('grade/sec/list', params).then(res => res.data)
}

export const addtLevel = params => {
    return axios.post('qual/grade/add', params).then(res => res.data)
}

// 展示等级
export const showgrade = params => {
    return axios.post('qual/grade/list', params).then(res => res.data)
}

//删除等级
export const delgrade = params => {
    return axios.post('qual/grade/del', params).then(res => res.data)
}
//地区二级联动下拉框
export const listArea = params => {
    return axios.post('zhaobiao/listSysArea', params).then(res => res.data)
}

// 获取公告状态
export const listStatus = params => {
    return axios.post('zhaobiao/listNoticeStatus').then(res => res.data)
}

// 获取公告列表
export const listMain = params => {
    return axios.post('zhaobiao/listNtMain', params).then(res => res.data)
}

export const exportE = form => {
    return axios({ // 用axios发送post请求
        method: 'post',
        url: 'zhaobiao/exportTendersExcel', // 请求地址
        data: form, // 参数
        responseType: 'blob', // 表明返回服务器返回的数据类型
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.data)
}
// 导出中标EXCEL 
export const exportX = form => {
    return axios({ // 用axios发送post请求
        method: 'post',
        url: 'zhongbiao/exportBidsDetail', // 请求地址
        data: form, // 参数
        responseType: 'blob', // 表明返回服务器返回的数据类型
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.data)
}
// 设置变更招中标参数
export const updateStatus = params => {
    return axios.post('zhaobiao/updateNtMainStatus', params).then(res => res.data)
}

// 设置变更招中标参数
export const listFixed = params => {
    return axios.post('zhaobiao/listFixedEditData').then(res => res.data)
}

// 获取标段信息
export const listTenders = params => {
    return axios.post('zhaobiao/listNtTenders', params).then(res => res.data)
}
// 获取招标文件列表
export const listFiles = params => {
    return axios.post('zhaobiao/listZhaoBiaoFiles', params).then(res => res.data)
}

// 上传招标路径
export const listFilesPath = params => {
    return axios.post('zhaobiao/insertZhaoBiaoFilePath', params).then(res => res.data)
}

// 删除招标文件
export const deleteFiles = params => {
    return axios.post('zhaobiao/deleteZhaoBiaoFile', params).then(res => res.data)
}

// 获取评标办法
export const listPbMode = params => {
    return axios.post('zhaobiao/listPbMode', params).then(res => res.data)
}
// 删除编辑明细
export const deletePkid = params => {
    return axios.post('zhaobiao/deleteNtTendersByPkId', params).then(res => res.data)
}
//获取关联公告列表
export const listGp = params => {
    return axios.post('common/listRelevantNotice', params).then(res => res.data)
}
// 保存招标公告标段信息
export const insertNt = params => {
    return axios.post('zhaobiao/saveNtTenders', params).then(res => res.data)
}

// 删除公告
export const delpost = params => {
    return axios.post('zhaobiao/del', params).then(res => res.data)
}
// 获取关联公告列表
export const listNtgp = params => {
    return axios.post('zhaobiao/listNtAssociateGp', params).then(res => res.data)
}
// 接触关联公告
export const listreli = params => {
    return axios.post('zhaobiao/deleteNtAssociateGp', params).then(res => res.data)
}
// 添加关联公告
export const relivan = params => {
    return axios.post('zhaobiao/insertNtAssociateGp', params).then(res => res.data)
}
// 回收站列表
export const listrecyc = params => {
    return axios.post('recycle/list', params).then(res => res.data)
}
// 公告原文列表
export const cyccontent = params => {
    return axios.post('common/detail', params).then(res => res.data)
}
// 回收站删除
export const cycdel = params => {
    return axios.post('recycle/del', params).then(res => res.data)
}
// 回收站恢复
export const cycrecover = params => {
    return axios.post('recycle/recover', params).then(res => res.data)
}
// 单个标段信息
export const getNt = params => {
    return axios.post('zhaobiao/getNtTenders', params).then(res => res.data)
}
// 变更标段信息
export const insertNtC = params => {
    return axios.post('zhaobiao/insertTbNtChange', params).then(res => res.data)
}
