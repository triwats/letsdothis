import 'dotenv/config'
import express from 'express'

// initialise express

const app = express()

app.get('/', (req, res) => {
  return res.send('Invalid Path - see /query, /startlist, /create')
});
