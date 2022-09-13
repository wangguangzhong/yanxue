<template>
    <view>
        <u-button type="primary" text="测试跳转" @click="$utils.navigateTo('/pages/login/index')"></u-button>
        <u-divider text="分割线"></u-divider>
        <u-button type="primary" :plain="true" text="镂空"></u-button>
        <u-divider text="分割线"></u-divider>
        <u-divider text="分割线"></u-divider>
        <u-button type="primary" :plain="true" :hairline="true" text="细边"></u-button>
        <u-divider text="分割线"></u-divider>
        <u-button type="primary" loading loadingText="加载中"></u-button>
        <u-divider text="分割线"></u-divider>
        <u-button type="primary" icon="map" text="图标按钮"></u-button>
        <u-divider text="分割线"></u-divider>
        <u-button type="primary" shape="circle" text="按钮形状"></u-button>
        <u-divider text="分割线"></u-divider>
        <u-button text="渐变色按钮" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"></u-button>
        <u-divider text="分割线"></u-divider>
        <u-button type="primary" size="small" text="大小尺寸"></u-button>
    </view>
</template>
<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>
<style lang="less" scoped>

</style>
