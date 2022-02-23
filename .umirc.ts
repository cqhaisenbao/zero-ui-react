import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'zero-ui-react',
  locales: [['zh-CN', '中文']],
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // 多语言配置方式如下
  navs: [
    {
      title: '快速上手',
      path: '/docs',
    },
    {
      title: '组件',
      path: '/components',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/cqhaisenbao/zero-ui-react',
    },
  ],
  menus: {
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    '/components': [
      {
        title: '基础组件',
        children: [
          // 菜单子项（可选）
          'components/Switch/index.md',
          'components/Button/index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
          'components/Menu/index.md',
          'components/Dialog/index.md',
          'components/Icon/index.md',
          'components/Input/index.md',
          'components/AutoComplete/index.md',
          'components/Upload/index.md',
          'components/Progress/index.md',
          'components/Transition/index.md',
          'components/Layout/index.md',
        ],
      },
      {
        title: '表单组件',
        children: [],
      },
    ],
    '/docs': [
      {
        title: '快速上手',
        children: [
          // 菜单子项（可选）
          '/docs/intro.md',
          '/docs/start.md',
        ],
      },
    ],
  },
});
