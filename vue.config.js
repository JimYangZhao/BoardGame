module.exports={
    devServer:{
        host: 'localhost',//target host
        port: 8081,
        //proxy:{'/api':{}},代理器中设置/api,项目中请求路径为/api的替换为target
        proxy:{
            '/api':{
                target: 'http://10.10.3.198:9081',//代理地址，这里设置的地址会代替axios中设置的baseURL
                changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
                //ws: true, // proxy websockets
                //pathRewrite方法重写url
                pathRewrite: {
                    '^/api': '/' 
                    //pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
                    //pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
               }
        }}
    },
    css:{
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-plugin-px2rem')({
                        rootValue: 37.5, // 换算基数，1rem相当于37.5px,值为37.5时,淘宝插件里面为375/10 =37.5
                        // unitPrecision: 5, //允许REM单位增长到的十进制数字。
                        //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
                        // propBlackList: [], //黑名单
                        exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
                        // selectorBlackList: [], //要忽略并保留为px的选择器
                        // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
                        // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
                        mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
                        minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
                    }),
                ]
            }
        }
    }
    }
    
    

    