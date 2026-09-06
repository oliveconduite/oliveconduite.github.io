/* Permis Score — service worker : l'appli s'ouvre même sans réseau,
   et affiche les dernières données connues. */
var CACHE = "permis-score-v1";
var SHELL = ["./", "./index.html", "./manifest.json", "./icone-180.png", "./icone-512.png"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); })
    .then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (n) {
    return Promise.all(n.filter(function (k) { return k !== CACHE; })
      .map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  var estApi = e.request.url.indexOf("script.google.com") >= 0;

  if (estApi) {
    // réseau d'abord, sinon dernières données connues
    e.respondWith(
      fetch(e.request).then(function (r) {
        var copie = r.clone();
        caches.open(CACHE).then(function (c) { c.put("derniere-donnee", copie); });
        return r;
      }).catch(function () { return caches.match("derniere-donnee"); })
    );
    return;
  }
  // le reste : cache d'abord
  e.respondWith(caches.match(e.request).then(function (r) { return r || fetch(e.request); }));
});
