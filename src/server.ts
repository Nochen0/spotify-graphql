import 'reflect-metadata'
import fastify from 'fastify'
import mercurius from 'mercurius'
import { buildSchema } from 'type-graphql'
import Container from 'typedi'
import { HelloResolver } from './Hello/hello.resolver'

async function main() {
  const app = fastify()
  const schema = await buildSchema({
    resolvers: [HelloResolver],
    container: Container,
  })

  app.register(mercurius, {
    schema,
    ide: true,
  })

  app.listen({ port: 4000 })
}

main()
