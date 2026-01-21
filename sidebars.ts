import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Ops',
      collapsible: false,
      items: ['ops/vilf-backlog'],
    },
  ],
};

export default sidebars;
