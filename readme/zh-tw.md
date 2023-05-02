# Nuxt Content Starter
Nuxt + Netlify CMS 部落格模板

![](/readme/cover.png)
[EN](../README.md)

這是一個使用了 `Nuxt.js` 和 `Netlify CMS` 的部落格模板。本專案使用了靜態網站，並且整合了 Netlify CMS，讓使用者可以透過一個簡單易用的管理介面來新增、修改、刪除文章，也可使用 Markdown 撰寫文章。

## 目錄

- [專案已安裝內容](#專案已安裝內容)
- [如何使用](#如何使用)
- [一鍵部署至render](#一鍵部署至render)
- [有用的文檔](#有用的文檔)

## 專案核心內容

- `@nuxt/content`
- `@nuxtjs/tailwindcss`
- `nuxt`
- `sitemap`
- `Netlify CMS`


## 如何使用

可以點擊右上方`Use this template`或點擊這裡的[Use this template](https://github.com/connectshark/nuxt-content-starter/generate)直接開始專案

或是可以選擇git的方式
```
git@github.com:connectshark/nuxt-content-starter.git
```
### 開發前準備

可以參考[官方文件](https://nuxt.com/docs/getting-started/installation#prerequisites)

### 安裝指令

```
npm install
```

### 開發指令

```
npm run dev
```

### 生產指令

```
npm run generate
```

### 部署內容

生產完成以後將`.output/public`部署至指定的靜態空間上即可


## 一鍵部署


### 部署至render.com
若你有render帳號，點擊按鈕即可立即部署此專案

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

**安裝時會提醒被提醒services的方案預設為starter，但這實際上部署時是靜態網站**

### 部署至netflify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/connectshark/nuxt-content-starter)

## 有用的文檔

- [Content | Nuxt](https://content.nuxtjs.org/)

## License

[MIT](https://github.com/connectshark/nuxt-content-starter/blob/main/LICENSE)