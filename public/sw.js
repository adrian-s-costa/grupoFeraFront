if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const d=e=>n(e,c),r={module:{uri:c},exports:t,require:d};s[c]=Promise.all(a.map((e=>r[e]||d(e)))).then((e=>(i(...e),t)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/JL9qOzpldGpy8Rdghnj_B/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/JL9qOzpldGpy8Rdghnj_B/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/127-c0c386eb3213a182.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/138-7635035dd159fbac.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/190-87c62612fa688612.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/540-ca940e32ecfe7163.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/58-066e18f7d9c3bce7.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/59650de3-1682e697caf4e62e.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/5e22fd23-625422e94ba9744b.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/63a56fe9-07b30277706e692e.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/648-b32d38a8a1384e6b.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/669-8e62a727c99ce2c3.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/67-48f311c950414804.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/795d4814-9d74aa8cb8a55062.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/829-cbc88e75bc44bc30.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/844-3bbee2dbdcdaf421.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/8e1d74a4-f6cbfd2970b2f2b4.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/932-ab3769d5d4925b84.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/94730671-b8020ed6781ef9d0.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/9c4e2130-6ce4f86486680d94.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/app/_not-found/page-64b2e956ff924d61.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/app/allCategoryList/page-364d07c592d3a070.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/app/category/page-b143bffa988b8233.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/app/categoryList/page-31dae571ee836b7b.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/app/code/page-27daf17234c10aab.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/app/home/page-b192b80e1eb462fd.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/app/layout-5d4a012c5e34fb48.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/app/loader/page-9d4bd9d07d08a1d5.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/app/login/page-c37ebd7d2dcbdb60.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/app/offer/page-1897a1f48bdcaaaa.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/app/page-e06e0bc2ab9c0c19.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/app/password/page-d23c320f3ea86fb5.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/app/profile/page-312ca830330aee34.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/app/streaming/page-6d480600d537b50a.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/app/tab/page-b7db2a7f96e6c425.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/app/user-info/page-bb02bac2458b45cd.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/app/video/%5Bid%5D/page-e079b53f8c690e53.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/bff72ad5-768d2823bc429990.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/ee560e2c-c51f120613dd73c8.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/eec3d76d-c321cbc4a2b57398.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/eef55f7d-df9aa1eaac6bae71.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/f97e080b-b80f66945572549e.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/fd9d1056-bfbeafacdddf7a4f.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/main-57f0fd876c9eab4a.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/main-app-f7ae89f52402e467.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-858f841d55478ddb.js",revision:"JL9qOzpldGpy8Rdghnj_B"},{url:"/_next/static/css/5a56e3c1761e58ad.css",revision:"5a56e3c1761e58ad"},{url:"/_next/static/css/f63ea3db6be428f3.css",revision:"f63ea3db6be428f3"},{url:"/_next/static/css/ffec468c35b3c695.css",revision:"ffec468c35b3c695"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/634216363f5c73c1-s.woff2",revision:"4a1bf14c88bdef173c2a39c5c60e65ce"},{url:"/_next/static/media/88325a2c1fede2f4-s.woff2",revision:"93131c3ec4fe9782c2c40a708db9b0b6"},{url:"/_next/static/media/aec774cbe1963439-s.woff2",revision:"37f8885214448afc8f3b3678db525598"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/d83fe381bb17eb77-s.woff2",revision:"215b11e73137fdb7d9a773e0211c29d6"},{url:"/_next/static/media/e1c529c04de64b40-s.p.woff2",revision:"e88b1871ed8eef59b7df05a91a6f2157"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/intro1.3294c7fa.png",revision:"436a5b68c628f690482e81d1c01d4cfd"},{url:"/_next/static/media/intro2.8d17b061.png",revision:"83af1cd4634cac74a229a5c1d17f16c8"},{url:"/_next/static/media/intro3.119ae020.png",revision:"35f263f01a2db84124a4a37591278857"},{url:"/icon.png",revision:"23fa4800d3064dbb8ec5eb11325023d4"},{url:"/icon2.png",revision:"c051e66255717c4fee1929ac613e1ab1"},{url:"/manifest.json",revision:"9d253c798d494da2db20fa92b55e58dd"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/offline.html",revision:"a7a4c7abbdc3e217b3ed440f9739fe0a"},{url:"/pwabuilder-sw.js",revision:"915d1cffb442a8212728dbd7974903e9"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
