import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    return await getAssetFromKV(event, {
      mapRequestToAsset: (req) => {
        const url = new URL(req.url);
        // Serve `index.html` for directory requests
        if (url.pathname.endsWith('/')) {
          return new Request(`${url.origin}${url.pathname}index.html`, req);
        }
        return req;
      }
    });
  } catch (err) {
    return new Response('Not Found', { status: 404 });
  }
}
