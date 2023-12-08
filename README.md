# Dokumentasi API GreenWaste


## Deskripsi
API greenwaste ini memungkinkan pengguna untuk membuat, mengambil, memperbarui, dan menghapus list-list pertanyaan beserta login dan register user.

## ERD
![erd](https://github.com/FS-16/greenwaste-server/assets/73381115/824f4666-cf7b-4543-ab7f-daed5413316a)





## TechStack and library
- Express.js
- bcryptjs
- cookie-parser
- cors
- dotenv
- jsonwebtoken
- mongoose
- MongoDB (Database)


## Endpoint Utama
Base URL: https://api-greenwaste.vercel.app/


## Endpoints
No      | /api/question          |      /api/users   |  /api/auth          |
|:-----:|------------------------|-------------------|---------------------|
|1      | GET /questions         | GET /users        | POST /auth/register |
|2      | GET /questions/:id     | GET /users/:id    | POST /auth/login    |
|3      | POST /questions        | POST /users       |                     |
|4      | PATCH /questions/:id   | PATCH /users/:id  |                     |
|5      | DELETE /questions/:id  | DELETE /users/:id |                     |


## Jump to

  

<br>

## /api/

<hr>
