if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/138-7635035dd159fbac.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/190-87c62612fa688612.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/325-5236237733bec6af.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/540-ca940e32ecfe7163.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/58-066e18f7d9c3bce7.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/59650de3-1682e697caf4e62e.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/5e22fd23-625422e94ba9744b.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/63a56fe9-07b30277706e692e.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/648-b32d38a8a1384e6b.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/669-8e62a727c99ce2c3.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/67-48f311c950414804.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/795d4814-9d74aa8cb8a55062.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/829-99a8dfdc56dc4fe8.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/844-f3b0460a68572390.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/8e1d74a4-f6cbfd2970b2f2b4.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/932-ab3769d5d4925b84.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/94730671-b8020ed6781ef9d0.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/9c4e2130-6ce4f86486680d94.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/app/_not-found/page-64b2e956ff924d61.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/app/category/page-fc3b1b3ac866cfdf.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/app/code/page-db27ec0e3964ea81.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/app/home/page-93d2cf0d9e72a473.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/app/layout-e0563ee0d630bfa9.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/app/loader/page-053a0603c64123d1.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/app/login/page-9e6c4fea644c8fe1.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/app/offer/page-8823e72adec094af.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/app/page-e06e0bc2ab9c0c19.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/app/password/page-19cd563b30507082.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/app/profile/page-312ca830330aee34.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/app/streaming/page-fb53b207a4e1556f.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/app/tab/page-ae18d863f26abfb3.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/app/user-info/page-65797eb34ad35a1e.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/app/video/%5Bid%5D/page-2a324791059e8bdd.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/bff72ad5-768d2823bc429990.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/ee560e2c-c51f120613dd73c8.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/eec3d76d-c321cbc4a2b57398.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/eef55f7d-df9aa1eaac6bae71.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/f97e080b-b80f66945572549e.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/fd9d1056-bfbeafacdddf7a4f.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/main-aa8457bb437499ae.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/main-app-f7ae89f52402e467.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-d0b21d6ddc3c8906.js",revision:"q6mz5A52E1gNMO7YE_HYl"},{url:"/_next/static/css/2f71e0d51b6954c9.css",revision:"2f71e0d51b6954c9"},{url:"/_next/static/css/5a56e3c1761e58ad.css",revision:"5a56e3c1761e58ad"},{url:"/_next/static/css/fc42019763142a04.css",revision:"fc42019763142a04"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/intro1.3294c7fa.png",revision:"436a5b68c628f690482e81d1c01d4cfd"},{url:"/_next/static/media/intro2.8d17b061.png",revision:"83af1cd4634cac74a229a5c1d17f16c8"},{url:"/_next/static/media/intro3.119ae020.png",revision:"35f263f01a2db84124a4a37591278857"},{url:"/_next/static/q6mz5A52E1gNMO7YE_HYl/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/q6mz5A52E1gNMO7YE_HYl/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icon.png",revision:"23fa4800d3064dbb8ec5eb11325023d4"},{url:"/icon2.png",revision:"c051e66255717c4fee1929ac613e1ab1"},{url:"/manifest.json",revision:"9d253c798d494da2db20fa92b55e58dd"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/offline.html",revision:"a7a4c7abbdc3e217b3ed440f9739fe0a"},{url:"/pwabuilder-sw.js",revision:"915d1cffb442a8212728dbd7974903e9"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
