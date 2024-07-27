// const UserList = null
const UserList = [
    {
        id: 1,
        name: "John",
        username: "john",
        age: 20,
        nationality: "Canada",
        friends: [
            {
                id: 2,
                name: "John2",
                username: "john2",
                age: 202,
                nationality: "Canada2",
            },
        ],
        favoriteMovie: [
            {
                id: 1,
                name: "Avengers Endgame",
                yearOfPublication: 2019,
                isInTheaters: true
            },
            {
                id: 2,
                name: "Avengers Endgame - 2",
                yearOfPublication: 2020,
                isInTheaters: false
            },
        ]
    },
    {
        id: 2,
        name: "John2",
        username: "john2",
        age: 202,
        nationality: "Canada2",
        favoriteMovie: [
            {
                id: 2,
                name: "Avengers Endgame - 2",
                yearOfPublication: 2020,
                isInTheaters: false
            },
        ]
    },
    {
        id: 3,
        name: "John3",
        username: "john3",
        age: 203,
        nationality: "Canada3",
        favoriteMovie: [
            {
                id: 1,
                name: "Avengers Endgame",
                yearOfPublication: 2019,
                isInTheaters: true
            },
        ]
    },
    {
        id: 4,
        name: "John4",
        username: "john4",
        age: 204,
        nationality: "Canada4",
    },
    {
        id: 5,
        name: "John5",
        username: "john5",
        age: 205,
        nationality: "Canada5",
    },
]

const MovieList = [
    {
        id: 1,
        name: "Avengers Endgame",
        yearOfPublication: 2019,
        isInTheaters: true
    },
    {
        id: 2,
        name: "Avengers Endgame - 2",
        yearOfPublication: 2020,
        isInTheaters: false
    },
    {
        id: 3,
        name: "Avengers Endgame - 3",
        yearOfPublication: 2012,
        isInTheaters: true
    },
    {
        id: 4,
        name: "Avengers Endgame - 4",
        yearOfPublication: 2022,
        isInTheaters: false
    },
    {
        id: 5,
        name: "Avengers Endgame - 5",
        yearOfPublication: 2023,
        isInTheaters: true
    },
]

module.exports = { UserList, MovieList }