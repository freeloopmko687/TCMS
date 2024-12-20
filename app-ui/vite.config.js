import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";
import autoprefixer from 'autoprefixer';
import pxtorem from 'postcss-pxtorem';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // vueDevTools(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),//自动补全浏览器前缀
        pxtorem({ //计算公式为：设计稿宽度 / 10。假设设计稿为375px，即rootValue设为37.5，意味着每个 rem 单位对应设计稿中的 37.5px
          rootValue: 37.5,
          propList: ['*']
        })
      ]
    }
  },
  resolve: {
    extensions: [".js", ".jsx", ".ejs", '.mjs'], // 之前忽略了 .mjs
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
