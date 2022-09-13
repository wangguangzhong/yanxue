<script>
    import {
        apiGetCurrentUser
    } from '@/serves/app.js'
    export default {
        onLaunch: function() {
            // this.apiGetCurrentUser()
        },
        mounted() {
            // let curRoute  = this.$mp.page.route; // 直接获取当前页面路由
            // if(curRoute !== 'pages/share/index'){
            //     this.init()
            // }
        },
        onShow: function() {
            console.log('App Show')
        },
        onHide: function() {
            console.log('App Hide')
        },
        methods: {
            init() {
                apiGetCurrentUser().then((res) => {
                    console.log(21)
                    this.$store.commit('user/updateUserinfo', res.data)
                })
            },
        }
    }
</script>

<style>
    /*每个页面公共css */
    @import "./style/reset.css";
</style>
<style lang="less">
    @import "@/style/index.less";
</style>
<style lang="scss">
    /* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
    @import "uview-ui/index.scss";
</style>
