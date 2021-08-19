const functions = require('firebase-functions');
import fetch from 'node-fetch';

exports.loginUser = functions.https.onRequest(async (req: Request, res: Response) => {
  const url = 'http://api.nbp.pl/api/exchangerates/rates/A/USD'; // URL to send the request to
  const externalRes = await fetch(url);


  // @ts-ignore
  res.status(200).send(`<!doctype html>
    <head>
      <title>Time</title>
    </head>
    <body>
      ${externalRes.body}
    </body>
  </html>`);
});
