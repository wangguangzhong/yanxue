import {
    post
} from '@/http'

/**
 * 注册
 * @param {} params
 */
const apiAgentRegist = (params) => {
    return post('/base/agent/regist', params) // 接口请求列子
}


export {
    apiAgentRegist,
}
