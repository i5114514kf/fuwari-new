import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "CPer's Blog",
	subtitle: "技术交流与分享",
	lang: "zh_CN", // 语言代码，例如 'en', 'zh_CN', 'ja' 等
	themeColor: {
		hue: 250, // 主题色的默认色相，范围 0 到 360。例如 red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // 隐藏访客的主题色选择器
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // 相对于 /src 目录。如果以 '/' 开头则相对于 /public 目录
		position: "center", // 等同于 object-position，仅支持 'top', 'center', 'bottom'，默认为 'center'
		credit: {
			enable: false, // 是否显示横幅图片的版权信息
			text: "", // 要显示的版权文本
			url: "", // （可选）原作或作者页面的链接
		},
	},
	toc: {
		enable: true, // 在文章右侧显示目录
		depth: 2, // 目录显示的最大标题深度，范围 1 到 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "https://img.cdn1.vip/i/68e22ab22a84e_1759652530.webp", // Path of the favicon, relative to the /public directory
			//theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			sizes: "128x128", // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "导航页",
			url: "https://www.510904.xyz", // 内部链接不应包含基础路径，系统会自动添加
			external: true, // 显示外链图标并在新标签页打开
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png", // 相对于 /src 目录。如果以 '/' 开头则相对于 /public 目录
	name: "CPer",
	bio: "我的生命如同那散落之花，尽管回不去的日子屈指可数",
	links: [
		{
			name: "Telegram",
			icon: "fa6-brands:telegram", // 图标代码可在 https://icones.js.org/ 查询
			// 如未包含对应图标集需手动安装
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://t.me/lu1145",
		},
		{
			name: "QQ",
			icon: "fa6-brands:qq",
			url: "https://qm.qq.com/cgi-bin/qm/qr?k=_ZzZ0TDMddX-aq2DD-a5yeHq36UJK2Ke",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/i5114514kf",
		},
		{
			name: "Email",
			icon: "fa6-solid:envelope",
			url: "mailto:3550810388@qq.com",
		},
		{
			name: "BILIBILI",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/604160647",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：部分样式（如背景色）已被覆盖，详见 astro.config.mjs 文件。
	// 请务必选择深色主题，因为本博客主题目前仅支持深色背景
	theme: "github-dark",
};
