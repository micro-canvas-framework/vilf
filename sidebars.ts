import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    'roadmap',
    'migration',
    {
      type: 'category',
      label: 'Chapters',
      collapsible: true,
      items: [
        'chapters/index',
        'chapters/00',
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
        'chapters/11',
        'chapters/12',
        'chapters/13',
        'chapters/14',
        'chapters/15',
      ],
    },
    {
      type: 'category',
      label: 'Annexes',
      collapsible: true,
      items: [
        'annexes/index',
        'annexes/01',
        'annexes/02',
        'annexes/03',
        'annexes/04',
        'annexes/05',
        'annexes/06',
        'annexes/07',
        'annexes/08',
        'annexes/09',
        'annexes/10',
        'annexes/11',
        'annexes/12',
        'annexes/13',
        'annexes/14',
        'annexes/15',
      ],
    },
  ],
};

export default sidebars;
