const SITE_NAME = 'NEWS | 小資族FIRE攻略'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  app: {
    rootId: 'app',
    head: {
      title: SITE_NAME,
      meta: [
        { name: 'description' , content: 'SITE_NAME'},
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-title', property: 'og:title', content: SITE_NAME },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@latest/css/boxicons.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Ubuntu:wght@400;500;700&display=swap' }
      ],
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js', defer: true }]
    }
  },
  nitro: {
    preset: 'service-worker',
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  content: {
    defaultLocale: 'zh-TW',
    documentDriven: true
  },
  tailwindcss: {
    viewer: false,
  }
})
