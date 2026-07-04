import app from './app.js'
import { config } from './config/index.js'

app.listen(config.port, () => {
  console.log(`EduFlow LMS API is running on port ${config.port}...`)
})
