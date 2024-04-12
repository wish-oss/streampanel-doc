import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {

  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: 'STREAM PANEL'
      }
    }
  },

  logo: <span>STREAM PANEL</span>,
  project: {
    link: 'https://github.com/wish-oss/stream-panel',
  },
  chat: {
    link: 'https://discord.gg/2AVx7FWS6S',
  },
  docsRepositoryBase: 'https://github.com/wish-oss/stream-panel',
  footer: {
    text: 'StreamPanel Powered By EasyPanel',
  },
};

export default config;
