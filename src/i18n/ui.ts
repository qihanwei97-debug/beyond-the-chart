export const languages = {
  zh: '中文',
  en: 'EN',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  zh: {
    // Navbar
    'nav.brand': '海图之外',
    'nav.story': '正文',
    'nav.characters': '角色',
    'nav.world': '世界观',
    'nav.videos': '视频',
    'nav.about': '关于',
    'nav.menu': '菜单',

    // Hero
    'hero.en': 'BEYOND THE CHART',
    'hero.title': '海图之外',
    'hero.tagline': '他们驶入了海图上没有标记的海域。<br/>在那里，海水会抹去一切不完美的事物。',
    'hero.cta.read': '开始阅读',
    'hero.cta.about': '了解更多',

    // Home sections
    'home.crew': '船员',
    'home.crew.desc': '灰鸥号上的七个人——和一只猫。',
    'home.crew.all': '查看全部角色',
    'home.read': '开始阅读',
    'home.vol1.num': '第一卷',
    'home.vol1.name': '空白海域',
    'home.vol1.info': '22章 · 已完结',
    'home.vol2.num': '第二卷',
    'home.vol2.name': '铁锚风暴',
    'home.vol2.info': '即将上线',
    'home.explore': '探索世界',
    'home.explore.desc': '海图画的不是海洋。海图画的是人类敢走的路。',
    'home.explore.world': '世界观',
    'home.explore.videos': '视频',

    // Characters page
    'chars.title': '角色',
    'chars.desc': '灰鸥号上的七个人——和一只猫。每个人都有自己上船的理由，每个人都有不想被看见的角落。',
    'chars.back': '← 返回角色一览',

    // World page
    'world.title': '世界观',
    'world.desc': '海图的边缘之外，是另一套规则。',

    // Story page
    'story.title': '正文',
    'story.vol1': '第一卷 · 空白海域',
    'story.vol1.desc': '他们驶过了海图的边缘。在那片空白里，海水开始修正一切。',
    'story.extras': '番外 · 第一卷',
    'story.extras.desc': '正文之外的片段。同一艘船，不同的视角。',
    'story.coming': '第二卷即将上线。',

    // Videos page
    'videos.title': '视频',
    'videos.desc': '概念影像与幕后制作。',

    // About page
    'about.title': '关于',

    // Footer
    'footer.brand': '海图之外',
    'footer.sub': 'BEYOND THE CHART',
    'footer.copy': '海图之外. 版权所有.',
    'footer.xiaohongshu': '小红书',
    'footer.douban': '豆瓣阅读',

    // Layout
    'layout.description': '航海奇幻长篇连载 — 探索未知，带着体温闯进去',
    'layout.siteSuffix': '海图之外',
  },
  en: {
    // Navbar
    'nav.brand': 'Beyond the Chart',
    'nav.story': 'Story',
    'nav.characters': 'Characters',
    'nav.world': 'World',
    'nav.videos': 'Videos',
    'nav.about': 'About',
    'nav.menu': 'Menu',

    // Hero
    'hero.en': 'BEYOND THE CHART',
    'hero.title': 'Beyond the Chart',
    'hero.tagline': 'They sailed into waters not marked on any chart.<br/>There, the sea would erase all imperfect things.',
    'hero.cta.read': 'Start Reading',
    'hero.cta.about': 'Learn More',

    // Home sections
    'home.crew': 'The Crew',
    'home.crew.desc': 'Seven souls aboard the Grey Gull — and one cat.',
    'home.crew.all': 'View All Characters',
    'home.read': 'Start Reading',
    'home.vol1.num': 'Volume I',
    'home.vol1.name': 'The Blank Sea',
    'home.vol1.info': '22 Chapters · Complete',
    'home.vol2.num': 'Volume II',
    'home.vol2.name': 'The Iron Anchor Storm',
    'home.vol2.info': 'Coming Soon',
    'home.explore': 'Explore the World',
    'home.explore.desc': 'Charts don\'t map the ocean. Charts map the paths humans dared to take.',
    'home.explore.world': 'World',
    'home.explore.videos': 'Videos',

    // Characters page
    'chars.title': 'Characters',
    'chars.desc': 'Seven souls aboard the Grey Gull — and one cat. Each boarded for their own reasons. Each carries corners they\'d rather keep unseen.',
    'chars.back': '← Back to Characters',

    // World page
    'world.title': 'World',
    'world.desc': 'Beyond the edge of the chart, a different set of rules applies.',

    // Story page
    'story.title': 'Story',
    'story.vol1': 'Volume I · The Blank Sea',
    'story.vol1.desc': 'They sailed past the edge of the chart. In that blank space, the sea began to correct everything.',
    'story.extras': 'Side Stories · Volume I',
    'story.extras.desc': 'Fragments beyond the main text. Same ship, different perspectives.',
    'story.coming': 'Volume II coming soon.',
    'story.note': 'The full text is currently available in Chinese. English translation is in progress.',

    // Videos page
    'videos.title': 'Videos',
    'videos.desc': 'Concept films and behind-the-scenes.',

    // About page
    'about.title': 'About',

    // Footer
    'footer.brand': 'Beyond the Chart',
    'footer.sub': '海图之外',
    'footer.copy': 'Beyond the Chart. All rights reserved.',
    'footer.xiaohongshu': 'Xiaohongshu',
    'footer.douban': 'Douban Read',
    'footer.twitter': 'Twitter',

    // Layout
    'layout.description': 'A seafaring fantasy serial — sailing into the unknown, with warmth.',
    'layout.siteSuffix': 'Beyond the Chart',
  },
} as const;
