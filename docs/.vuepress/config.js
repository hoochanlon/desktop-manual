module.exports = {
    title: '从外包桌维到内部业务运营',
    description: '培训机构PUA手法运营剖析、中小外包公司业务解构、换位思考解读HR；反欺骗研究，社会工程学入门实践，IT方向速成就业入职',
    base: '/helpdesk-guide/', //项目文件夹设置目录
    head:[
      ['link', {rel:'icon', href:'favicon.ico'}]
    ],
    plugins: [
      // https://vuepress.github.io/zh/plugins 插件下载
      ['@vuepress/plugin-back-to-top'],//安装不了插件,建议非全局安装vue      
      ['@vuepress/google-analytics',
      {
        'ga': 'UA-157837686-3' // UA-00000000-0
      }],
      ['copyright', {
        noSelect: false,
        authorName:{
          "zh-CN": "hoochanlon",
          "en-US": "hoochanlon"
        }
      }]
    ],
    themeConfig: {
      repo: 'https://github.com/hoochanlon/helpdesk-guide/',
      nav: [
        // { text: '跳转首页', link: '/' },
        { text: '本作品采用by-nc4.0知识协议进行许可', link: 'http://creativecommons.org/licenses/by-nc/4.0/' },
      ],
      editLinks: false,
      // 自定义编辑链接的文本。默认是 "Edit this page"
      editLinkText: '帮助我们改善内容',
      algolia: {
        apiKey: 'cb720d4380fe1a8f6fc0caeaccf225dc',
        indexName: 'hoochanlon_helpdesk'
      },
        sidebar: [
          // 我的计划是从边缘桌面走向内部业务IT维护
         
            {
                title: '业务平台与终端维护',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/express/zd/cz.md','主机系统重装与硬件组装'],
                  ['/express/zd/printer','典型打印机使用安装及调试'],
                  ['/express/zd/tyy','吊顶式投影仪安装与调试'],
                  ['enhance/dsplus/ddvmt','钉钉视频会议'],
                  ['/enhance/ie/master','OA/ERP系统IE平台维护']
                ]
              },
              {
                title: '用户电话与主机网络运营',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [

                  ['/express/software-issue/other','各类软件异常解决'],
                  ['/express/star/centre','程序采集与资产管理'],
                  ['/express/net-debug/net','OA办公网络接入层运营'],
                  ['/express/script/bat.md','Batch批量可并发业务编程'],
                  ['/express/secure/trojan','信息安全病毒高级防控'],
                  ['/express/hard-bearkdown/hard','硬件设备调试处理']
                ]
              },   
              {
                title: '域控',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/express/star/centre','程序采集与资产管理'],
                  ['/express/net-debug/net','OA办公网络接入层运营'],
                  ['/express/script/bat.md','Batch批量可并发业务编程'],
                  ['/express/secure/trojan','信息安全病毒高级防控'],
                  ['/express/hard-bearkdown/hard','硬件设备调试处理']
                ]
              },   
              {
                title: '职场·生活社会学',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/express/notice/found','低学历往届生求职历程'],
                  ['/express/notice/interview','人力资源与面试者'],
                  ['/express/notice/ti-analysis','培训机构分析报告'],
                  ['/express/notice/law-sug','解构非规范型服务企业'],
                  ['/express/talk/3','客户、外包、驻场'],
                  ['/express/notice/zufang-note','社会租房记录'],
                  ['/express/notice/zufang-note','城中村黑宽带']
                ]
              },
              {
                title: '运维服务规划（进阶）',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/express/mean/format','项目标书及岗位文档编写格式'],
                  ['/express/mean/fa','桌面运维服务方案模板'],
                  ['/express/mean/man','企业岗位手册样本'],
                  ['/express/mean/jidu','工作季度报告样例'],
                  ['/express/notice/support','如何优化桌面维护工作？']
                ]
              },
              {
                title: '致谢',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [['thanks','感谢有你们在！']]
              }
            ]
          }
  }