const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootq81rp/",
            name: "springbootq81rp",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootq81rp/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的居民疫情服务系统"
        } 
    }
}
export default base
