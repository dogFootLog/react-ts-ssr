import express from 'express';
import path from 'path';
import http from 'http';
import fs from 'fs';

const app = express();

app.use('*', (req, res) => {
  const html = path.join(__dirname, '../build, index.html');
  const htmlData = fs.readFileSync(html).toString();

  res.send(htmlData);

  //const ReactApp = ReactDOMServer.renderToString(React.createElement);
  //const renderedHtml = htmlData.replace('{{SSR}}', ReactApp);
  //res.status(200).send(renderedHtml);
});

const server = http.createServer();

server.listen(3000);
