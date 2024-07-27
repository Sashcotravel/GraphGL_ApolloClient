const { ApolloServer } = require('apollo-server');
const {resolvers} = require("./schema/resolvers");
const {typeDefs} = require("./schema/type-defs");
// const { PrismaClient } = require("@prisma/client")
// const fs = require('fs');
// const path = require('path');
// https://www.youtube.com/watch?v=16bHGKe1QqY&list=PLpPqplz6dKxXICtNgHY1tiCPau_AwWAJU&index=1


const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: {
  //   prisma
  // }
})

server
    .listen()
    .then(({ url }) =>
        console.log(`Server is running on ${url}`)
    );


// const prisma = new PrismaClient()

// const resolvers = {
//   Query: {
//     info: () => `This is the API of a Hackernews Clone`,
//     car: () => 'Jeep, 90x, blue',
//     phone: () => 1990,
//     feed: (parent, args, context) => {
//         return context.prisma.link.findMany()
//     }
//   },

//   Link: {
//     id: (parent) => parent.id,
//     description: (parent) =>  parent.description + ' LOL'
//   },

//   Mutation: {
//     post: (parent, args, context) => {
//         const newLink = context.prisma.link.create({
//             data: {
//               url: args.url,
//               description: args.description,
//             },
//           })
//           return newLink
//     }
//   }
// }