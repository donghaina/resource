module.exports = {
    base: '/resource/',
    title: '董懂的技术资源库',
    description: '收集整理那些高质量的技术资料',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
    ],
    markdown: {
        lineNumbers: true 
    },
    themeConfig: {
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        nav: [
            { text: '关于', link: '/about/' },
            { text: 'GitHub', link: 'https://github.com/taosang1992/resource' },
        ],
        sidebar: {
            '/front-end/': genSidebarConfig('前端'),
        }
    }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        ''
      ]
    }
  ]
}
