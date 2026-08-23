import http from 'node:http';

const host = process.env.APP_URL || 'http://localhost:3000';

const check = (url) => new Promise((resolve, reject) => {
  const req = http.get(url, (res) => {
    const status = res.statusCode ?? 0;
    if (status >= 200 && status < 500) {
      resolve(status);
      return;
    }
    reject(new Error(`Unexpected status ${status}`));
    res.resume();
  });

  req.on('error', reject);
  req.setTimeout(5000, () => {
    req.destroy(new Error('Timeout'));
  });
});

try {
  const status = await check(`${host}/api/health`);
  console.log(`Smoke test OK: /api/health -> ${status}`);
  process.exit(0);
} catch (error) {
  console.error('Smoke test failed');
  console.error(error);
  process.exit(1);
}
