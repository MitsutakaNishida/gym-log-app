const CACHE_NAME='gym-log-v0.14.3';
const APP_SHELL=['./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME&&k.startsWith('gym-log-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const url=new URL(e.request.url);
 if(url.origin!==self.location.origin)return;
 if(e.request.mode==='navigate'){
  e.respondWith(fetch(new Request(e.request,{cache:'no-store'})).then(r=>{
   if(r.ok){const copy=r.clone();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.put('./index.html',copy)));}
   return r;
  }).catch(()=>caches.match('./index.html')));
  return;
 }
 if(url.pathname.endsWith('/sw.js')||url.pathname.endsWith('/manifest.webmanifest')){
  e.respondWith(fetch(new Request(e.request,{cache:'no-store'})).catch(()=>caches.match(e.request)));
  return;
 }
 e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request)));
});
