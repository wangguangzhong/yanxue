// vue.config.js
let path = require('path');
let vars = path.resolve(__dirname, 'style/theme.less')
module.exports = {
    css: {
        loaderOptions: {
            less: {
                globalVars: {
                    "hack": `true; @import "${vars}"`
                }
            }
        }
    },
    devServer: {
        proxy: {
            '/siteapi': {
                target: 'http://192.168.3.19:8080/',
                "changeOrigin": true,
                "secure": false,
                "pathRewrite": {
                    "^/siteapi": "/"
                }
            },
        },
    },
}
