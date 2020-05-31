# 甲方公司IT运维服务季度报告

**996年10月至1日**

**制作人：hoochanlon**

[[toc]]

## 概述

本文档中内容为乙方公司为甲方公司进行IT运维服务x年y月至x年y月<sup>①</sup>阶段性服务报告。通过本报告能够反映该段时间的整体维护工作，故障统计等方面的内容。

此报告为阶段性总结报告，旨在对本阶段的运维工作及故障情况进行总结，对于具体问题和故障处理的详细信息，可查询维护记录明细表（请见附录）。

***注明：① 为甲乙双方的服务合同期限***

## 运维内容分析

### 每月具体运维概况

目前我司服务人员驻点甲方公司，主要是负责甲方公司总部及分公司办公电脑、外设及网络故障等工作。本季度办公设备总报障、处理数量合计251次，其中9月异常次数相对较高。

| 月份     | 8月 | 9月 | 10月 | 总计 |
|----------|------|------|------|------|
| 运维次数 | 44   |  104  | 93   | 251  |

![](https://i.loli.net/2020/05/27/78hvBuQNTSsg2wp.png)

驻点工程师主要负责：

* 主机、打印机及扫描仪、网络等的软硬件设备应用维护及机房巡检等
* 协助甲方公司相关部门同事进行设备的资产盘点，将变更表进行更新

### 故障记录统计

本季度硬件故障维护41起，包含主机、打印机、扫描仪等硬件故障，占总故障率的16%。软件故障维护200起，包括系统故障、OA异常等，占总故障率的80%，网络故障维护10起，含有IP配置不当及网线耗材损坏等故障，占总比约为4%。具体故障分析详见下图。

| **故障类型** | **总次数** | **总比例** | **详细分类** | **详细故障次数** | **分类占比** |
|--------------|--------------|------------|--------------|------------------|--------------|
| **硬件** | **41**       | **16%**    | **主机**     | **30**            | **74%**       |
|              |              |            | **打印机**     | **10**           | **24%**      |
|              |              |            | **扫描仪**     | **1**           | **2%**      |
| **软件** | **200**      | **80%**    | **系统**     | **100**           | **50%**      |
|              |              |            | **OA**     | **100**           | **50%**      |
| **网络**| **10**         |    **4%**  | **IP**     | **4**       | **40%**      |
|              |              |            | **网线**     | **6**           | **60%**      |

### 故障原因及详情分析

我司（乙方）负责维护的办公设备主要故障大体按类别划分为：硬件、软件、网络故障。

![](https://i.loli.net/2020/05/27/g9F5dJZxquKnkUS.png)

***注明：以下分析也可附上图表进行相关说明***

#### 软件故障分析

软件故障主要围绕OA办公系统产生，本季度系统程序故障及OA异常客户端异常各100起。

OA故障主要针对内部自动化系统异常等，该现象多为开发编程及办公人员人为因素有关。为了避免此类故障的频发，在帮客户解决问题时，发现问题所在的同时，并告知客户注意事项及造成原因，以尽量缩小故障发生的概率。

系统程序故障主要是针对一些员工因病毒、员工操作不当或是未知原因造成的系统及软件崩溃。对此我们制定以下措施：

* 针对员工操作不当等现象，则会咨询其近日是否存在误操作，如有则提醒其避免下次出现同类故障

对于未知故障，所涉及的软硬件、人为因素繁多，难以确定故障原因。故排查故障耗费时间较长，且可能因耗时过多会对于业务造成一定影响，而重装系统能直接解决原因。故对此类故障采取重装系统措施。

在定制系统方面，针对业务系统及软件差异过大，造成无法正常系统化办公。对此，我们已经将常用软件封装入通用镜像文件，在安装系统前咨询客户，系统安装完成后加装特殊软件，争取一步到位，极大地提升了工作效率。


#### 硬件故障分析

硬件故障主要是主板、内存、硬盘、电源、显示器类故障，对于此类故障，通常在我排查出具体故障硬件后，直接到备件库取件进行更换。但电源、主板、硬盘等硬件故障，则需根据设备保修情况，做采取相应的处理方法。

硬盘对于轻微坏道的故障，采取坏道修复或隔离坏道柱面措施，中等或严重状态则考虑更换新的硬盘。显示器故障主要有黑屏、闪屏、花屏等现象，一般为显示器电路板管座故障、内部受潮、电源模块故障、显示器内部零部件老化导致。根据实际情况进行处理，未过保设备，通过设备序列号进行报修更换。过保设备则直接更换备机给终端用户。

扫描仪及打印机故障，通常原因为未正确接入线路插口、驱动未安装等，外设自身硬件问题相对较少。但外设类型及操作方式存在差异，通过电话远程等方式沟通一个个排除故障原因，效率低下而且往往无法解决问题，而外设关联到业务的运作，故了为高效率，通常采取上门处理方式进行。

为了更高效率的工作，对于此类故障一些小细节、小故障，通常客户能自己处理的，在处理完故障后通常都会跟客户说明，下次出现该故障后用户可以自行应急检查，提高修复效率。


#### 网络故障分析

网络故障主要针对与用户无法上网类故障（IP地址异常、上网认证审核未通过等），在办公室新增主机、位置变更进行联网方面，需要驻点配合甲方信息部员工进行机房接入层网络线路部署及重置网关。

当然，也存在网线类型及通讯设计上的不规范问题，以及使用期限的损耗。在这一问题上，我们统一购买优质的网络耗材，并使用T568B及全双工线序设计，已保公司网络高质量高效率的传输通讯。

## 季度工作总结

在996年8至10月季度中，在甲方公司相关部门领导及同事的支持下，驻点工程师高质量、高标准的完成了主机、软件、网络、外设等运维工作。接到维护请求后，驻场工程师做到了快速响应并精准定位故障，高质量解决问题。不仅如此，且对非常见故障问题，还能有着较强资源调度，并快速找到解决方法进行有效处理。很好地完成了桌面运维的一系列相关工作，使运维工作有条不紊的进行。

本季度共处理了故障251故障类型大致可分为三种，分别为：硬件类故障41起、软件类故障200起、网络类故障10起。

驻点期间在甲方公司完成日常工作任务外，还配合甲方相关部门人员工作，进行网络调优、设备清点等。在处理运维故障时，工程师能够主动了解客户需求，根据自身技术水平，并结合乙方公司技术服务团队的力量，帮助客户解决困扰，提高客户工作效率以及满意度。

本季度开展工作：

* OA系统环境设定及调优
* 配合甲方员工进行信息安全宣传
* 协助甲方员工办资产盘点及机房巡检
* 并对以上事件进行表格统计整理工作

结合本季度问题处理记录表，维护的过程中，我司将持续优化工作流程，提高工作效率，使运维工作更加得心应手。努力学习新业务知识和沟通技巧，进一步提升服务水平，提高服务效率，为甲方公司带来更高效和更专业的服务。

## 下一季度工作计划及展望


1. 工作流程优化：考虑到日常工作琐碎而重复，为提升工作效率及用户满意度，下季度将继续撰写常见问题解决办法文档（如：浏览器、打印机故障排错及处理方法等），并以SLA体系为基础，有效结合微信ITSM应用，进行客户方自助报障与工程师的技术支持，以达到更快捷、更方便的高效解决问题，真正做到持续改善客户体验。

1. 文明礼仪加强：与客户方交谈多使用礼貌用语，并严格遵循客户公司的着装标准。进一步加强沟通咨询服务，我们将更认真细致、且严谨地做好每项工作，给甲方公司一个友好可靠的企业形象。

1. 综合实力提升：为应对日益复杂的故障现象，驻点工程师将不断学习企业依赖的网络、系统技术知识，并积极参与内部业务培训，进一步提升自己的技能技巧

综上，从而多分担客户核心层面的工作，以提升客户满意度。努力为公司创造更多的价值，建立友好专业可靠形象，以促成与客户更大的合作空间。

**XX乙方公司**

**以及相关日期**

## 详细维护记录表 （附录）

| **日期**| **维护人员** | **部门** | **联系人** | **故障类型** | **细分** | **故障描述** | **处理方式**|
|---|---|---|---|---|---|---|---|---|
|||||||||