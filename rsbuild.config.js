import { defineConfig } from '@rsbuild/core';
import { rspack } from '@rspack/core';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginEslint } from "@rsbuild/plugin-eslint";
import { pluginReact } from '@rsbuild/plugin-react';
// eslint-disable-next-line no-undef
console.log(process.env.CROSS_ENV)
export default defineConfig({
  plugins: [pluginReact(), pluginSass(),pluginEslint()],
  entry: 'index.js',
  output: {
    // externals: {
    //   'react-dom/client': 'ReactDOM',
    //   'react': 'React'
    // },
    polyfill: 'usage'
  },
  tools: {
    rspack: {
      plugins: [new rspack.HtmlRspackPlugin({
        title: "My HTML Template",
        template: 'public/index.html',
        filename: 'index.html'
      })]

    },

  },
  html: false,
  resolve: {
    alias: {
      '@': './src',
    },
  },
  performance: {
    removeConsole: process.env.CROSS_ENV === 'production' ? true : false,
    chunkSplit: {
      strategy: 'custom',
      splitChunks: {
        cacheGroups: {
          react: {
            test: /node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
            name: 'react',
            minChunks: 1,
            priority: -2,
            chunks: 'all',
            enforce: true
          },
          antd: {
            test: /node_modules[\\/](antd)[\\/]/,
            name: 'antd',
            minChunks: 1,
            priority: -9,
            chunks: 'all',
            enforce: true
          },

          vendor: {
            name: 'vendor',
            chunks: 'all',
            minChunks: 3,
            priority: -10,
            test: /[\\/]node_modules[\\/]/,
            reuseExistingChunk: true,
          },
          default: {
            chunks: 'all',
            test: /[\\/]src[\\/]/,
            minChunks: 3,
            priority: -20,
            reuseExistingChunk: true,
            name: 'common'
          }
        },
      },
    },
    bundleAnalyze:{
      analyzerMode: 'server',
      openAnalyzer: false,
    }
  },
  source: {
    define: {
      CROSS_ENV: JSON.stringify(process.env.CROSS_ENV)
    }
  }
});
