import {
	BookOpen,
	Puzzle,
	ScrollText,
	CalendarClock,
	Star,
	MonitorSmartphone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavigationItem {
	key: string // 用于翻译键，如 'guide' -> t('nav.guide')
	path: string // URL 路径，如 '/guide'
	icon: LucideIcon // Lucide 图标组件
	isContentType: boolean // 是否对应 content/ 目录
}

// Desktop Explorer 导航分类（6 个，与 content/ 目录、DetailPage contentTypeLabels、nav/pages key 一一对应）
export const NAVIGATION_CONFIG: NavigationItem[] = [
	{ key: 'guide', path: '/guide', icon: BookOpen, isContentType: true },
	{ key: 'puzzles', path: '/puzzles', icon: Puzzle, isContentType: true },
	{ key: 'story', path: '/story', icon: ScrollText, isContentType: true },
	{ key: 'release', path: '/release', icon: CalendarClock, isContentType: true },
	{ key: 'review', path: '/review', icon: Star, isContentType: true },
	{ key: 'platform', path: '/platform', icon: MonitorSmartphone, isContentType: true },
]

// 从配置派生内容类型列表（用于路由和内容加载）
export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map(
	(item) => item.path.slice(1),
) // 移除开头的 '/' -> ['guide', 'puzzles', 'story', 'release', 'review', 'platform']

export type ContentType = (typeof CONTENT_TYPES)[number]

// 辅助函数：验证内容类型
export function isValidContentType(type: string): type is ContentType {
	return CONTENT_TYPES.includes(type as ContentType)
}
