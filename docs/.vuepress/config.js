module.exports = {
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      
      { text: '学习', link: '/learn/' },
      { text: '练习', link: '/exsice/' },
      { text: '复习', link: '/reex/' },
    ],
    sidebar: [
      {
        title: 'Group 1',   // 必要的
        path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */ ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ],
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
  repo: 'vuejs/vuepress',
  // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
  // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
  repoLabel: '查看源码',

  // 以下为可选的编辑链接选项

  // 假如你的文档仓库和项目本身不在一个仓库：
  docsRepo: 'vuejs/vuepress',
  // 假如文档不是放在仓库的根目录下：
  docsDir: 'docs',
  // 假如文档放在一个特定的分支下：
  docsBranch: 'master',
  // 默认是 false, 设置为 true 来启用
  editLinks: true,
  // 默认为 "Edit this page"
  editLinkText: '帮助我们改善此页面！'
  },

  sidebarDepth : 2,
    plugins: [
      'latex' // or 'vuepress-plugin-latex'
    ]
  }