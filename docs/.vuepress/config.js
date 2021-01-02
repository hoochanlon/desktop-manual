module.exports = {
    title: '由驻场桌维到内部业务运营',
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
                title: '入行必修业务终端维护',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/express/star/cx','电脑硬件思维导图与软件程序采集'],
                  ['/express/zd/cz.md','主机系统重装与硬件组装'],
                  ['/express/zd/printer','典型打印机使用安装及调试'],
                  ['/express/zd/tyy','吊顶式投影仪安装与调试'],
                  ['enhance/dsplus/ddvmt','钉钉视频会议'],
                  ['/enhance/ie/master','OA/ERP系统IE平台维护'],
                  ['/express/star/zic','供应链级的资产管理'],
                  ['/zjjy/rhjy','入门章节结语']
                ]
              },
              {
                title: '电话与主机网络运营',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/zjjy/dhkp','主机网络运营与信息安全章节说明'],
                  ['/enhance/net/bgsdhbs','办公室电话接入部署'],
                  ['/enhance/net/sghdhyl','由施工后转向溯源电话运作原理'],
                  ['/enhance/net/netz','网络设备组装发展过程略'],
                  ['/enhance/net/neta','彻底理清IP地址、子网掩码、网关'],
                  ['/enhance/net/dlsw','代理上网异常排查问题'],
                  ['/enhance/net/dlyfw','多级SOHO路由访问原理'],
                  ['/express/net/jftx','办公网络接入层运营']
                ]
              },   
              {
                title: '主机信息安全',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/express/script/bat.md','Batch批量可并发业务编程'],
                  ['/express/secure/trojan','信息病毒防控录'],
                  ['/express/secure/blue','永恒之蓝再处理'],
                  ['/express/secure/fwmreg','防火墙邮件拦截与杀软残留项清除']
                ]
              },
              {
                title: '事项处理及认知赋能',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/zjjy/sxcl','事项处理及认知赋能的随想'],
                  ['/enhance/hrx/bgx','业务故障类排查入门'],
                  ['/enhance/hrx/xinxi','信息检索与管理初探']
                ]
              },
              {
                title: '桌维服务规划与外包业务',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/express/notice/support','如何优化桌面维护工作？'],
                  ['/express/mean/jidu','工作季度报告样例'],
                  ['/express/mean/man','企业岗位手册样本'],
                  ['/express/mean/format','桌维项目标书及岗位文档编写格式'],
                  ['/express/mean/fa','桌面运维服务方案模板'],
                  ['/express/talk/3','客户、外包、驻场'],
                  ['/express/notice/ti-analysis','培训机构分析报告'],
                  ['/express/notice/law-sug','解构非规范型服务企业']
                ]
              },
              {
                title: '职场·生活社会学',   // 必要的
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/express/notice/found','低学历往届生求职历程'],
                  ['/express/notice/interview','人力资源与面试者'],
                  ['/express/notice/zufang-note','社会租房记录'],
                  ['/express/notice/heikuandai','城中村黑宽带']
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