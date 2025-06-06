const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm7nmw0/",
            name: "ssm7nmw0",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm7nmw0/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线视频教育系统小程序"
        } 
    }
}
export default base
