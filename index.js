'use strict'

const { graphql, buildSchema } = require('graphql')
const express = require('express')
const gqlMiddleware = require('express-graphql')

const app = express()
const port = process.env.port || 3000

// defining the scheme
const schema = buildSchema(`
  type Query {
    hello: String,
    greeting: String
  }
`)

// configure the resolvers
const resolvers = {
  hello: () => {
    return 'Hello World'
  },
  greeting: () => {
    return 'Hello everyone'
  }
}

app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`);
})
