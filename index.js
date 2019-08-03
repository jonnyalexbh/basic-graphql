'use strict'

const { graphql, buildSchema } = require('graphql')

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

// run the query hello
graphql(schema, '{ greeting }', resolvers).then((data) => {
  console.log(data)
})
