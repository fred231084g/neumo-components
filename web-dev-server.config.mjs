import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  rootDir: '.',
  appIndex: 'fixtures/index.html',
  nodeResolve: true,
  preserveSymlinks: true,
  plugins: [esbuildPlugin({ ts: true })],
  middleware: [
    function rewriteModules(context, next) {
      // Set correct MIME types for modules
      const mimeTypes = {
        '.js': 'application/javascript',
        '.mjs': 'application/javascript',
        '.css': 'text/css',
        '.html': 'text/html',
      };

      if (context.url.includes('/node_modules/')) {
        const ext = context.url.split('.').pop();
        if (mimeTypes[`.${ext}`]) {
          context.response.type = mimeTypes[`.${ext}`];
        }
      }

      // Add preload headers for critical resources
      if (context.url.endsWith('.js') || context.url.endsWith('.mjs')) {
        context.response.set('Link', `<${context.url}>; rel=modulepreload`);
      }
      if (context.url.endsWith('.css')) {
        context.response.set('Link', `<${context.url}>; rel=preload; as=style`);
      }

      return next();
    }
  ],
  mimeTypes: {
    '**/*.js': 'application/javascript',
    '**/*.mjs': 'application/javascript',
    '**/*.ts': 'application/javascript'
  }
};