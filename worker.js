import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', (event) => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    // Add logic to decide whether to serve an asset or run your original Worker code
    let response = await getAssetFromKV(event);

    // 添加 CORS 标头
    response = new Response(response.body, response);
    response.headers.set('Access-Control-Allow-Origin', '*');
    // 如果需要特定的方法（如 GET、POST 等）或标头，也可以添加
    // response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    // response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return response;
  } catch (e) {
    let pathname = new URL(event.request.url).pathname;
    return new Response(`"${pathname}" not found`, {
      status: 404,
      statusText: 'not found',
      headers: {
        // 添加 CORS 标头
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
