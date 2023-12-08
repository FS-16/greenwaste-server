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


## /api/questions

### 1. GET /questions
<details open>
  <summary><b>Mendapatkan Semua list question : </b></summary>

 
   - Metode : GET
   - Endpoint : /questions
   - Deskripsi : Mendapatkan semua list question yang tersedia.

**Contoh HTTP Request :**
```
GET https://api-greenwaste.vercel.app/api/questions
```

**Contoh Respons :**
```json
Status: 200 OK ✔️
[
  {
      "_id": "6565e77e931157a4c65bf9ca",
      "title": "Bagaimana membuat limbah rumah tangga menjadi produk yang berkualitas ?",
      "author": "Budi",
      "description": "Apa langkah-langkah yang dapat diambil untuk mengubah limbah elektronik rumah tangga menjadi produk elektronik yang bisa digunakan kembali atau didaur ulang dengan efisien?",
      "category": [
        "limbah Anorganik",
        "limbah Organik"
      ],
      "userRef": "6565e6a5931157a4c65bf9c3",
      "comments": [],
      "date": "2023-11-28T13:13:34.292Z",
      "createdAt": "2023-11-28T13:13:34.293Z",
      "updatedAt": "2023-11-28T13:13:34.293Z",
      "__v": 0
  },
]
```
</details>
<hr>


