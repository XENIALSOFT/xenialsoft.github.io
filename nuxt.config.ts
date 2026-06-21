// https://nuxt.com/docs/api/configuration/nuxt-config
import { currentVertical, defaultSeoDescription, organizationKnowsAbout, siteBrand } from './app/data/seo'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/seo',
    '@nuxt/scripts',
    '@vueuse/nuxt',
  ],

  devtools: {
    enabled: true,
  },

  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'ko',
      },
      meta: [
        {
          name: 'google-site-verification',
          content: 'YgeRQv5v5bskHFM8VPk__wIgnbxcZHa1aZv2IcckFZY',
        },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap',
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: siteBrand.url,
    name: siteBrand.name,
    description: defaultSeoDescription,
    defaultLocale: 'ko',
  },

  sourcemap: false,

  compatibilityDate: '2026-05-06',

  nitro: {
    preset: 'github-pages',
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      routes: ['/', '/products', '/pricing', '/contact'],
      crawlLinks: true,
    },
  },

  vite: {
    optimizeDeps: {
      include: [
        '@unhead/schema-org/vue',
      ]
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs',
      },
    },
  },

  linkChecker: {
    enabled: true,
    runOnBuild: true,
  },

  ogImage: {
    enabled: false,
  },

  robots: {
    allow: ['/'],
    sitemap: ['/sitemap.xml'],
  },

  schemaOrg: {
    identity: {
      type: 'Organization',
      name: siteBrand.name,
      alternateName: [siteBrand.shortName, siteBrand.alternateName],
      url: siteBrand.url,
      logo: siteBrand.logo,
      email: siteBrand.email,
      description: defaultSeoDescription,
      knowsAbout: [...organizationKnowsAbout],
      areaServed: {
        '@type': 'Country',
        name: 'South Korea',
      },
      makesOffer: {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: `제니얼 홈페이지·관리자 대시보드 (${currentVertical.label})`,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
        },
      },
    },
  },

  scripts: {
    registry: {
      googleTagManager: {
        id: 'GTM-K7GDPL4J',
        trigger: 'onNuxtReady',
      },
    },
  },

  sitemap: {
    zeroRuntime: true,
    urls: [
      { loc: '/', changefreq: 'weekly', priority: 1 },
      { loc: '/products', changefreq: 'monthly', priority: 0.9 },
      { loc: '/pricing', changefreq: 'monthly', priority: 0.8 },
      { loc: '/contact', changefreq: 'yearly', priority: 0.7 },
    ],
  },
})
