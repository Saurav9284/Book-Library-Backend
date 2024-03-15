const typeDefs = `
type User {
    id: ID!
    email: String!
    name: String
    password: String
    role: String!
    books: [Book] 
    accessToken: String
}

type Book {
    id: ID!
    title: String!
    author: String!
    price: Float! 
}

type Query {
    users: [User]
    user(id: ID!): User

    books: [Book] 
    book(id: ID!): Book 
}

type Mutation {
    createUser(email: String!, name: String!, password: String!, role: String!): User
    loginUser(email: String!, password: String!): User
    passwordChange(id: ID!, oldPassword: String, newPassword: String): User
    deleteUser(id: ID!): User
    Borrowbook(userId: ID!, courseId: ID!): User

    createBook(title: String!, author: String!, genre: String!, price: Float!): Book # Changed to Float or Int
    updateBook(id: ID!, name: String, description: String, prerequisites: String): Book
    deleteBook(id: ID!): Book
}`;

module.exports = typeDefs;
