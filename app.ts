import express, {type Express} from 'express'
import path  from "path"
const app: Express = express()
const port = 3000
//const __dirname = path.resolve()

//app.use(express.static(path.join(__dirname, "../public")))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})