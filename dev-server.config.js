export default {
    nodeResolve: true,
    appIndex: 'fixtures/index.html',
    rootDir: '.',
    preserveSymlinks: true,
    middleware: [
      function rewriteNodeModules(context, next) {
        if (context.url.startsWith('/node_modules/')) {
          context.url = context.url.replace('/node_modules/', '/');
        }
        return next();
      }
    ]
  };