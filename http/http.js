import axios from 'axios';
import qs from 'qs';
axios.defaults.timeout = 3600;

const http = axios.create({
    withCredentials: true, // 表示跨域请求时是否需要使用凭证
    headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/x-www-form-urlencoded",
    },
    baseURL: '/siteapi'
});



/**
 * 请求拦截
 */
http.interceptors.request.use(
    (config) => {
        if (config.method == 'post') {
            // 这里将token设置到headers中，header的key是Authorization，这个key值根据你的需要进行修改即可
            config.data = qs.stringify(config.data);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * 响应拦截
 */
http.interceptors.response.use(
    async (response) => {
            // 响应码
            const data = response.data;
            console.log('请求日志', data)
            if (data.code === 'SUCCESS') {
                return response.data;
            } else {
                if (data.code === 'UNAUTHORIZED') {
                    uni.redirectTo({
                        url: '/pages/login/index'
                    });
                } else {
                    uni.showToast({
                        title: data.message,
                        duration: 2000,
                        icon: 'none'
                    });
                }
                return Promise.reject(response.data);
            }
        },
        (error) => {
            console.log(error)
            uni.showToast({
                title: '请求异常，请稍后重试',
                duration: 2000,
                icon: 'none'
            });
            return Promise.reject(error);
        }
);

/**
 * 统一处理url
 */
function adornUrl(url) {
    return url;
}



const post = (url, params, config = {}) => {
    return new Promise((resolve, reject) => {
        http.post(adornUrl(url), params, config)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const get = (url, params, config = {}) => {
    return new Promise((resolve, reject) => {
        http.get(adornUrl(url), {
                params,
                ...config,
            })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};


export {
    post,
    get
}
