import { type ButtonFilterMatching } from "@/types/filters.types"
import { type ComponentName } from "@/types/components.types"

export type Promo = {
  text: string
  icon?: string
  url: string
}

export type ComponentMatching = {
  name: ComponentName
  url: string
}

export type Library = {
  name: string
  description?: string // 新增：文档站点介绍文字
  onTopOf?: string // name of the library the tool is based on
  logo: string
  logoDark?: string // only if the logo differs in Dark Mode
  url: string
  repoOwner?: string
  repoName?: string
  package?: string
  filterMatchings: ButtonFilterMatching[]
  componentMatchings: ComponentName[] // 保留向后兼容
  componentLinks?: ComponentMatching[] // 新增：带链接的分类配置
  nbStars?: number // filled later
  nbDownloads?: number // filled later
  promo?: Promo
}
