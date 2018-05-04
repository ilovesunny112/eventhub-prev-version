var searchCondition = {
	type: null,
	city: null,
	relationTech: null,
	relationPeople: null,
	activeTime: null,
	time: null,
	pageIndex: 1,
	totalPageNum: 0,
	tempDataArr: [],

	///上部不可修改

	//下面数据可以修改

	pageSize: 6,
	//分页大小
	dataArr: [

	//数据开始
	///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: 'IT',
		relationPeople: 'IT',
		title: '洞悉云能力，笑傲云端',
		description: '快来参加微软合作伙伴网络（MPN）在线沙龙吧！MPN 在 FY15 特推出全新云能力，流程前所未有的精简！获取能力极为容易，通过 MPN 在线沙龙，您将全面了解 MPN 全新云能力，以及取得云能力带给您的巨大收益！此外，您还能够了解自己与 MPN 大家族的关系，更能清楚知晓 MPN 带给您的独特价值。',
		time: '2014/10/28 14：00 - 15：00',
		city: 'MS V-Event 平台',
		icon: 'images/Event-1028.jpg',
		link: 'http://www.msvevent.com/?p=151&frmMSCOM1028'
	},
		///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: 'IT',
		relationPeople: 'IT',
		title: '企业新挑战，IT 新思维 微软企业客户虚拟沙龙——SCCM 数据中心管理最佳实践分享',
		description: '微软 IT 管理着内部包括虚拟服务器在内的 36,000 台生产服务器，分布在全世界 4 个数据中心，支撑微软内部 18 万用户、超过 40 万台设备的信息服务。本课程将介绍微软 IT 如何通过 SCCM 来实现如此规模的数据中心服务器全自动化、高效率的管理。',
		time: '2014/10/23 14：00 - 16：00',
		city: 'MS V-Event 平台',
		icon: 'images/Event-1023.jpg',
		link: 'http://www.msvevent.com/?p=152&frmMSCOM1023'
	},
	///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: 'IT',
		relationPeople: 'IT',
		title: '企业新挑战，IT 新思维 微软企业客户虚拟沙龙——Windows 8.1 打造全新企业级应用和办公环境',
		description: '本期课程为您呈现微软 IT内部部署 Windows 8.1 的实战经验和相关解决方案，工作流程，以及迁移工具。同时，介绍企业IT如何借助 Windows 8.1 升级的契机打造全新的企业级应用和办公环境，确保企业合规性与安全性，助力企业创新。',
		time: '2014/9/18 14：00 - 16：00',
		city: 'MS V-Event 平台',
		icon: 'images/event_0918.jpg',
		link: 'http://www.msvevent.com/?p=146&frmMSCOM0918'
	},
		///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: 'IT',
		relationPeople: 'IT',
		title: '“云耕教育 智享未来”2014 微软教育行业解决方案线上研讨会',
		description: '我们将与您分享微软在构筑校园统一沟通平台上的成功经验与案例，全方面展示微软视频教学系统的强大功能，共同探索在教育的发展道路中，如何将先进技术与教育场景相融合，促进教育的深化发展，教育领域多方共赢。',
		time: '2014/9/15 14：00 - 15：30',
		city: 'MS V-Event 平台',
		icon: 'images/event_0915.jpg',
		link: 'http://www.msvevent.com/?p=148&frmMSCOM0915'
	},

	
	///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: 'IT',
		relationPeople: 'IT',
		title: '冲上云霄——FY15 微软合作伙伴大会',
		description: '你想了解 IT 巨擘微软公司的最新战略方向吗？你想聆听行业精英们的最独到见解吗？你想得到行业先驱的针对式专业指导吗？即刻点击链接，加入微软合作伙伴大会线上会议，足不出户感受现场气氛。',
		time: '2014/8/25 9：00 - 12：00',
		city: 'MS V-Event 平台',
		icon: 'images/event_0825.jpg',
		link: 'http://www.msvevent.com/?p=145&frmMSCOM0825'
	},
	///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: 'Windows Server 2003 / R2,Microsoft Azure',
		relationPeople: 'MRP客户',
		title: '促进数据中心转型 助力企业冲上“云”霄',
		description: '从容应对 Window Server 2003/R2 支持服务终止，完美解决企业后顾之忧。',
		time: '2014/6/5 14：00 - 15：30',
		city: 'MS V-Event 平台',
		icon: 'images/event_0528.jpg',
		link: 'http://www.msvevent.com/?p=140&frm=COM0605'
	},
	///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: 'Microsoft SQL Server，Microsoft Azure',
		relationPeople: '合作伙伴',
		title: 'FY14”微软合伙人”在线培训',
		description: '今年为更好的通过“微软合伙人-FY14 Disti Bootcamp”平台招募和培养新的广域合作伙伴，我们已经为您准备了全新的内容，计划于 5 月 23 日下午通过“微软合伙人在线平台”分享给广大合作伙伴。',
		time: '2014/5/23 14：00 - 16：00',
		city: 'MS V-Event 平台',
		icon: 'images/event_0516.jpg',
		link: 'http://www.msvevent.com/?p=139&frm=COM0523'
	},
	///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: 'Windows 8，Office 2013',
		relationPeople: 'CA&EPG 针对的客户群',
		title: '办公秘籍大公开之如何透视数据背后的业务趋势',
		description: '在本次企业客户虚拟沙龙活动中，我们将邀请办公效率专家根据企业实际工作场景，与您共同探讨 Microsoft Windows 8.1、Office 2013 在企业办公中的使用方法和应用技巧，分享最高效的办公能力提升秘籍，从而让您的工作效率事半功倍。',
		time: '2014/5/22 14：00 - 16：00',
		city: 'MS V-Event 平台',
		icon: 'images/event_0504.jpg',
		link: 'http://www.msvevent.com/?p=122&frm=COM0522'
	},
	///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: '公有云 AZURE',
		relationPeople: '媒体',
		title: '微软公有云 AZURE 助力媒体云端发展网络会议',
		description: '本次会议，您将了解到微软公有云 AZURE 在媒体行业解决方案成功案例分享，同时解决方案合作伙伴能容科技介绍基于 Azure 的网络电视云平台产品。',
		time: '2014/4/9 13：30 - 15：30',
		city: 'MS V-Event 平台',
		icon: 'images/event_0404_01.jpg',
		link: 'http://www.msvevent.com/?p=120&frm=COM0409'
	},
		///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: 'Microsoft Cloud、Windows',
		relationPeople: '合作伙伴',
		title: '“云“速未来 — Windows Azure 云生态 ',
		description: '今年为更好的通过“微软合伙人-FY14 Disti Bootcamp”平台招募和培养新的广域合作伙伴，我们已经为您准备了全新的内容，计划于 4 月 18 日下午通过“微软合伙人在线平台”分享给广大合作伙伴。',
		time: '2014/4/18 14：00 - 16：30',
		city: 'MS V-Event 平台',
		icon: 'images/event_0404.jpg',
		link: 'http://www.msvevent.com/?p=121&frm=COM0418'
	},
	///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: 'Windows Azure 云平台',
		relationPeople: 'CA&EPG针对的客户群',
		title: '“云“速未来 — Windows Azure 云生态 ',
		description: '社会进入到大规模数据时代，云计算成为了突破创新瓶颈的重要途径。随着Azure 解决方案落地中国，日趋成熟，并逐步建立共赢云生态，为更多的客户提供高效、经济、全方位、贴心的公有云服务。',
		time: '2014/4/24 14：00 - 16：00',
		city: 'MS V-Event 平台',
		icon: 'images/event_0325.jpg',
		link: 'http://www.msvevent.com/?p=119&frm=COM0424'
	},
		///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: '渠道政策',
		relationPeople: '合作伙伴',
		title: 'FY14”微软合伙人”在线培训 ',
		description: '今年为更好的通过“微软合伙人-FY14 Disti Bootcamp”平台招募和培养新的广域合作伙伴，我们已经为您准备了全新的内容，计划于 4 月 4 日下午通过“微软合伙人在线平台”分享给广大合作伙伴。',
		time: '2014/4/4 14：00 - 16：30',
		city: 'MS V-Event 平台',
		icon: 'images/event_0325_01.jpg',
		link: 'http://www.msvevent.com/?p=118&frm=COM0404'
	},
	///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: '数据仓库一体机',
		relationPeople: '微软客户群和合作伙伴',
		title: '微软并行数据仓库一体机解决方案虚拟网络会议',
		description: '本次会议，微软专家将向您详细介绍微软并行数据仓库一体机解决方案的功能和特性，助力企业实现最高价值。通过与微软商业智能工具的结合，可以无缝的整合桌面、数据集市、企业数据仓库，完整地实现端到端的数据仓库解决方案。',
		time: '2014/3/28 14：30 - 16：00',
		city: 'MS V-Event 平台',
		icon: 'images/event_20140307.jpg',
		link: 'http://www.msvevent.com/?p=117&frm=COM'
	},
		///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: '大数据',
		relationPeople: 'CA&EPG针对的客户群',
		title: '微软大数据解决方案分享 ',
		description: '微软大数据平台集视窗的简洁性和 HDInsight 的强大与可靠性于一身，从各种数据中产生洞察力。用户可以通过很多熟悉的分析工具生成有价值的结果，例如 Excel、SharePoint、WindowsServer 或者 Windows Azure 云服务。',
		time: '2014/3/20 14：00 - 16：00',
		city: 'MS V-Event 平台',
		icon: 'images/event_20140307_01.jpg',
		link: 'http://www.msvevent.com/?p=115&frm=COM'
	},
		///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: 'Microsoft Cloud，O365',
		relationPeople: '合作伙伴',
		title: 'FY14”微软合伙人”在线培训',
		description: '今年为更好的通过“微软合伙人-FY14 Disti Bootcamp”平台招募和培养新的广域合作伙伴，我们已经为您准备了全新的内容，计划于 3 月 19 日下午通过“微软合伙人在线平台”分享给广大合作伙伴。',
		time: '2014/3/19 14：00 - 16：00',
		city: 'MS V-Event 平台',
		icon: 'images/pic_20140307_02.jpg',
		link: 'http://www.msvevent.com/?p=116&frm=COM'
	},
		///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: '合作伙伴新政策和新内容',
		relationPeople: '合作伙伴',
		title: 'FY14”微软合伙人”在线培训',
		description: '今年为更好的通过“微软合伙人-FY14 Disti Bootcamp”平台招募和培养新的广域合作伙伴，我们已经为您准备了全新的内容，计划于3月3日下午通过“微软合伙人在线平台”分享给广大合作伙伴。',
		time: '2014/3/3 14：00 - 16：00',
		city: 'MS V-Event 平台',
		icon: 'images/event_0227_02.jpg',
		link: 'http://www.msvevent.com/?p=114&frm=COM'
	},
			///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: '数据仓库一体机',
		relationPeople: '微软客户群和合作伙伴',
		title: '微软并行数据仓库一体机解决方案虚拟网络会议',
		description: '本次会议，微软专家将向您详细介绍微软并行数据仓库一体机解决方案的功能和特性，助力企业实现最高价值。通过与微软商业智能工具的结合，可以无缝的整合桌面、数据集市、企业数据仓库，完整地实现端到端的数据仓库解决方案。',
		time: '2014/3/4 14：30 - 16：00',
		city: 'MS V-Event 平台',
		icon: 'images/event_0227.jpg',
		link: 'http://www.msvevent.com/?p=113&frm=COM'
	},
		///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: '大数据，云计算，移动互联',
		relationPeople: 'CA&EPG针对的客户群',
		title: '零售明天，创新未来',
		description: '今天，微软针对零售行业，通过 4 个生动的场景，利用大数据、云计算、移动互联和设备创新、以及社交网络等最新解决方案，助力零售企业建构新的商业价值战略、优化商业流程结构、变革传统IT环境和架构。',
		time: '2014/3/13 14：00 - 16：00',
		city: 'MS V-Event 平台',
		icon: 'images/event_0219.png',
		link: 'http://www.msvevent.com/?p=111&frm=COM'
	},
			///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: '核心基础架构优化，数据中心管理',
		relationPeople: 'MRP 客户',
		title: '优化基础架构 助力企业腾飞',
		description: '在本次会议中我们会从身份和访问管理，桌面、设备和服务器管理，安全和网络，数据保护和恢复以及 IT 安全流程这几个方面向您介绍，如何优化企业基础架构，提升企业IT价值。同时会向您介绍针对微软的 systemcenter 在数据中心管理方面的特性和优势。',
		time: '2014/3/5 14：00 - 15：30',
		city: 'MS V-Event 平台',
		icon: 'images/event_0219_01.jpg',
		link: 'http://www.msvevent.com/?p=112&frm=COM'
	},
		///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: 'Windows 8，Office 2013',
		relationPeople: 'CA&EPG针对的客户群',
		title: 'Windows 8 + Office 2013 办公秘籍大公开',
		description: '在本次企业客户虚拟沙龙活动中，我们将邀请办公效率专家根据企业实际工作场景，与您共同探讨 Microsoft Windows 8.1、Office 2013 在企业中的使用方法和应用技巧，分享最高效的办公能力提升秘籍，从而让您的工作效率事半功倍。',
		time: '2014/2/20 14：00 - 16：00',
		city: 'MS V-Event 平台',
		icon: 'images/event_20140210.png',
		link: 'http://www.msvevent.com/?p=110&frm=COM'
	},
	///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: 'office，解决方案，渠道政策',
		relationPeople: '合作伙伴',
		title: 'FY14”微软合伙人”在线培训',
		description: '今年为更好的通过“微软合伙人-FY14 Disti Bootcamp”平台招募和培养新的广域合作伙伴，我们已经为您准备了全新的内容，计划于 1 月 22 日下午通过“微软合伙人在线平台”分享给广大合作伙伴。',
		time: '2014/1/22 14：00 - 16：30',
		city: 'MS V-Event 平台',
		icon: 'images/event_0113.jpg',
		link: 'http://www.msvevent.com/?p=109&frm=COM'
	},
	///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: '端到端解决方案',
		relationPeople: 'BDM，TDM，IT Pro',
		title: '微软大数据在线会议系列三之端到端的解决方案',
		description: '1 月 22 日，微软大数据虚拟在线会议，将由微软专家独家介绍微软为大数据开发的一整套发展规划，包括将基于企业级 Hadoop 解决方案发布到 Windows Server 和 Windows Azure 上，以及如何将大数据解决方案集成到微软 BI 工具中。',
		time: '2014/1/22 14：00 - 15：00',
		city: 'MS V-Event 平台',
		icon: 'images/event_20140102_01.jpg',
		link: 'http://www.msvevent.com/?p=108&frm=COM'
	},
	///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: '沟通与协作解决方案',
		relationPeople: 'CA&EPG针对的客户群',
		//title1: 'Microsoft',
		title: '微软企业沟通与协作解决方案全接触',
		description: '此次课程中，我们将以微软内部沟通与协作亲身实践，带您领略微软最新沟通与协作解决方案；使沟通无极限；令协同，大不同；让企业生产力触手可及！',
		time: '2014/1/15 14：00 - 16：00',
		city: 'MS V-Event 平台',
		icon: 'images/event_20140102.png',
		link: 'http://www.msvevent.com/?p=107&frm=COM'
	},
	///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: 'office，解决方案',
		relationPeople: '合作伙伴',
		//title1: 'Microsoft',
		title: 'FY14”微软合伙人”在线培训 ',
		description: '今年为更好的通过“微软合伙人-FY14 Disti Bootcamp”平台招募和培养新的广域合作伙伴，我们已经为您准备了全新的内容，计划于 12 月 30 日下午通过“微软合伙人在线平台”分享给广大合作伙伴。',
		time: '2013/12/30 14：00 - 16：00',
		city: 'MS V-Event 平台',
		icon: 'images/event_1223.jpg',
		link: 'http://www.msvevent.com/?p=106&frm=COM1230'
	},

	
	///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: '正在报名',
		relationTech: '云计算',
		relationPeople: 'CA&EPG针对的客户群',
		//title1: 'Microsoft',
		title: '微软 IT 的云之路 ',
		description: '我们将向您分享微软 IT 在此方面的工作重点，特别是云计算在信息安全领域如何定位，以及微软 IT 如何在云计算架构中平衡信息安全与企业生产力。',
		time: '2013/12/18 14：00 - 16：00',
		city: 'MS V-Event 平台',
		//picUrl: 'images/event_Training_1030.jpg',
		icon: 'images/event_1205.jpg',
		link: 'http://www.msvevent.com/?p=105&frm=COM'
	},

		///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: '并行数据仓库',
		relationPeople: 'BDM，TDM，IT Pro',
		//title1: 'Microsoft',
		title: '大数据在线会议系列二之并行数据仓库',
		description: '12 月 19 日，微软大数据虚拟在线会议，将由微软专家全面介绍微软并行数据仓库基本架构，并详细阐述如何运用并行数据仓库来整合结构化数据以及提升数据处理速度。行数据仓库经典案例，助您深入解读大数据应用，获得有效洞察！',
		time: '2013/12/19 14：00 - 15：00',
		city: 'MS V-Event 平台',
		//picUrl: 'images/event_Training_1030.jpg',
		icon: 'images/bigdata_1126.jpg',
		link: 'http://www.msvevent.com/?p=104frm=COM'
	},

			///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: 'office，解决方案',
		relationPeople: '合作伙伴',
		//title1: 'Microsoft',
		title: 'FY14”微软合伙人”在线培训',
		description: '今年为更好的通过“微软合伙人-FY14 Disti Bootcamp”平台招募和培养新的广域合作伙伴，我们已经为您准备了全新的内容，计划于11月29日下午通过“微软合伙人在线平台”分享给广大合作伙伴。',
		time: '2013/11/29 14：00 - 16：00',
		city: 'MS V-Event 平台',
		//picUrl: 'images/event_Training_1030.jpg',
		icon: 'images/dbc_1126.jpg',
		link: 'http://www.msvevent.com/?p=103frm=COM'
	},

		///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: '云计算',
		relationPeople: 'CA针对的客户群',
		//title1: 'Microsoft',
		title: '微软公有云解决方案分享',
		description: '本次微软云计算解决方案研讨会旨在与您沟通分享，微软公有云方案如何支撑您的业务，为企业的云计算之路做最合适的规划。来自微软企业服务部的专家不仅帮助企业选择部署和实施云的方案，同时帮助您在公有云及传统基础架构环境之间取得平衡，更好地为您的业务提供支持。',
		time: '2013/11/27 14：00 - 16：00',
		city: 'MS V-Event 平台',
		//picUrl: 'images/event_Training_1030.jpg',
		icon: 'images/ca_1114.jpg',
		link: 'http://www.msvevent.com/?p=100'
	},

	///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: 'Office，解决方案',
		relationPeople: '合作伙伴',
		//title1: 'Microsoft',
		title: 'FY14”微软合伙人”在线培训',
		description: '今年为更好的通过“微软合伙人-FY14 Disti Bootcamp”平台招募和培养新的广域合作伙伴，我们已经为您准备了全新的内容，计划于 11 月 15 日下午通过“微软合伙人在线平台”分享给广大合作伙伴。',
		time: '2013/11/15 14:00 - 16:00',
		city: 'MS V-Event 平台',
		//picUrl: 'images/event_Training_1030.jpg',
		icon: 'images/Bootcamp.jpg',
		link: 'http://www.msvevent.com/?p=97'
	},

	///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: '大数据解决方案',
		relationPeople: 'BDM,TDM,IT Pro',
		//title1: 'Microsoft',
		title: '虚拟在线会议系列一之大洞察',
		description: '11 月 21 日，微软大数据虚拟在线会议，将由微软专家讲解并演示微软如何通过端到端的大数据解决方案，用强大的后端管理和处理大数据的同时帮助分析人员用丰富、熟悉的工具从海量数据中发现隐藏价值，获得有效洞察，成就改变行业、改变世界的 Mr. Big!',
		time: '2013/11/21 14：00 - 15：00',
		city: 'MS V-Event 平台',
		//picUrl: 'images/event_Training_1030.jpg',
		icon: 'images/cmo_1107.png',
		link: 'http://www.msvevent.com/?p=99'
	},
		///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: '信息安全',
		relationPeople: 'CA&EPG针对的客户群',
		//title1: 'Microsoft',
		title: '微软 IT 信息安全策略分享 ',
		description: '我们诚挚地邀请您参加微软企业客户虚拟沙龙《微软 IT 信息安全策略分享》，通过学习微软提高安全性和工作效率的 IT 运营方法,充分利用公司的 IT 环境提升自身价值。',
		time: '2013/11/20 14：00 - 16：00',
		city: 'MS V-Event 平台',
		//picUrl: 'images/event_Training_1030.jpg',
		icon: 'images/epg_1107.png',
		link: 'http://www.msvevent.com/?p=98'
	},

	///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: 'Office，解决方案，蓝海项目',
		relationPeople: '合作伙伴',
		//title1: 'Microsoft',
		title: 'FY14”微软合伙人”在线培训',
		description: '今年为更好的通过“微软合伙人-FY14 Disti Bootcamp”平台招募和培养新的广域合作伙伴，我们已经为您准备了全新的内容，计划于 10 月 30 日下午通过“微软合伙人在线平台”分享给广大合作伙伴。',
		time: '2013/10/30 14:00 - 15:55',
		city: 'MS V-Event 平台',
		//picUrl: 'images/event_Training_1030.jpg',
		icon: 'images/event_Training_1030.png',
		link: 'http://www.msvevent.com/?p=96'
	},
	

	///////////////////////////////////////////////////////////////数据分组
	{
		type: '虚拟活动',
		activeTime: null,
		relationTech: '软件保障权益',
		relationPeople: 'MRP 客户',
		//title1: '权新全益，推陈出新，提升企业的无限动力！',
		title: '权新全益，推陈出新，提升企业的无限动力！',
		description: '在本次会议中我们会向您介绍如何查询企业是否拥有微软 20 种软件保障及它们是什么，同时我们还会向您介绍如何在 VLSC 工具上使用您组织的软件保障权益为支持组织的 IT 发展，从何处获得这些服务。',
		time: '2013/10/31 14:00-15:30',
		city: 'MS V-Event平台',
		//picUrl: 'images/siyouyun_gray.jpg',
		icon: 'images/event_MRP_1031.jpg',
		link: 'http://www.msvevent.com/?p=95&frm=mrp1031'
	}
	//数据结束
	]

};

