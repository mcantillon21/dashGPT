export default async function (req, res) {
  console.log('REQ BODY')
  console.log(req.body)
  const response = await fetch('https://3ee4-24-23-209-109.ngrok.io', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      //   'X-Api-Key': process.env.LCC_TOKEN,
    },
    body: JSON.stringify({
      question: req.body.question,
      history: req.body.history,
    }),
  })

  const data = await response.json()

  res.status(200).json({ result: data })
}
