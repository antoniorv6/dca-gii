import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  base:'/dca-gii/',   //TODO descomentar para build
  trailingSlash: 'always',  //TODO descomentar para build
  site:'https://antoniorv6.github.io/',
  build:{
    assets: '_assets'
  },
  integrations: [
    starlight({
      title: 'DCA GII',
      defaultLocale: 'root',  // Add this
      locales: {
        root: {
          label: 'Español',
          lang: 'es'
        }
      },
      customCss: [
        './src/styles/custom.css'
      ]
    })
  ],
  output: 'static'
});