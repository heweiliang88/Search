import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import vueJsx from "@vitejs/plugin-vue-jsx";
import legacy from "@vitejs/plugin-legacy";
import eslintPlugin from 'vite-plugin-eslint';

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx({
            // options are passed on to @vue/babel-plugin-jsx
        }),
        legacy({
            targets: ["defaults", "not IE 11"],
        }),
        eslintPlugin({
			include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue'],
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
          }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    resolve: {
		// 配置路径别名
		alias: {
			'@': '/src',
		},
	},
    server: {
        proxy: {
            // 字符串简写写法
            "/foo": "http://localhost:4567",
            // 选项写法
            "/api": {
                target: "http://jsonplaceholder.typicode.com",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
            // 正则表达式写法
            "^/fallback/.*": {
                target: "http://jsonplaceholder.typicode.com",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/fallback/, ""),
            },
            // Proxying websockets or socket.io
            "/socket.io": {
                target: "ws://localhost:3000",
                ws: true,
            },
        },
    },
});
