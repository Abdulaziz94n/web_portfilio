'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ac043fcf606218893e8b10c5c46409c6",
"assets/assets/fonts/segoesc.ttf": "5c452fb7a0f5751f4e94e9d84eb01154",
"assets/assets/fonts/segoeui.ttf": "623c7118249e082fe87a78e08506cb4b",
"assets/assets/images/about_avatar.jpg": "16f39d56f360c074fa3bf339b1336eaa",
"assets/assets/images/about_me_avatar.png": "4fee1508222a0a92417b188871c2d740",
"assets/assets/images/avatar.png": "de4c508f6cf4914447c542f5b35be7d3",
"assets/assets/images/blank_screen.png": "a5d1c77869f9193ecbdd0c7461fa6b62",
"assets/assets/images/cit_login.JPG": "7525d9c7f05404d77fffe145d8a2d885",
"assets/assets/images/cit_login_800_400.jpg": "f990dc48c1ef2bc4b7acd1919c768c61",
"assets/assets/images/consult.png": "84b219eaad92c9ac39216525b21ae2cb",
"assets/assets/images/error_avatar.png": "9e539c8ebdc3a9fa73da95662b4c323e",
"assets/assets/images/hdtc_logo.jpg": "8bc1a7a209201395ba37b1d6736e85e9",
"assets/assets/images/hdtc_logo_edited.png": "930cc8c71661f7881105c14888e12bef",
"assets/assets/images/high%2520res%2520test.jpg": "a2e43f5b74470fabf0a29801703f43da",
"assets/assets/images/html.png": "a38c2498d7f7b88c1bbd7b1a82e15dc3",
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
"assets/assets/images/my_blank_mobile.JPG": "337f1a8e48fdd6e4a7e1895dbbcf4851",
"assets/assets/images/thankful_avatar.png": "1a8e2900006a26efb837b6da695ef557",
"assets/assets/images/web_dev.png": "d37dda2d50e891f0664d859bd1166989",
"assets/assets/images/web_dev2.png": "98c6dc99eb9fc1414fce11635a3b87bd",
"assets/assets/images/web_project_background.png": "4eb5749b5b044e1b3e099672b7d70c66",
"assets/FontManifest.json": "08afb27f0be6540af582f94b88d43f6e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "28a846c83202af528d8cc1ebe1249003",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "90035715ee007132b6dcba16f6f1a68a",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8614c9d0ba85bae6dc6cc070671ef09d",
"/": "8614c9d0ba85bae6dc6cc070671ef09d",
"main.dart.js": "02a8d666bf2a31c5a90158435623625a",
"manifest.json": "d6ca57350173b3ccd7074f958253fbee",
"version.json": "c8f979d408e51acd1ee06f6af9b9722c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
