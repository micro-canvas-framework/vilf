import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    'roadmap',
    {
      type: 'category',
      label: 'Chapters',
      collapsible: true,
      items: [
        'chapters/index',
        'chapters/01',
        'chapters/02',
        'chapters/03',
        'chapters/04',
        'chapters/05',
        'chapters/06',
        'chapters/07',
        'chapters/08',
        'chapters/09',
        'chapters/10',
      ],
    },
  ],
};

export default sidebars;
