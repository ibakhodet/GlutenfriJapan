const MainColor = "#c42626" // Definerer MainColor for å unngå feil
const CACHE_NAME = "glutenfri-verden-v1"
const urlsToCache = ["/", "/index.html", "/manifest.json"]

// Installer service worker og cache filer
self.addEventListener("install", (event) => {
event.waitUntil(
  caches.open(CACHE_NAME).then((cache) => {
    console.log("Opened cache")
    return cache.addAll(urlsToCache)
  }),
)
})

// Aktiver service worker og fjern gamle cacher
self.addEventListener("activate", (event) => {
const cacheWhitelist = [CACHE_NAME]
event.waitUntil(
  caches.keys().then((cacheNames) => {
    return Promise.all(
      cacheNames.map((cacheName) => {
        if (cacheWhitelist.indexOf(cacheName) === -1) {
          return caches.delete(cacheName)
        }
      }),
    )
  }),
)
})

// Håndter nettverksforespørsler
self.addEventListener("fetch", (event) => {
event.respondWith(
  caches.match(event.request).then((response) => {
    // Cache hit - returner respons
    if (response) {
      return response
    }

    // Klon forespørselen
    const fetchRequest = event.request.clone()

    return fetch(fetchRequest)
      .then((response) => {
        // Sjekk om vi mottok en gyldig respons
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response
        }

        // Klon responsen
        const responseToCache = response.clone()

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache)
        })

        return response
      })
      .catch(() => {
        // Hvis nettverket feiler, prøv å returnere en offline-side
        if (event.request.mode === "navigate") {
          return caches.match("index.html")
        }
      })
  }),
)
})
