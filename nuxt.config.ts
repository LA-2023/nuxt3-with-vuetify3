import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  devtools: {enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  //fix issue for docker not reflecting changes
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 100, // Poll files every 100ms
      },
    }
  }

})
