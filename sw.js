var CACHE_NAME="1577981738743",urlsToCache=["/"];self.addEventListener("install",function(e){e.waitUntil(caches.open(CACHE_NAME).then(function(e){return e.addAll(urlsToCache)}))}),self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(e!==CACHE_NAME)return caches.delete(e)}))}))}),self.addEventListener("fetch",function(n){n.respondWith(caches.match(n.request).then(function(e){if(e)return e;var t=n.request.clone();return fetch(t).then(function(e){if(!e||200!==e.status||"basic"!==e.type)return e;var t=e.clone();return caches.open(CACHE_NAME).then(function(e){e.put(n.request,t)}),e})}))});