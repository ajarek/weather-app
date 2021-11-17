const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(require('./routes/weather'))

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})