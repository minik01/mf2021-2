const functions = require('firebase-functions');
import fetch from 'node-fetch';

exports.loginUser = functions.https.onRequest(async (req: Request, res: Response) => {
  const url = 'http://api.nbp.pl/api/exchangerates/rates/A/USD'; // URL to send the request to
  fetch(url).then(value => {
    // @ts-ignore
    res.status(200).send(`<!doctype html>
    <head>
      <title>Time</title>
    </head>
    <body>
      ${JSON.stringify(value)}
      ${JSON.stringify(value.body)}
      ${JSON.stringify(value.json())}
      ${JSON.stringify(value.text())}
    </body>
  </html>`);
  });
});
