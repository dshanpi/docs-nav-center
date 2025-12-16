<template>
  <div>
    <div class="mb-8 flex items-center gap-3">
      <img
        :src="`/img/${library.logo}`"
        :alt="library.logo"
        class="mt-2 h-10 w-10 drop-shadow-lg"
      />
      <h2 class="decorated text-xl font-semibold md:text-2xl">
        {{ library.name }} 内容分类
      </h2>
    </div>

    <div class="space-y-6">
      <div
        v-for="(category, index) in library.componentMatchings"
        :key="category"
        class="border-b border-gray-100 pb-4 last:border-b-0 dark:border-gray-700"
      >
        <div class="mb-4 flex items-center gap-3">
          <UIcon :name="getCategoryIcon(index)" class="text-primary h-5 w-5" />
          <h3 class="font-semibold text-gray-900 dark:text-gray-100">{{ category }}</h3>
          <UBadge
            :label="`${getCategoryDescription(category).length} 项`"
            size="xs"
            color="gray"
          />
        </div>
        <div class="flex flex-wrap gap-2">
          <div
            v-for="item in getCategoryDescription(category)"
            :key="item"
            @click="handleCategoryClick(category, item)"
            class="cursor-pointer rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div class="text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ item }}
            </div>
          </div>
        </div>
        <div class="mt-3">
          <button
            @click="handleCategoryClick(category)"
            class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 inline-flex cursor-pointer items-center gap-1 text-sm font-medium transition-all duration-200 hover:underline dark:hover:underline"
          >
            <span>查看 {{ category }} 完整内容</span>
            <UIcon name="i-heroicons-arrow-top-right-on-square" class="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>

    <div class="mt-6 border-t border-gray-100 pt-4 dark:border-gray-700">
      <div class="text-center text-sm text-gray-500 dark:text-gray-400">
        共 {{ library.componentMatchings.length }} 个内容分类
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Library, ComponentMatching } from "@/types/libraries.types"

const props = defineProps<{ library: Library }>()

const categoryIcons = [
  "i-heroicons-book-open",
  "i-heroicons-cog-6-tooth",
  "i-heroicons-cpu-chip",
  "i-heroicons-wrench-screwdriver",
  "i-heroicons-document-text",
  "i-heroicons-light-bulb",
  "i-heroicons-academic-cap",
  "i-heroicons-question-mark-circle",
  "i-heroicons-chart-bar",
  "i-heroicons-cloud",
  "i-heroicons-shield-check",
  "i-heroicons-rocket-launch",
]

const getCategoryIcon = (index: number): string => {
  return categoryIcons[index % categoryIcons.length]
}

// 分类链接配置 - 这里定义了每个文档每个分类下每个描述项的具体链接
const getItemLink = (
  libraryName: string,
  categoryName: string,
  itemName: string
): string => {
  const links: Record<string, Record<string, Record<string, string>>> = {
    AvaotaSBC文档: {
      芯片介绍: {
        芯片架构: "https://docs.avaota.fun/avaota-sbc/chip-intro/architecture",
        主要特性: "https://docs.avaota.fun/avaota-sbc/chip-intro/features",
        性能参数: "https://docs.avaota.fun/avaota-sbc/chip-intro/specs",
        应用场景: "https://docs.avaota.fun/avaota-sbc/chip-intro/applications",
      },
      开发环境搭建: {
        工具安装: "https://docs.avaota.fun/avaota-sbc/dev-environment/tool-installation",
        环境配置: "https://docs.avaota.fun/avaota-sbc/dev-environment/configuration",
        依赖管理: "https://docs.avaota.fun/avaota-sbc/dev-environment/dependencies",
        项目初始化: "https://docs.avaota.fun/avaota-sbc/dev-environment/project-init",
      },
      系统烧录: {
        镜像准备: "https://docs.avaota.fun/avaota-sbc/system-flash/image-preparation",
        烧录工具: "https://docs.avaota.fun/avaota-sbc/system-flash/flashing-tools",
        启动流程: "https://docs.avaota.fun/avaota-sbc/system-flash/boot-process",
        故障排除: "https://docs.avaota.fun/avaota-sbc/system-flash/troubleshooting",
      },
      驱动开发: {
        驱动架构: "https://docs.avaota.fun/avaota-sbc/driver-development/architecture",
        API接口: "https://docs.avaota.fun/avaota-sbc/driver-development/api",
        调试方法: "https://docs.avaota.fun/avaota-sbc/driver-development/debugging",
        性能优化: "https://docs.avaota.fun/avaota-sbc/driver-development/optimization",
      },
      应用开发: {
        开发框架: "https://docs.avaota.fun/avaota-sbc/app-development/framework",
        API使用: "https://docs.avaota.fun/avaota-sbc/app-development/api-usage",
        最佳实践: "https://docs.avaota.fun/avaota-sbc/app-development/best-practices",
        示例代码: "https://docs.avaota.fun/avaota-sbc/app-development/examples",
      },
      调试技巧: {
        调试工具: "https://docs.avaota.fun/avaota-sbc/debugging/tools",
        日志分析: "https://docs.avaota.fun/avaota-sbc/debugging/log-analysis",
        性能分析: "https://docs.avaota.fun/avaota-sbc/debugging/performance",
        常见问题: "https://docs.avaota.fun/avaota-sbc/debugging/faq",
      },
      API参考: {
        接口文档: "https://docs.avaota.fun/avaota-sbc/api-reference/interfaces",
        参数说明: "https://docs.avaota.fun/avaota-sbc/api-reference/parameters",
        返回值: "https://docs.avaota.fun/avaota-sbc/api-reference/return-values",
        错误代码: "https://docs.avaota.fun/avaota-sbc/api-reference/error-codes",
      },
      常见问题: {
        FAQ: "https://docs.avaota.fun/avaota-sbc/faq/general",
        故障排除: "https://docs.avaota.fun/avaota-sbc/faq/troubleshooting",
        最佳实践: "https://docs.avaota.fun/avaota-sbc/faq/best-practices",
        社区支持: "https://docs.avaota.fun/avaota-sbc/faq/community",
      },
    },
    STM32F103文档: {
      STM32介绍: {
        芯片特性: "https://rtos.100ask.net/stm32-intro/chip-features",
        开发板介绍: "https://rtos.100ask.net/stm32-intro/board-intro",
        接口资源: "https://rtos.100ask.net/stm32-intro/interfaces",
        应用场景: "https://rtos.100ask.net/stm32-intro/applications",
      },
      开发工具搭建: {
        "Keil MDK": "https://rtos.100ask.net/dev-tools/keil-mdk",
        "STM32CubeIDE": "https://rtos.100ask.net/dev-tools/cubeide",
        "调试器配置": "https://rtos.100ask.net/dev-tools/debugger",
        "库文件": "https://rtos.100ask.net/dev-tools/libraries",
      },
      GPIO编程: {
        引脚配置: "https://rtos.100ask.net/gpio-programming/pin-config",
        输入输出: "https://rtos.100ask.net/gpio-programming/input-output",
        中断处理: "https://rtos.100ask.net/gpio-programming/interrupts",
        复用功能: "https://rtos.100ask.net/gpio-programming/alternate-functions",
      },
      定时器应用: {
        基本定时器: "https://rtos.100ask.net/timer-application/basic-timer",
        高级定时器: "https://rtos.100ask.net/timer-application/advanced-timer",
        PWM输出: "https://rtos.100ask.net/timer-application/pwm-output",
        输入捕获: "https://rtos.100ask.net/timer-application/input-capture",
      },
      串口通信: {
        USART配置: "https://rtos.100ask.net/uart-communication/usart-config",
        数据收发: "https://rtos.100ask.net/uart-communication/data-transfer",
        中断处理: "https://rtos.100ask.net/uart-communication/interrupts",
        DMA传输: "https://rtos.100ask.net/uart-communication/dma-transfer",
      },
      ADC转换: {
        模数转换: "https://rtos.100ask.net/adc-conversion/conversion-process",
        采样配置: "https://rtos.100ask.net/adc-conversion/sampling-config",
        数据处理: "https://rtos.100ask.net/adc-conversion/data-processing",
        多通道采样: "https://rtos.100ask.net/adc-conversion/multi-channel",
      },
      中断处理: {
        中断向量: "https://rtos.100ask.net/interrupt-handling/vectors",
        优先级配置: "https://rtos.100ask.net/interrupt-handling/priority",
        中断服务函数: "https://rtos.100ask.net/interrupt-handling/isr",
        外部中断: "https://rtos.100ask.net/interrupt-handling/external-interrupts",
      },
      实战项目: {
        LED控制: "https://rtos.100ask.net/practical-projects/led-control",
        按键检测: "https://rtos.100ask.net/practical-projects/button-detection",
        温度监测: "https://rtos.100ask.net/practical-projects/temperature-monitoring",
        无线通信: "https://rtos.100ask.net/practical-projects/wireless-communication",
      },
    },
    ESP32开发文档: {
      ESP32介绍: {
        芯片特性: "https://esp32.100ask.net/esp32-intro/chip-features",
        开发板介绍: "https://esp32.100ask.net/esp32-intro/board-intro",
        WiFi功能: "https://esp32.100ask.net/esp32-intro/wifi-features",
        蓝牙功能: "https://esp32.100ask.net/esp32-intro/bluetooth-features",
      },
      开发环境搭建: {
        "Arduino IDE": "https://esp32.100ask.net/dev-environment/arduino-ide",
        "ESP-IDF": "https://esp32.100ask.net/dev-environment/esp-idf",
        "VS Code": "https://esp32.100ask.net/dev-environment/vscode",
        "驱动安装": "https://esp32.100ask.net/dev-environment/drivers",
      },
      WiFi连接: {
        连接配置: "https://esp32.100ask.net/wifi-connection/connection-config",
        网络协议: "https://esp32.100ask.net/wifi-connection/network-protocols",
        HTTP客户端: "https://esp32.100ask.net/wifi-connection/http-client",
        Web服务器: "https://esp32.100ask.net/wifi-connection/web-server",
      },
      蓝牙功能: {
        BLE协议: "https://esp32.100ask.net/bluetooth-function/ble-protocol",
        SPP通信: "https://esp32.100ask.net/bluetooth-function/spp-communication",
        蓝牙配对: "https://esp32.100ask.net/bluetooth-function/pairing",
        数据透传: "https://esp32.100ask.net/bluetooth-function/data-transfer",
      },
      GPIO控制: {
        引脚配置: "https://esp32.100ask.net/gpio-control/pin-config",
        数字输出: "https://esp32.100ask.net/gpio-control/digital-output",
        数字输入: "https://esp32.100ask.net/gpio-control/digital-input",
        PWM控制: "https://esp32.100ask.net/gpio-control/pwm-control",
      },
      传感器接口: {
        I2C传感器: "https://esp32.100ask.net/sensor-interface/i2c-sensors",
        SPI传感器: "https://esp32.100ask.net/sensor-interface/spi-sensors",
        ADC传感器: "https://esp32.100ask.net/sensor-interface/adc-sensors",
        数字传感器: "https://esp32.100ask.net/sensor-interface/digital-sensors",
      },
      云端通信: {
        MQTT: "https://esp32.100ask.net/cloud-communication/mqtt",
        HTTPS: "https://esp32.100ask.net/cloud-communication/https",
        WebSocket: "https://esp32.100ask.net/cloud-communication/websocket",
        OTA升级: "https://esp32.100ask.net/cloud-communication/ota",
      },
      项目实战: {
        智能插座: "https://esp32.100ask.net/project-practice/smart-plug",
        环境监测: "https://esp32.100ask.net/project-practice/environment-monitor",
        智能门锁: "https://esp32.100ask.net/project-practice/smart-lock",
        机器人控制: "https://esp32.100ask.net/project-practice/robot-control",
      },
    },
  }

  const libraryLinks = links[libraryName] || {}
  const categoryLinks = libraryLinks[categoryName] || {}
  return (
    categoryLinks[itemName] ||
    `${props.library.url}#${encodeURIComponent(categoryName)}-${encodeURIComponent(itemName)}`
  )
}

// 点击处理函数 - 为分类项或描述项添加跳转功能
const handleCategoryClick = (category: string, item?: string) => {
  if (item) {
    // 点击描述项，跳转到具体项的链接
    const link = getItemLink(props.library.name, category, item)
    window.open(link, "_blank")
  } else {
    // 点击分类，跳转到分类的主页面
    const link = getCategoryLink(props.library.name, category)
    window.open(link, "_blank")
  }
}

// 分类主链接获取函数（向后兼容）
const getCategoryLink = (libraryName: string, categoryName: string): string => {
  const links: Record<string, Record<string, string>> = {
    AvaotaSBC文档: {
      芯片介绍: "https://docs.avaota.fun/avaota-sbc/chip-intro",
      开发环境搭建: "https://docs.avaota.fun/avaota-sbc/dev-environment",
      系统烧录: "https://docs.avaota.fun/avaota-sbc/system-flash",
      驱动开发: "https://docs.avaota.fun/avaota-sbc/driver-development",
      应用开发: "https://docs.avaota.fun/avaota-sbc/app-development",
      调试技巧: "https://docs.avaota.fun/avaota-sbc/debugging",
      API参考: "https://docs.avaota.fun/avaota-sbc/api-reference",
      常见问题: "https://docs.avaota.fun/avaota-sbc/faq",
    },
    STM32F103文档: {
      STM32介绍: "https://rtos.100ask.net/stm32-intro",
      开发工具搭建: "https://rtos.100ask.net/dev-tools",
      GPIO编程: "https://rtos.100ask.net/gpio-programming",
      定时器应用: "https://rtos.100ask.net/timer-application",
      串口通信: "https://rtos.100ask.net/uart-communication",
      ADC转换: "https://rtos.100ask.net/adc-conversion",
      中断处理: "https://rtos.100ask.net/interrupt-handling",
      实战项目: "https://rtos.100ask.net/practical-projects",
    },
    ESP32开发文档: {
      ESP32介绍: "https://esp32.100ask.net/esp32-intro",
      开发环境搭建: "https://esp32.100ask.net/dev-environment",
      WiFi连接: "https://esp32.100ask.net/wifi-connection",
      蓝牙功能: "https://esp32.100ask.net/bluetooth-function",
      GPIO控制: "https://esp32.100ask.net/gpio-control",
      传感器接口: "https://esp32.100ask.net/sensor-interface",
      云端通信: "https://esp32.100ask.net/cloud-communication",
      项目实战: "https://esp32.100ask.net/project-practice",
    },
  }

  const libraryLinks = links[libraryName] || {}
  return (
    libraryLinks[categoryName] ||
    `${props.library.url}#${encodeURIComponent(categoryName)}`
  )
}

const getCategoryDescription = (category: string): string[] => {
  // 根据分类名称返回相关的描述项
  const descriptions: Record<string, string[]> = {
    "芯片介绍": [
      "芯片架构",
      "主要特性",
      "性能参数",
      "应用场景",
      "芯片架构",
      "主要特性",
      "性能参数",
      "应用场景",
    ],
    "开发环境搭建": ["工具安装", "环境配置", "依赖管理", "项目初始化"],
    "系统烧录": ["镜像准备", "烧录工具", "启动流程", "故障排除"],
    "驱动开发": ["驱动架构", "API接口", "调试方法", "性能优化"],
    "应用开发": ["开发框架", "API使用", "最佳实践", "示例代码"],
    "调试技巧": ["调试工具", "日志分析", "性能分析", "常见问题"],
    "API参考": ["接口文档", "参数说明", "返回值", "错误代码"],
    "常见问题": ["FAQ", "故障排除", "最佳实践", "社区支持"],
    "Tina4概述": ["系统介绍", "架构设计", "核心特性", "应用场景"],
    "编译环境": ["工具链", "交叉编译", "依赖库", "构建脚本"],
    "系统配置": ["内核配置", "服务配置", "网络配置", "存储配置"],
    "内核开发": ["内核模块", "系统调用", "内存管理", "进程管理"],
    "驱动适配": ["设备驱动", "硬件抽象", "中断处理", "DMA操作"],
    "调试方法": ["GDB调试", "内核调试", "驱动调试", "性能调优"],
    "开发指南": ["开发规范", "代码风格", "提交流程", "测试策略"],
    "芯片架构": ["处理器核心", "神经网络单元", "内存架构", "外设接口"],
    "AI开发环境": ["框架安装", "模型转换", "推理优化", "部署工具"],
    "模型部署": ["模型转换", "量化优化", "部署配置", "性能评估"],
    "图像算法": ["图像预处理", "模型推理", "后处理", "性能优化"],
    "语音处理": ["音频预处理", "语音识别", "语音合成", "噪声抑制"],
    "性能优化": ["推理加速", "内存优化", "功耗控制", "并发处理"],
    "实战案例": ["项目实战", "代码示例", "性能测试", "部署案例"],
    "芯片特性": ["核心架构", "GPU性能", "多媒体能力", "AI算力"],
    "系统启动": ["启动流程", "U-Boot配置", "内核启动", "根文件系统"],
    "外设驱动": ["显示驱动", "音频驱动", "网络驱动", "存储驱动"],
    "网络配置": ["WiFi配置", "蓝牙配置", "以太网", "网络服务"],
    "存储管理": ["存储接口", "文件系统", "数据管理", "备份恢复"],
    "硬件接口": ["GPIO接口", "通信接口", "传感器接口", "扩展接口"],
    "RK平台介绍": ["芯片系列", "核心特性", "应用领域", "开发优势"],
    "开发工具链": ["交叉编译器", "调试工具", "分析工具", "构建系统"],
    "Android系统": ["系统定制", "应用开发", "硬件抽象", "性能优化"],
    "Linux系统": ["内核定制", "系统服务", "驱动开发", "应用开发"],
    "多媒体处理": ["视频编解码", "图像处理", "音频处理", "流媒体"],
    "GPU加速": ["图形渲染", "计算加速", "CUDA编程", "性能优化"],
    "系统定制": ["系统裁剪", "启动优化", "电源管理", "安全机制"],
    "开发实战": ["项目案例", "开发流程", "调试技巧", "部署经验"],
    "硬件介绍": ["开发板特性", "接口说明", "电气参数", "机械结构"],
    "系统镜像": ["镜像制作", "镜像烧录", "启动配置", "系统更新"],
    "U-Boot配置": ["启动参数", "环境变量", "网络启动", "存储启动"],
    "S3C2440介绍": ["芯片特性", "架构设计", "接口资源", "应用场景"],
    "ARM架构": ["指令集", "异常处理", "内存管理", "调试接口"],
    "裸机程序": ["启动代码", "GPIO控制", "中断处理", "定时器应用"],
    "U-Boot移植": ["移植流程", "启动配置", "驱动支持", "网络功能"],
    "根文件系统": ["文件系统", "目录结构", "系统服务", "用户程序"],
    "STM32介绍": ["芯片特性", "开发板介绍", "接口资源", "应用场景"],
    "开发工具搭建": ["Keil MDK", "STM32CubeIDE", "调试器配置", "库文件"],
    "GPIO编程": ["引脚配置", "输入输出", "中断处理", "复用功能"],
    "定时器应用": ["基本定时器", "高级定时器", "PWM输出", "输入捕获"],
    "串口通信": ["USART配置", "数据收发", "中断处理", "DMA传输"],
    "ADC转换": ["模数转换", "采样配置", "数据处理", "多通道采样"],
    "中断处理": ["中断向量", "优先级配置", "中断服务函数", "外部中断"],
    "RA系列介绍": ["芯片特性", "架构设计", "开发板", "应用领域"],
    "驱动编程": ["GPIO", "UART", "SPI", "I2C"],
    "RTOS移植": ["FreeRTOS", "任务管理", "内存管理", "中断管理"],
    "安全特性": ["TrustZone", "安全启动", "加密引擎", "安全调试"],
    "电源管理": ["低功耗模式", "时钟管理", "电源监控", "唤醒源"],
    "通信接口": ["CAN", "以太网", "USB", "无线通信"],
    "ESP32介绍": ["芯片特性", "开发板介绍", "WiFi功能", "蓝牙功能"],
    "WiFi连接": ["连接配置", "网络协议", "HTTP客户端", "Web服务器"],
    "蓝牙功能": ["BLE协议", "SPP通信", "蓝牙配对", "数据透传"],
    "传感器接口": ["I2C传感器", "SPI传感器", "ADC传感器", "数字传感器"],
    "云端通信": ["MQTT", "HTTPS", "WebSocket", "OTA升级"],
    "V系列芯片": ["架构特性", "视频处理", "图像算法", "多媒体能力"],
    "图像处理": ["图像采集", "图像增强", "图像压缩", "图像分析"],
    "视频编解码": ["H.264", "H.265", "编解码器", "性能优化"],
    "ISP调试": ["图像信号处理", "色彩校正", "降噪算法", "自动对焦"],
    "算法优化": ["算法移植", "性能调优", "内存优化", "并行计算"],
  }

  return descriptions[category] || ["相关文档", "开发指南", "API参考", "示例代码"]
}
</script>
