# Title
Build Authentication and Authorization in Express


## Introduction

JWT authentication is a way of authenticating users using a JSON web token. It is a process whereby the server issues a token to the user that contains information about the user, such as their identity and the resources they are allowed to access. The user then uses the token to authenticate themselves when they attempt to access a protected resource.

To complete this tutorial, you should learn the basics of Node.js, MongoDB, and JSON web tokens. You should also understand the concept of authentication, authorization, and security.

## Assignment

We will be following [Bezkoder Authentication tutorial](https://www.bezkoder.com/node-js-mongodb-auth-jwt/) and will be adding authentication and authorization in our previous project. We will be having our tutorials routes from the previous project. 
We will be adding roles like:
- creator - has access to all routes
- viewer - has access to only get routes
- editor - has access to get and update routes

## Releases

The steps to complete this tutorial include:
1. Use the existing project from the last assignment
2. Learn about JSON web token
3. Design a user authentication system
4. Implement the authentication process using Node.js and MongoDB
5. Secure the authentication process using JWT

Additional steps to do include:
1. Setting up user roles and permissions
2. Implementing a logout route
3. Implementing a password reset route
4. Adding social media login
