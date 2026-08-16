const CACHE="escritor-v44";
const OLD_CACHES=["escritor-v41","escritor-v42","escritor-v43","escritor-v44"];
self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
  await self.clients.claim();
})()));
self.addEventListener("fetch",e=>{
  const req=e.request;
  // Never serve index.html from an old PWA cache. This was the cause of
  // V41/V43 code being restored after reload.
  if(req.method!=="GET")return;
  const url=new URL(req.url);
  if(url.pathname.endsWith("/index.html") || url.pathname.endsWith("/sw.js") || url.pathname.endsWith("/manifest.json")){
    e.respondWith(fetch(req,{cache:"no-store"}).catch(()=>caches.match(req)));
    return;
  }
  e.respondWith(fetch(req).then(r=>{
    const c=r.clone();
    caches.open(CACHE).then(x=>x.put(req,c)).catch(()=>{});
    return r;
  }).catch(()=>caches.match(req)));
});
