'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d5e881b2990a2e5341121d24b473251d",
"assets/assets/fonts/segoesc.ttf": "5c452fb7a0f5751f4e94e9d84eb01154",
"assets/assets/fonts/segoeui.ttf": "623c7118249e082fe87a78e08506cb4b",
"assets/assets/fonts/segoeuib.ttf": "299556cecd6b730bce8230f529e837a1",
"assets/assets/fonts/segoeuil.ttf": "d44929d62a49114d494d1768893fcdf7",
"assets/assets/fonts/segoeuisl.ttf": "426088e434f43481b24859270171b906",
"assets/assets/fonts/seguibl.ttf": "868d9468768f1660600f840e3b864815",
"assets/assets/fonts/seguisb.ttf": "bc74928e0b7d13379ccf0b39354e87ad",
"assets/assets/images/about-me-avatar-2.png": "2a0cf121abe3a1daa4c7201b9819f31f",
"assets/assets/images/avatar.png": "de4c508f6cf4914447c542f5b35be7d3",
"assets/assets/images/blank-mob.png": "a2a2099f68d57b8f7f4588c2c6b9c571",
"assets/assets/images/blank-screen.png": "a5d1c77869f9193ecbdd0c7461fa6b62",
"assets/assets/images/blue-section-background.png": "8f51c233822a8dc52e813b0601f5695b",
"assets/assets/images/cit-app-1.png": "09d64a37c3fe59a9ce231be5d0fb7158",
"assets/assets/images/cit-app-2.png": "a3d36cf860cda97c4db8f839be6d3d70",
"assets/assets/images/cit-app-3.png": "db394743a5b2cd21a82813403b7871ae",
"assets/assets/images/cit-app-4.png": "463c7b10edd8dcfe2438a56c33bd054f",
"assets/assets/images/cit-app-5.png": "44a8c573ff6595104d53f058dce5e58f",
"assets/assets/images/cit-app-6.png": "aa312e12a3a553b4b39ae4f02dc95d9e",
"assets/assets/images/cit_login.JPG": "7525d9c7f05404d77fffe145d8a2d885",
"assets/assets/images/cit_login_800_400.jpg": "f990dc48c1ef2bc4b7acd1919c768c61",
"assets/assets/images/cit_logo.jpg": "18dec15635150d740d94f375416536bd",
"assets/assets/images/cit_logo2.jpg": "0ea2c2bac420dd12c0b2d92d6151d13b",
"assets/assets/images/consult.png": "84b219eaad92c9ac39216525b21ae2cb",
"assets/assets/images/email-fail.png": "7bf6e4af867f36817923d0849af0a602",
"assets/assets/images/email-success.png": "732931cca5917407cf8dae985edc82aa",
"assets/assets/images/fav-icon.png": "3d7560aa857cf467c25be72d304e1931",
"assets/assets/images/hdtc-1.png": "6a41f7ef44ee4eac1264ea7a17d8ce72",
"assets/assets/images/hdtc-2.png": "fb6172537b8ebce40be0b8c261bc0ff6",
"assets/assets/images/hdtc-3.png": "a6e4921fc3daf48d8ff474ccfc2ad870",
"assets/assets/images/hdtc-4.png": "67370b3057c522ef1a01cb9f1513c554",
"assets/assets/images/hdtc_logo.jpg": "3d7ad1c9e86e1d42ee2f5a4b34e665bc",
"assets/assets/images/html.png": "a38c2498d7f7b88c1bbd7b1a82e15dc3",
"assets/assets/images/Logo%25202.jpg": "f98657fc061c1ee3a40a74547d10d578",
"assets/assets/images/Logo%25203.jpg": "4fca410532244b8c09e4cb5c4acfd7df",
"assets/assets/images/logo.png": "887d1fa466f58b167e94fd54918728c9",
"assets/assets/images/meals_app1.jpg": "fe011fd83c962848245c8be1e6becae5",
"assets/assets/images/meals_app2.jpg": "47b81e8c6f93e4716b37ac7758303812",
"assets/assets/images/meals_app3.jpg": "d7efbb0f8a2d45ad8fac418d4b926c9e",
"assets/assets/images/meals_app4.jpg": "113892c38270b635dbb433ccfa3c1072",
"assets/assets/images/mobile-dev.png": "790276bab9691aa4fc5be5301cd2c7ec",
"assets/assets/images/mob_project_background.png": "dc0841e68f2b3d6682599ecbcd3deba3",
"assets/assets/images/movie_recommendation1.jpg": "62721b800bf80faf674828d70f6c2ea2",
"assets/assets/images/movie_recommendation2.jpg": "39b3b8c1dccf1f896acc118b63eb654e",
"assets/assets/images/movie_recommendation3.jpg": "95bf9f90de4bcded23c6352ce549b811",
"assets/assets/images/movie_recommendation4.jpg": "c884b78189fa6b8036a23e54c54490d0",
"assets/assets/images/movie_recommendation5.jpg": "8b87cddc57ae57d09aacb6c2a44dc6ad",
"assets/assets/images/review-icon.png": "e37525377a62a558826b63eb02c547ec",
"assets/assets/images/sit-logo.png": "b1d6488aa7731bd94349be319eabc8c1",
"assets/assets/images/site-under-maintenance.png": "bf7225e4afdb2719ef49480dc5a443ac",
"assets/assets/images/standard_avatar.png": "9e539c8ebdc3a9fa73da95662b4c323e",
"assets/assets/images/thankful_avatar.png": "1a8e2900006a26efb837b6da695ef557",
"assets/assets/images/unimplemented-tour.png": "cc3512499d6f56c932728bd2dd464830",
"assets/assets/images/web_dev.png": "d37dda2d50e891f0664d859bd1166989",
"assets/assets/images/web_dev2.png": "98c6dc99eb9fc1414fce11635a3b87bd",
"assets/assets/images/web_project_background.png": "4eb5749b5b044e1b3e099672b7d70c66",
"assets/assets/images/web_project_background4.png": "82b9b54aa21577ab0153a72624f65ebe",
"assets/assets/images/white-section-background.png": "88b231cc4b63dedf288a065f5bb9c968",
"assets/FontManifest.json": "d99594b7e26c269560797441c1789320",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "70d1e4741934d4c80ab6ec6dbfe38017",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "2ddd86df74243afdf23c780aa0fdab3c",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "d8d01320cfb28cce9311a5ec8b30b813",
"icons/Icon-512.png": "b210120928388dca72a6ab9a23c988d5",
"icons/Icon-maskable-192.png": "d8d01320cfb28cce9311a5ec8b30b813",
"icons/Icon-maskable-512.png": "b210120928388dca72a6ab9a23c988d5",
"index.html": "37ea62cf39cacf0bb545a1236a936aab",
"/": "37ea62cf39cacf0bb545a1236a936aab",
"main.dart.js": "2a975e6feb037f545c886913dc710a98",
"manifest.json": "1d560bdba0faba3d8f0170c9137f46ac",
"version.json": "c8f979d408e51acd1ee06f6af9b9722c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
