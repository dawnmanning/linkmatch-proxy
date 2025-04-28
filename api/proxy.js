export default async function handler(req, res) {
  const url = `https://api.airtable.com${req.url}`;

  const airtableResponse = await fetch(url, {
    method: req.method,
    headers: {
      'Authorization': 'Bearer patU3giw0StF52OLm.a7a6a1351b37a29899ef6cc4f7c43520f480bb0dfbab87719c1b5918b9edc460',
      'Content-Type': 'application/json',
    },
    body: req.method === 'GET' ? undefined : req.body,
  });

  const data = await airtableResponse.json();
  res.status(airtableResponse.status).json(data);
}
