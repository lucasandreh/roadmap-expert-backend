import 'dotenv/config'
import { fastify } from 'fastify'
import dbConnect from 'typeorm-fastify-plugin'

const app = fastify()

app.register(dbConnect, {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
})

app.listen({ port: Number(process.env.APP_PORT) || 3000 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log(`Server listening at ${address}`)
})