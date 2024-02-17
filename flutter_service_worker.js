'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e05e9298762d68af5fcd80b9745acda2",
"assets/AssetManifest.bin.json": "e654a0e342cf3f1b6600d28e50b5d999",
"assets/AssetManifest.json": "8c47643f6c1b76855827569499da44a7",
"assets/assets/background/bg-subject.png": "4b4dab39a8c615d0c401605d0f461aff",
"assets/assets/background/user/Ellipse-1952.png": "2c9442d5c29cdd62ba179483f0a1c108",
"assets/assets/background/user/Ellipse-1953.png": "3c93e18106ee5bb0d779b235b62fc2a6",
"assets/assets/background/user/Ellipse-1954.png": "cc047918440556761cff7a02079dea01",
"assets/assets/background/user/Ellipse-1955.png": "c764ce4bf905a41f021c5c7032ab5f16",
"assets/assets/background/user/Ellipse-1956.png": "29dbc05d38b99fee678c4454a4880cf2",
"assets/assets/background/user/Ellipse-1957.png": "944f3cab6ccc47f7d2fa24e5c0600bce",
"assets/assets/background/user/Ellipse-1958.png": "3cbe5a92ae0f175f26ed13575ee8bab1",
"assets/assets/background/user/student-1.png": "386349cde0d75a86156ec5c6acc02889",
"assets/assets/background/user/student-2.png": "5271bd8347c4f555f17bcfa32a9a82db",
"assets/assets/background/user/student-3.png": "7a9eb27cbce0f93c1434456618a9d12d",
"assets/assets/fonts/CustomIcon.ttf": "8a2639cf38ccab97eb5cf0dc9f7f2005",
"assets/assets/fonts/PlusJakartaSans-Bold.ttf": "7b5171730b60bbab2fbad670f8e7eb56",
"assets/assets/fonts/PlusJakartaSans-ExtraBold.ttf": "a44daca411a96f954b5aaf832cc5c68b",
"assets/assets/fonts/PlusJakartaSans-Light.ttf": "4b68d270a6da58098a8358d13b0eef5d",
"assets/assets/fonts/PlusJakartaSans-Medium.ttf": "14cb839fd288da26262c5f1374f31f46",
"assets/assets/fonts/PlusJakartaSans-Regular.ttf": "4e68870b0e1e6dd15bcd2f1ba9310305",
"assets/assets/fonts/PlusJakartaSans-SemiBold.ttf": "59976d773df451ee26926c9057e0379f",
"assets/assets/icons/arrow-forward-icon.png": "518418e0b0bf7c6b8dbc425f435af7fb",
"assets/assets/icons/check-icon.png": "da108c5950602a60baec4b5ea4e20e23",
"assets/assets/icons/clock-icon.png": "1639b72e022aa7c745458d5babde35b1",
"assets/assets/icons/coin-icon.png": "9470471816c8c546207a0a1c19e5ea6f",
"assets/assets/icons/contact-form.png": "c78b0d34716fd97b5afcc99f88adf023",
"assets/assets/icons/contact-group-icon.png": "f2090702979a265879c7ed4dcf0e2a54",
"assets/assets/icons/copy-icon.png": "5fe198ec3bdf94fccbe3913305c1b756",
"assets/assets/icons/dark-edit-icon.png": "59cd6106028655e6f75b7065cf645c49",
"assets/assets/icons/dashboard-icon.png": "db83a9df87ebc047fdf388ff31984c60",
"assets/assets/icons/dropdown-rectangle-icon.png": "7a446eea34c7a3a48bde1d3bcb8e129d",
"assets/assets/icons/edit-icon.png": "853e894010213b81889acdac9f7658d4",
"assets/assets/icons/failed-icon.png": "ece13eb4564423aa5ab6784aa755549a",
"assets/assets/icons/file-icon.png": "4a092aa58623663bf63a21c1c3954b7d",
"assets/assets/icons/forum-icon.png": "20ef9154b98a393fd3b6747c1f582e77",
"assets/assets/icons/location-icon.png": "d8fd67cc971c5b0fbfeaa5489f9e94e5",
"assets/assets/icons/lock-dark-icon.png": "96c75d44ad1a308d38622202bc750e46",
"assets/assets/icons/lock-form.png": "8d399befa6c5c8351d9c60c78c66f080",
"assets/assets/icons/lock.png": "3a72a7ba5832148b15502f2133da7c7c",
"assets/assets/icons/password-unhide-icon.png": "411df1a7f5083ece72687b0bbe44968a",
"assets/assets/icons/person-icon.png": "b24b9cf48c4f2104be21caf0411c1c59",
"assets/assets/icons/phone-icon.png": "86820613cf4db012b7e478d26530930e",
"assets/assets/icons/photo-icon.png": "80685f5752a139471981a8146a7e4409",
"assets/assets/icons/poin-icon.png": "5c20150d7f318a8042f13767347a39a4",
"assets/assets/icons/school-icon.png": "d3b766f16d3ff4eca0bec91e23826f75",
"assets/assets/icons/some-person-icon.png": "591bb6c708fc2d81759fea2aceb7f2fc",
"assets/assets/icons/success-icon.png": "106bd59c82f7c87110b014742bc12985",
"assets/assets/icons/trash-icon.png": "65e7de00c8504b8499096c612762d0e1",
"assets/assets/icons/uncheck-icon.png": "a60e8630b92d74f912b33d34d96b26c4",
"assets/assets/icons/unsuccess-icon.png": "3f9f47fbc46fae05f724bcf9d0a18b22",
"assets/assets/icons/video-icon.png": "25890073a6a656f62d6339d00e0e8c92",
"assets/assets/icons/warning-icon.png": "c696cde7fcd12f2e6abab56fb919edf8",
"assets/assets/icons/whatsapp.png": "e85de4116e7083ac68f8e76dd447ef2b",
"assets/assets/ilustration/dashboard-user-point-card-bg.png": "7e38db48ea729378360db3bfc45fcf9f",
"assets/assets/ilustration/Emoji-1.png": "718f5a1d7a3fa6312ff927b8a84470f6",
"assets/assets/ilustration/Emoji-2.png": "cd31775da81ba561b96148e0e3ef569d",
"assets/assets/ilustration/Emoji-3.png": "3a6a4e49c291ed3c93bb12b29b23c008",
"assets/assets/ilustration/Emoji.png": "4cae357155e1ddb1edbde54f0286fd78",
"assets/assets/ilustration/failed-ilustration.png": "9554f2c67988b91c2967afef0fe808ea",
"assets/assets/ilustration/Ilus-create.png": "33dc8db1e494e8f16e91b257f9258b01",
"assets/assets/ilustration/Ilus-doc.png": "ced52679ea73bbc0985da67503880318",
"assets/assets/ilustration/Ilus-emailcheck.png": "f745f80ed81be6e2f49ebd785bd24ae3",
"assets/assets/ilustration/Ilus-lock.png": "76af541d058bea428d5ac86e8994d4ad",
"assets/assets/ilustration/Ilus-send.png": "b00bf6806b9aa9b78935da5d84b8098e",
"assets/assets/ilustration/Ilus-trash.png": "2463fdf4f5408c82a44a599bd131f0bb",
"assets/assets/ilustration/onboarding-1.png": "23ef3150448d09a5efa4f0216c144de6",
"assets/assets/ilustration/onboarding-2.png": "64aea3c436f7486098b9e346a103b543",
"assets/assets/ilustration/onboarding-3.png": "673515dce63c5f08cfcaaf8ac6b91b2e",
"assets/assets/ilustration/onboarding-4.png": "f5e7494639f4ce658982b8820f05b6d3",
"assets/assets/ilustration/success-ilustration.png": "7391283a8811f709f8c8daaa71a04df6",
"assets/assets/images/bank/anz.png": "3b97e8cce625c898afc518860df27b1f",
"assets/assets/images/bank/bca.png": "f4767a0f059cce1954cc9d6e2c3ef267",
"assets/assets/images/bank/bi.png": "fbfb34e0e66d998730cf07e475c1e1e1",
"assets/assets/images/bank/bjb.png": "35a843e2ca930a1b9afe646e34d73aba",
"assets/assets/images/bank/bni.png": "c5e9022f188634d1effde11af9855803",
"assets/assets/images/bank/bri.png": "80b7265739330546910b3fe783797759",
"assets/assets/images/bank/bsi.png": "f4d47be51b1adacb4bd2757e4daa981e",
"assets/assets/images/bank/btn.png": "50b993d4b071db272cb61974b9ef2ffa",
"assets/assets/images/bank/bukopin.png": "57c9b474bfc699f6d5bc9a970e060915",
"assets/assets/images/bank/cimb.png": "a073848e8e390f374d81cd93c7072122",
"assets/assets/images/bank/citi.png": "588ca2b18bb6aff1bb47f927fd8c36cf",
"assets/assets/images/bank/danamon.png": "8b4441eb82c82475b57338199d2774e8",
"assets/assets/images/bank/digibank.png": "074c781f5bf888ef598f338ada9dcaac",
"assets/assets/images/bank/hsbc.png": "bcb5726262780d1eb158e63ef3478cd7",
"assets/assets/images/bank/jago.png": "67d220e12ad93b9fe05d5ee691255324",
"assets/assets/images/bank/jenius.png": "fca8764db6cbc4c129a35f2a8c71df24",
"assets/assets/images/bank/mandiri.png": "869b899f10f5dcf42a25f0d62e68313b",
"assets/assets/images/bank/maybank.png": "37dc98edf3a52d508510afa41f83ffcd",
"assets/assets/images/bank/mega.png": "70731212a4b9b18cdb68803d844794c1",
"assets/assets/images/bank/ocbc.png": "14aebfb8faeca4b1fb6defbebaf5a8ed",
"assets/assets/images/bank/panin.png": "013e22797fe08d9aaa68ac6bca3b7ea7",
"assets/assets/images/bank/permata.png": "627b9fdb29a1ce9ef03f7188b7c70b04",
"assets/assets/images/bank/standard%2520chartered.png": "c43285d530b41ec1c54cb677fa170375",
"assets/assets/images/bank/uob.png": "49b44ec3f9bd9b7b4351c9fe657a9cfb",
"assets/assets/images/empty-emoji.png": "3fcd053d62eba6328190ff65ddc20b2e",
"assets/assets/images/empty_placeholder.png": "20c949bb34e2f892d9278da0fe7037a6",
"assets/assets/images/ewallet/applepay.png": "3af435c1a1b0d4d088c78ee3c7951fd0",
"assets/assets/images/ewallet/bluepay.png": "acf647456bcc756d785be11345c0ccda",
"assets/assets/images/ewallet/cashbac.png": "38ca8e643f3f6e72b07aaaafd41f2fb6",
"assets/assets/images/ewallet/cashlez.png": "bcf1f45ed455405f8e05abc00ed395d6",
"assets/assets/images/ewallet/dana.png": "d4a9846bb2c5fe7926a770c75005d566",
"assets/assets/images/ewallet/flip.png": "fa1c8fc63b6e1db95e5f6ed08a3238f6",
"assets/assets/images/ewallet/gopay.png": "74f2459f88821be4625e9c28d8f1eb9d",
"assets/assets/images/ewallet/gpay.png": "dd19fc44bdc079806522ec15215adfe5",
"assets/assets/images/ewallet/kudo.png": "57d31b8c4f2f0a5f861aacd471405f6a",
"assets/assets/images/ewallet/linkaja.png": "c1bf7aaa75d28a8935794e11afc51176",
"assets/assets/images/ewallet/ovo.png": "bad0b707d66567c6e926ddb51459f121",
"assets/assets/images/ewallet/payfazz.png": "d573b5f498e19377668925c2a23ef6e6",
"assets/assets/images/ewallet/paypal.png": "eb40913fcf10cc7fa60f59d044f68a1c",
"assets/assets/images/ewallet/paypro.png": "b11f96ae09dd4aee4b3b4a1df905df70",
"assets/assets/images/ewallet/paytren.png": "274bc8cc90adc2a93aff7021f3b9a87e",
"assets/assets/images/ewallet/shopeepay.png": "1e11e8effb88910af5387354ad4b1ebc",
"assets/assets/images/ewallet/uangku.png": "a849f7bc8747b79bb6f180c2de861387",
"assets/assets/images/hotel-image.png": "8ac763118532caa9aa5c9d8e3785f96a",
"assets/assets/images/loading.gif": "a83c70d15e62563d3baa47120231b749",
"assets/assets/images/merchant/alfamart.png": "4e2a70096a720000dff5ac8eacac1410",
"assets/assets/images/merchant/indomaret.png": "ca8effb9728c36ee8fc928022cae422d",
"assets/assets/images/photos/random-photos-1.png": "d972dd62a5657b75b5725c547b7e45cc",
"assets/assets/images/photos/random-photos-2.png": "855272a34695daa6b334c6b8a70bd33b",
"assets/assets/images/photos/random-photos-3.png": "37c5e6e928e206b69bc5e0f4f0553301",
"assets/assets/images/photos/random-photos-4.png": "505acca6e4ed30c1ffbfcdf1d0b6c7b3",
"assets/assets/logo/long-logo.png": "e0a3757b238423376bc94fc171609dde",
"assets/assets/logo/short-logo.png": "09abb88aafe67fa0829726108099e8ec",
"assets/FontManifest.json": "2e49f32437b408142a173fac6cda59f9",
"assets/fonts/MaterialIcons-Regular.otf": "eb2d99057f5b2267078654d59a694752",
"assets/NOTICES": "86bfa6c4db1179424478fef3e5ea05c9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "51cb25d837b2f417eaf41b750634fda4",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "ec6cc114195fbeef7767f059790356fd",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "570da368f96dc6433b8a1006c425ca7d",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "09abb88aafe67fa0829726108099e8ec",
"icons/Icon-512.png": "09abb88aafe67fa0829726108099e8ec",
"icons/Icon-maskable-192.png": "09abb88aafe67fa0829726108099e8ec",
"icons/Icon-maskable-512.png": "09abb88aafe67fa0829726108099e8ec",
"index.html": "26c74ba4ba245e41547fb8b4bf1fce86",
"/": "26c74ba4ba245e41547fb8b4bf1fce86",
"main.dart.js": "ec86804ac03a2e1ec141c558749490a9",
"manifest.json": "6a741a4b483a9e3fde36491d7ebf9e03",
"satujuta_web_v1.0.0.zip": "464d9d676e5564530e61e43203c69c20",
"version.json": "49ad9b22b00e9723a218bc030ecd5b5f",
"_favicon.png": "59311ef57b894dffccb4e99bdeb0ba55"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
