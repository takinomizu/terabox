const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
    // const q = req.params
    // console.log(q.id)
    const { name } = req.params
    
    if(name == 'dog') {
        res.json({'sound': '멍멍'})
    } else if(name == 'cat') {
        res.json({'sound': '야옹'})
    } else if(name == 'pig') {
        res.json({'sound': '꿀꿀'})
    } else {
        res.json({'sound': 'unknown'})
    }

    res.json({'userid': q.name})
})

app.get('/cat', (req, res) => {
  res.send('고양이')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})