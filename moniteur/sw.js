/* Permis Score — service worker.
   L'appli s'ouvre même sans réseau et affiche les dernières données connues.

   POUR PUBLIER UNE NOUVELLE VERSION : changez juste la ligne VERSION
   ci-dessous (par exemple la date du jour). Le service worker détectera
   le changement, purgera l'ancien cache et rechargera tous les fichiers.
*/
var VERSION = "2026-09-06-03";
var CACHE   = "permis-score-" + VERSION;
var SHELL   = ["./", "./index.html", "./manifest.json", "./icone-180.png", "./icone-512.png"];

self.addEventListener("install", function (e) {
  // On ne prend PAS skipWaiting automatiquement : la nouvelle version
  // s'installe en attente, et l'appli demandera à l'activer via le bouton MAJ.
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(SHELL); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (n) {
      return Promise.all(n.filter(function (k) { return k !== CACHE; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* L'appli peut demander la version en place, ou forcer l'activation
   d'une version en attente (bouton MAJ). */
self.addEventListener("message", function (e) {
  if (!e.data) return;
  if (e.data === "version" && e.source) {
    e.source.postMessage({ type: "version", version: VERSION });
  }
  if (e.data === "activer") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  var url = e.request.url;

  // Ne traiter que le web http(s). On ignore chrome-extension:// et autres schémas.
  if (url.indexOf("http") !== 0) return;

  // 1) L'API Google : réseau d'abord, sinon dernières données connues.
  if (url.indexOf("script.google.com") >= 0) {
    e.respondWith(
      fetch(e.request).then(function (r) {
        var copie = r.clone();
        caches.open(CACHE).then(function (c) { c.put("derniere-donnee", copie); });
        return r;
      }).catch(function () { return caches.match("derniere-donnee"); })
    );
    return;
  }

  // 2) Les fichiers de l'appli : réseau d'abord, cache en secours.
  //    Ainsi une nouvelle version en ligne est prise immédiatement dès
  //    qu'il y a du réseau, sans attendre. Hors réseau, l'appli s'ouvre
  //    quand même depuis le cache.
  e.respondWith(
    fetch(e.request).then(function (r) {
      var copie = r.clone();
      caches.open(CACHE).then(function (c) { c.put(e.request, copie); });
      return r;
    }).catch(function () {
      return caches.match(e.request).then(function (r) {
        return r || caches.match("./index.html");
      });
    })
  );
});
