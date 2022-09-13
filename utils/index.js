

const navigateTo = (url)=>{
    uni.navigateTo({
        url
    });
}

const switchTab = (url)=>{
    uni.switchTab({
        url
    });
}


export {
    navigateTo,
    switchTab
}
