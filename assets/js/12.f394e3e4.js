(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{372:function(t,s,a){"use strict";a.r(s);var i=a(25),r=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"多级soho路由访问原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多级soho路由访问原理"}},[t._v("#")]),t._v(" 多级SOHO路由访问原理")]),t._v(" "),a("h2",{attrs:{id:"级联wifi路由拓扑概览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#级联wifi路由拓扑概览"}},[t._v("#")]),t._v(" 级联WiFi路由拓扑概览")]),t._v(" "),a("p",[t._v("评测的需求是想要在一个独立的局域网及WiFi环境下进行测试，我们也希望配置IP等相关设置不会影响正常办公。那么这个时候级联路由的建立也就有了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/12/10/ZFI1TNRf3EpmXyV.png",alt:"image-20201210133118128.png"}})]),t._v(" "),a("h3",{attrs:{id:"上级路由器设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上级路由器设置"}},[t._v("#")]),t._v(" 上级路由器设置")]),t._v(" "),a("p",[t._v("路由器处于公司局域网网络节点的一环，上网路由器设置，也应与公司网段保持同步。由于并不是家庭网络，因此也在是否登录连接互联网选择否，并使用静态IP。")]),t._v(" "),a("p",[a("strong",[t._v("保持处于局域网内的路由器能上网。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/12/10/1icT5kx3sZRao8D.png",alt:"image-20201210095149238.png"}})]),t._v(" "),a("p",[t._v("我们用当前设置的192.168.2.30也是可以访问的；顺带着配置路由器DHCP局域网IP地址分配。")]),t._v(" "),a("p",[a("strong",[t._v("路由器下级局域网设备的地址分配。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/12/10/oi2ACv8nIFSzhsk.png",alt:"image-20201210110131140.png"}})]),t._v(" "),a("p",[t._v("然后用我们此前配置的DHCP服务器地址10.10.10.20访问，与此同时在LAN口下的计算机地址显示为DHCP范围内的地址。"),a("strong",[t._v("测试效果")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/12/10/DTgEamxfpQMI68U.png",alt:"image-20201210095411627.png"}})]),t._v(" "),a("p",[t._v("一般来说，企业内部上网主机都需要上网认证，那么如果是路由器该怎么办呢？答案是认证ip地址排除。"),a("strong",[t._v("在深信服社区的上网行为管理如AC-1200配置手册可找到。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/12/10/MP5CAv7LrbljdT1.png",alt:"image-20201210114353576.png"}})]),t._v(" "),a("p",[t._v("将路由器的地址加入进来即可完成免认证模式。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/12/10/KzgBGAfPhypsc53.png",alt:"image-20201210114459839.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/12/10/1icT5kx3sZRao8D.png",alt:"image-20201210095149238.png"}})]),t._v(" "),a("h3",{attrs:{id:"下级路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下级路由"}},[t._v("#")]),t._v(" 下级路由")]),t._v(" "),a("p",[t._v("作为上级路由器的承载，直接设置为自动获取，**下级路由器内部局域网设置为与上级路由器不一样的局域网网段。**下级路由器连接着上级路由器，而处于下级路由器的下一级如手机、电脑等网络设备，它们所获取到的DNS优先取决于下级路由器。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/12/10/qYegTG7OHM9WXvk.png",alt:"image-20201210112608938.png"}})]),t._v(" "),a("p",[t._v("如上图，下级路由DNS跟从上级路由DNS，类似问题上抛的过程，比方说某个问题的解决不了，找到相关当事人，当事人解决不了再找到他上一级的监管人，当然我们也可以直接配置主体DNS，直接找到监管人。再说说网页访问过程：先从主机hosts查找IP-站点的映射，如果有记录，直接指向访问站点的服务器；如果没有相关映射，再经过DNS进行域名解析，解析完成后跳转到站点服务器进行访问。")]),t._v(" "),a("h3",{attrs:{id:"二层交换机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二层交换机"}},[t._v("#")]),t._v(" 二层交换机")]),t._v(" "),a("p",[t._v("二层交换机它虽没三层IP地址跨网段转发功能，但我们将"),a("strong",[t._v("二层交换机接入到与其相同IP的路由器端口是不可取的")]),t._v("，会引发IP冲突。")]),t._v(" "),a("p",[t._v("建议参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/qq_40644809/article/details/105208410",target:"_blank",rel:"noopener noreferrer"}},[t._v("交换通信之多层交换原理、方式及DHCP中继"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/12/10/uatQGZgwpcXi8fV.png",alt:"4-05.png"}})]),t._v(" "),a("p",[t._v("经过上级路由器连接到该二层交换机测试发现，其交换机所说的DHCP，本身就存在误导嫌疑，仅供作为傻瓜交换机使用。咨询过客服及售后他们也对此DHCP抱有疑问及质疑，不过也表示该机型已停产...")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/12/11/1jbTcfSIXd7elgu.png",alt:"555.png"}})]),t._v(" "),a("p",[t._v("由此想到矛盾论：")]),t._v(" "),a("ul",[a("li",[t._v("矛盾是否存在承上启下的联系？")]),t._v(" "),a("li",[t._v("自己的理解是否存在误区？")]),t._v(" "),a("li",[t._v("或其问题本身就是一个错误")])])])}),[],!1,null,null,null);s.default=r.exports}}]);