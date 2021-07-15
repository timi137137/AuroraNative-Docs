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
    "revision": "4b7ca4ab565b9b6b33880451218d513d"
  },
  {
    "url": "API/index.html",
    "revision": "93d4ecc183c11cda17d3c8e805de7ea6"
  },
  {
    "url": "API/Type/index.html",
    "revision": "7f52e4b727c9e728785dd242c54be718"
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
    "url": "assets/js/10.56d37ce0.js",
    "revision": "307c2d3a2993aa14d22ccec92b01f758"
  },
  {
    "url": "assets/js/11.97d23049.js",
    "revision": "31fca7ad5374cad809e7e610acb11315"
  },
  {
    "url": "assets/js/12.40b7677c.js",
    "revision": "b57223bee0a361faf109099c8f5a202a"
  },
  {
    "url": "assets/js/13.2dcf15ed.js",
    "revision": "dfe83459c2ee43eb7703b1ca4fdee683"
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
    "url": "assets/js/16.28365317.js",
    "revision": "c0ea7062ea1644eab23fedadbedcf439"
  },
  {
    "url": "assets/js/17.bcf63e49.js",
    "revision": "13cf15d72a5573a947cf38173d7b72b2"
  },
  {
    "url": "assets/js/18.fc06a22e.js",
    "revision": "743e5c76418b848ba8dfe1a4a60cdb2f"
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
    "url": "assets/js/9.c1fc8c1b.js",
    "revision": "d193a403a508e32a4ae7210d05fddf07"
  },
  {
    "url": "assets/js/app.69df47a2.js",
    "revision": "d1b47c7e31eebe9542cc64e05b6f71f3"
  },
  {
    "url": "Event/index.html",
    "revision": "4e3f14eb321b4e44de3821c010a20d22"
  },
  {
    "url": "Event/MessageEvent/index.html",
    "revision": "9407bb1e6cc552bbab5d90fc93c73b62"
  },
  {
    "url": "Event/MetaEvent/index.html",
    "revision": "27a4ecdbdec9616c591d7ca38eddc200"
  },
  {
    "url": "Event/NoticeEvent/index.html",
    "revision": "337140944ccc8c17706447a84c66bb95"
  },
  {
    "url": "Event/RequestEvent/index.html",
    "revision": "a7068dcefe76e9726985230f5ad5c510"
  },
  {
    "url": "Guide/index.html",
    "revision": "89098e5bcce59ff4eefaf1bd0b7f6d76"
  },
  {
    "url": "Guide/QuickStart/index.html",
    "revision": "b4ee7894e85a11e85879488e59e8d36a"
  },
  {
    "url": "index.html",
    "revision": "219e9b33859bc3dfe98f6bdd170015af"
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
    "revision": "f6361466ea487d16a0a1b9a009f3bd03"
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
