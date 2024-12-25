import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  rootDir: '.',
  appIndex: 'fixtures/index.html',
  nodeResolve: true,
  preserveSymlinks: true,
  plugins: [esbuildPlugin({ ts: true })],
  middleware: [
    function rewriteNodeModules(context, next) {
      const mimeTypes = {
        '.js': 'application/javascript',
        '.mjs': 'application/javascript',
        '.css': 'text/css',
        '.html': 'text/html',
      };

      // Set correct MIME type for module files
      if (context.url.includes('/node_modules/')) {
        const ext = context.url.split('.').pop();
        if (mimeTypes[`.${ext}`]) {
          context.response.type = mimeTypes[`.${ext}`];
        }
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