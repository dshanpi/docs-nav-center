export const sections = [
  {
    name: "基础页面" as const,
    icon: "i-heroicons-square-3-stack-3d",
    components: [
      {
        name: "教程导航" as const,
        aliases: ["章节导航", "内容展开", "扩展面板"],
        help: "垂直折叠式教程章节导航面板",
      },
      {
        name: "提示信息" as const,
        help: "需要向用户强调的上下文信息",
      },
      { name: "用户头像" as const, help: "用户资源的圆形图像展示" },
      {
        name: "标签标识" as const,
        aliases: ["标签", "标记"],
        help: "用于表示状态的简短文本指示器",
      },
      {
        name: "操作按钮" as const,
        help: "用户可以点击或触摸以执行操作的交互元素",
      },
      {
        name: "选择按钮" as const,
        help: "用于选择操作的按钮（或按钮组）",
      },
      {
        name: "开关按钮" as const,
        help: "用于选择布尔值的按钮",
      },
      {
        name: "面包屑" as const,
        help: "指示当前页面在导航层次结构中的位置",
      },
      {
        name: "轮播展示" as const,
        aliases: ["图片轮播", "幻灯片"],
        help: "循环显示元素的幻灯片组件，通常是图像或文本内容",
      },
      {
        name: "对话气泡" as const,
        help: "显示一行对话及其数据，如作者图像、姓名、时间",
      },
      {
        name: "分隔线" as const,
        aliases: ["分割器"],
        help: "垂直或水平分隔内容的视觉元素",
      },
      {
        name: "下拉菜单" as const,
        aliases: ["选择菜单"],
        help: "切换上下文覆盖层以显示操作或可选择项目的列表",
      },
      {
        name: "列表选择" as const,
        help: "从显示的项目列表中选择一个或多个值",
      },
      {
        name: "指示器" as const,
        help: "用于将元素放置在另一个元素的角落",
      },
      {
        name: "界面预览" as const,
        help: "内容周围的模拟框（浏览器、代码、电话、窗口）",
      },
      { name: "面板分割" as const, help: "用于分离和调整面板大小" },
      {
        name: "二维码" as const,
        help: "基于提供的数据生成二维码的组件",
      },
      {
        name: "键盘快捷键" as const,
        help: "文本块中的键盘键，通常用于向用户显示快捷方式",
      },
      {
        name: "滚动条" as const,
        aliases: ["滚动区域"],
        help: "原生浏览器滚动条的可定制跨浏览器替代方案",
      },
      {
        name: "快速操作" as const,
        aliases: ["浮动操作按钮"],
        help: "按下时，此浮动操作按钮显示多个其他操作按钮，用于快速访问功能",
      },
      {
        name: "布局堆叠" as const,
        help: "视觉上将元素彼此堆叠在一起",
      },
      {
        name: "时间线" as const,
        help: "用于按时间顺序显示事件或过程序列的视觉表示",
      },
    ],
  },
  {
    name: "输入控件" as const,
    icon: "i-heroicons-clipboard-document-list",
    components: [
      {
        name: "自动完成" as const,
        aliases: ["智能提示", "组合框"],
        help: "根据用户输入的文本提供建议的输入字段",
      },
      { name: "复选框" as const, help: "用于选择或取消选择值的复选框" },
      {
        name: "颜色选择器" as const,
        aliases: ["颜色输入"],
        help: "为用户提供选择颜色界面的组件",
      },
      {
        name: "日期选择器" as const,
        aliases: ["日历", "日期输入"],
        help: "允许用户选择日期的组件",
      },
      {
        name: "文本输入" as const,
        help: "用户可以输入数据的输入字段",
      },
      {
        name: "文件上传" as const,
        aliases: ["文件输入", "上传器"],
        help: "用户可以上传文件的输入字段",
      },
      {
        name: "输入菜单" as const,
        aliases: ["输入列表", "选择输入"],
        help: "提供可选项列表的菜单作为输入",
      },
      {
        name: "单选按钮" as const,
        help: "当用户需要从多个选项中选择一个时使用的单选按钮",
      },
      {
        name: "评分组件" as const,
        aliases: ["星级评分"],
        help: "允许用户对项目进行评分的组件",
      },
      {
        name: "范围滑块" as const,
        aliases: ["滑块控制器"],
        help: "允许用户从值范围内选择值的输入组件",
      },
      {
        name: "下拉选择" as const,
        help: "允许用户从下拉菜单中选择值的组件",
      },
      {
        name: "开关切换" as const,
        help: "用于在选中和未选中状态之间切换的开关组件",
      },
      {
        name: "多行文本" as const,
        aliases: ["多行输入"],
        help: "允许用户输入多行文本的输入字段",
      },
      {
        name: "实时建议" as const,
        help: "在用户输入时提供建议的输入字段",
      },
    ],
  },
  {
    name: "导航菜单" as const,
    icon: "i-heroicons-link-solid",
    components: [
      {
        name: "底部标签" as const,
        help: "底部导航，允许在主要页面之间切换，通常用于移动设备",
      },
      {
        name: "命令面板" as const,
        help: "强大的用户界面元素，允许用户从单个输入面板访问各种命令、功能或操作",
      },
      { name: "程序停靠栏" as const, help: "使用图标的类似macOS的停靠栏导航" },
      {
        name: "分页导航" as const,
        aliases: ["页面导航"],
        help: "用于大量数据一次显示一个的导航系统",
      },
      {
        name: "进度指示器" as const,
        aliases: ["进度条", "进度显示"],
        help: "用于可视化特定过程进度的图形元素，如文件下载、设置过程或任何可能需要一些时间才能完成的任务",
      },
      {
        name: "滚动定位" as const,
        aliases: ["锚点定位"],
        help: "根据滚动位置自动突出显示导航链接的导航机制，指示页面的哪个部分当前在视窗中",
      },
      {
        name: "返回顶部" as const,
        aliases: ["回到顶部"],
        help: "在特定滚动位置后显示项目，通常用于导航到页面顶部",
      },
      {
        name: "步骤引导" as const,
        help: "用于显示过程中的步骤列表",
      },
      {
        name: "选项卡" as const,
        help: "一次显示一组选项卡面板",
      },
      {
        name: "垂直导航" as const,
        help: "项目垂直堆叠的导航菜单",
      },
    ],
  },
  {
    name: "覆盖层" as const,
    icon: "i-heroicons-square-2-stack",
    components: [
      {
        name: "模态对话框" as const,
        aliases: ["对话框"],
        help: "显示在当前页面顶部的对话框或弹出窗口",
      },
      {
        name: "滑动面板" as const,
        aliases: ["侧边滑出", "滑动覆盖", "侧边栏", "抽屉", "侧面板"],
        help: "从屏幕一侧滑到页面主要内容的额外内容或导航选项",
      },
      {
        name: "弹出提示" as const,
        help: "用户点击或点击控制或定义区域时出现在其他内容上方的临时视图",
      },
      {
        name: "工具提示" as const,
        help: "当用户将鼠标悬停在元素上时出现的简短信息消息",
      },
      {
        name: "右键菜单" as const,
        help: "右键点击时出现的专用菜单",
      },
      {
        name: "消息提示" as const,
        aliases: ["通知", "消息条"],
        help: "向用户提供反馈的小型非模态通知，通常短暂显示后自动消失",
      },
      {
        name: "引导教程" as const,
        help: "用于向新用户显示功能上下文帮助",
      },
      {
        name: "水印" as const,
        help: "向页面添加特定文本或图案，可用于识别版权或防止信息盗用",
      },
    ],
  },
  {
    name: "布局结构" as const,
    icon: "i-ph-layout",
    components: [
      { name: "内容卡片" as const, help: "包含页眉、正文和页脚的内容容器" },
      { name: "页面容器" as const, help: "用于约束用户内容的容器" },
      {
        name: "加载占位" as const,
        aliases: ["骨架屏"],
        help: "内容加载时使用的占位符",
      },
    ],
  },
  {
    name: "数据展示" as const,
    icon: "i-heroicons-table-cells",
    components: [
      {
        name: "数据表格" as const,
        help: "以表格格式显示数据",
      },
      {
        name: "日历视图" as const,
        help: "以日历格式显示数据（周视图或月视图）",
      },
      {
        name: "有序列表" as const,
        help: "显示项目列表并提供排序操作的组件",
      },
      {
        name: "树形结构" as const,
        aliases: ["组织架构图"],
        help: "可视化并与层次化数据交互的组件",
      },
      {
        name: "选择列表" as const,
        aliases: ["移动列表"],
        help: "在列表之间移动项目并排序的组件",
      },
      {
        name: "虚拟滚动" as const,
        help: "高效渲染大量数据的性能优化方法",
      },
    ],
  },
  {
    name: "Linux开发板" as const,
    icon: "i-mdi-linux",
    components: [
      {
        name: "100ASK_V853-PRO开发板" as const,
        logo: "100ask-v853.svg",
        help: "全志V853芯片开发板，支持AI功能和多媒体处理",
      },
      {
        name: "STM32MP157-PRO开发板" as const,
        logo: "stm32mp157.svg",
        help: "STM32MP157双核异构处理器开发板，支持Linux和RTOS",
      },
      {
        name: "IMX6ULL-PRO开发板" as const,
        logo: "imx6ull.svg",
        help: "NXP i.MX6ULL处理器开发板，工业级应用",
      },
      {
        name: "IMX6ULL-MINI开发板" as const,
        logo: "imx6ull-mini.svg",
        help: "NXP i.MX6ULL处理器小型开发板",
      },
    ],
  },
]
