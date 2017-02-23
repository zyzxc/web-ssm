seajs.config({
    // 变量配置
    vars: {
        'dir': 'http://localhost:8081/assets/src/script'
    },
    // 路径配置
    paths: {
        'modules': '{dir}'
    },
    // 调试模式，测试环境开启
    debug: false,
    // 文件编码
    charset: 'utf-8'
});