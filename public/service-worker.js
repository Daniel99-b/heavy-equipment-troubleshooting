const CACHE_NAME='heavyfix-v5-cache-v1';
const PRECACHE=['/','/index.html','/assets/images/hero.webp'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(PRECACHE))); self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{caches.open(CACHE_NAME).then(c=>{try{c.put(e.request,res.clone());}catch{}}); return res;}).catch(()=>caches.match('/index.html'))));});