import app from './app';

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
  console.log(
    `App is running at http://${app.get('domain')}:${app.get(
      'port'
    )} in ${app.get('env')} mode 🚀`
  );
});

export default server;
