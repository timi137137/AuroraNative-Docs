module.exports = {
    title: 'AuroraNative',
    description: 'AuroraNative C#框架开发文档',
    head: [
        ['link', { rel: 'icon', href: 'https://i.loli.net/2021/03/10/xjkshctyfbSG7lg.png' }]
    ],
    themeConfig: {
        logo: 'https://i.loli.net/2021/03/10/xjkshctyfbSG7lg.png',
        smoothScroll: true,
        lastUpdated: '上次编辑',
        repo: 'timi137137/AuroraNative',
        repoLabel: 'GitHub',
        docsRepo: 'timi137137/AuroraNative-Docs',
        docsDir: 'docs',
        docsBranch: 'develop',
        editLinks: false,
        editLinkText: '编辑此页',
        nav: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/Guide/' },
            { text: 'API', link: '/API/'},
            { text: '事件', link: '/Event/'},
            { text: '更新日志', link: '/UpdateLogs/' },
        ],
        sidebar: {
            '/Guide/':[
                '/Guide/',
                '/Guide/QuickStart/'
            ],
            '/API/':[
                '/API/',
                '/API/Type/'
            ],
            '/Event/':[
                '/Event/'
            ]
        },
        sidebarDepth: 2,
        displayAllHeaders: false,
        activeHeaderLinks: true
    },
    markdown: {
        extendMarkdown(md) {
            md.use(require('markdown-it-task-lists'))
        }
    },
    plugins: {
        '@vuepress/back-to-top':true,
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "有新的内容更新啦！",
                buttonText: "立刻刷新"
            }
        },
        '@vuepress/google-analytics': {
            'ga': 'G-VMRN966TNB'
        }
    }
}