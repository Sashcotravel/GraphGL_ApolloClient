const {UserList, MovieList} =  require("../FakeData");
const _ = require("lodash")

const resolvers = {
    Query: {
        users: () => {
            if(UserList) return {users: UserList}

            return { message: "There was an error" }
        },
        user(parent, args, context, info) {
            const id = args.id
            const user = _.find(UserList, { id: Number(id) })
            return user;
        },
        movies: () => {

            return MovieList
        },
        movie(parent, args) {
            const name = args.name
            const movie = _.find(MovieList, { name })
            return movie;
        },
    },
    User: {
        favoriteMovie: () => {
            return _.filter(MovieList, (movie) =>
                movie.yearOfPublication >= 2020 && movie.yearOfPublication <= 2024)
        }
    },
    Mutation : {
        createUser: (parent, args) => {
            const user = args.input
            const lastId = UserList[UserList.length -1].id
            user.id = lastId + 1
            UserList.push(user)
            return user
        },
        updateUsername: (parent, args) => {
            const { id, username } = args.input
            let userUpdated
            UserList.forEach(user => {
                if(Number(user.id) === Number(id)){
                    user.username = username
                    userUpdated = user
                }
            })
            return userUpdated
        },
        deleteUser: (parent, args) => {
            const id = args.id
            _.remove(UserList, (user) => user.id === Number(id))
            return null
        }
    },
    UsersResult: {
        __resolveType(obj) {
            if (obj.users) {
                return "UsersSuccessfulResult"
            }
            if (obj.message) {
                return "UsersErrorResult"
            }

            return null
        }
    }
}

module.exports = { resolvers }