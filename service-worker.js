/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7b5a77a4aa5dbd9edf5e8b99a9007162"
  },
  {
    "url": "API/index.html",
    "revision": "f0a74c5233bb34feadfc3221f11e1e98"
  },
  {
    "url": "API/Type/index.html",
    "revision": "fc9afacae86127ba75c62a9d03415003"
  },
  {
    "url": "assets/css/0.styles.3587083f.css",
    "revision": "c70235415b32634966bef23cbd3686c3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c1f3a26f.js",
    "revision": "b942a1399c29b3512f2298b11f6f9eba"
  },
  {
    "url": "assets/js/11.cc27538d.js",
    "revision": "655c1d8d0e0d18986d4087a80afcaef4"
  },
  {
    "url": "assets/js/12.1a539f23.js",
    "revision": "b223ddb02b80c0aa985e0abf5533d3e2"
  },
  {
    "url": "assets/js/13.58867f49.js",
    "revision": "dfc4bcee71e8d43b77dae69fb955ee67"
  },
  {
    "url": "assets/js/14.cfe1a31b.js",
    "revision": "83ca3a00adea9db2b3f3dea24fc385a4"
  },
  {
    "url": "assets/js/15.a01abffe.js",
    "revision": "b613a8db1859f0796c4b6165482a07bf"
  },
  {
    "url": "assets/js/16.72eebc95.js",
    "revision": "9d665785a01afb88cb9b3103b25ccb3e"
  },
  {
    "url": "assets/js/17.01521809.js",
    "revision": "d30f7fdda3acf152e82571858040259c"
  },
  {
    "url": "assets/js/18.e9f66000.js",
    "revision": "62ac3820f73ff910a89b02e2ab873235"
  },
  {
    "url": "assets/js/19.5c55fd13.js",
    "revision": "53d6165b76915354186279eca17021ed"
  },
  {
    "url": "assets/js/2.21472f62.js",
    "revision": "e0b9dd14f18b659314009ec24f7cacc2"
  },
  {
    "url": "assets/js/3.f106b8e4.js",
    "revision": "54a5ee1e85ba6db823660a6f78dfc513"
  },
  {
    "url": "assets/js/4.b35954f3.js",
    "revision": "a9060cc6ea21c9e7b3593584c5e8cdca"
  },
  {
    "url": "assets/js/5.090ae046.js",
    "revision": "e7565f6c26c477ff1be92354031c1c9a"
  },
  {
    "url": "assets/js/6.cd3fa387.js",
    "revision": "74e0537de2456e0cbfd304ec551b3c22"
  },
  {
    "url": "assets/js/7.4ed21a8d.js",
    "revision": "e4cccb06dcaa09fea9c5ffdbdd02eb6c"
  },
  {
    "url": "assets/js/8.88a3f407.js",
    "revision": "0d7c70d818ecfe0ce86b95bd7a53f2b2"
  },
  {
    "url": "assets/js/9.3c703abb.js",
    "revision": "863fc580403ce5cefd82b1a8d83485dd"
  },
  {
    "url": "assets/js/app.108cf537.js",
    "revision": "38870648b6cc36d516e9bdcad2336281"
  },
  {
    "url": "Event/index.html",
    "revision": "b71fb13aaf6ab155a921596a095ae783"
  },
  {
    "url": "Event/MessageEvent/index.html",
    "revision": "9b4dcc4b553d2900e41403e5543c14b7"
  },
  {
    "url": "Event/MetaEvent/index.html",
    "revision": "1ed2e8c4269c7b5fd847013b1c3f0e93"
  },
  {
    "url": "Event/NoticeEvent/index.html",
    "revision": "0e9b0d6b36c1b006a7f9b4e0993af41f"
  },
  {
    "url": "Event/RequestEvent/index.html",
    "revision": "28a1df255f85a703df6d5012c6fce43b"
  },
  {
    "url": "Guide/index.html",
    "revision": "e4d3b38555f79c0b892613db49c23733"
  },
  {
    "url": "Guide/QuickStart/index.html",
    "revision": "9144e4d3bd9fc506a3ab3aac1b08498e"
  },
  {
    "url": "index.html",
    "revision": "24418826977702bd8b5e93180661fcbf"
  },
  {
    "url": "QuickStart/CreateProject-1.png",
    "revision": "0d53655781c25af02bdfa961b4df4d42"
  },
  {
    "url": "QuickStart/CreateProject-2.png",
    "revision": "d2edf72620de3c4a1ad4e648917adfae"
  },
  {
    "url": "QuickStart/CreateProject.png",
    "revision": "d07c9b13fbc0c0d7a7d1ee8f4e8b3181"
  },
  {
    "url": "UpdateLogs/index.html",
    "revision": "c50bc25a473c28a723f9999ac24f1ab0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
