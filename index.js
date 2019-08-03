'use strict'

const { graphql, buildSchema } = require('graphql')

// defining the scheme
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// run the query hello
graphql(schema, '{ hello }').then((data) => {
  console.log(data)
})
