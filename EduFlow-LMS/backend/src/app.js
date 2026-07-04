import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_req, res) => {
  res.send('EduFlow LMS API is running...')
})

export default app
