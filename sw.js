const CACHE_NAME = 'phu-minh-v1';
const ASSETS = [
  './',
  './index.html', // Tên tệp HTML của bạn
  './manifest.json'
];

// Cài đặt và lưu trữ bộ nhớ đệm
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Phản hồi ngay cả khi ngoại tuyến
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
