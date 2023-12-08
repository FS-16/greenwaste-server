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
- [/api/todos](#apiquestions)
  - [1. GET /questions](#1-get-questions)
  - [2. GET /questions/:id](#2-get-questionid)
  - [3. POST /questions](#3-post-questions)
  - [4. PATCH /questions/:id](#4-patch-questionid)
  - [5. DELETE /questions/:id](#5-delete-questionid)
  

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


### 2. GET /questions/:id
<details open>
	<summary><b>Mendapatkan question berdasarkan id : </b></summary>

   - Metode : GET
   - Endpoint : /questions/:id
   - Deskripsi : Mendapatkan question tertentu berdasarkan id.
 
**Contoh HTTP Request :**
```
GET https://api-greenwaste.vercel.app/api/questions/6565e77e931157a4c65bf9ca
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

### 3. POST /questions
<details open>
	<summary><b>Menambahkan question : </b></summary>
	
   - Metode : POST
   - Endpoint : /questions
   - Deskripsi : Add atau menambahkan question baru.

**Contoh HTTP Request :**
```
POST https://api-todo-koreoxy.vercel.app/api/questions
Content-Type: application/json
{
  "title": "Question Baru",
  "author": username,
  "description": "description baru",
   "category": [
        "limbah Anorganik",
        "limbah Organik"
    ],
  "userRef": "6565e6a5931157a4c65bf9c3",
  "comments": [],
}
```

> [!NOTE]
> data `"userRef"` dan  `"comments"` optional, data tersebut boleh diisi dan boleh tidak.

<br>

**Contoh Respons :**
```json
Status: 201 Created ✔️
[
  {
      "title": "1",
      "author": "1",
      "description": "1",
      "category": [
          "limbah Anorganik",
          "limbah Organik"
      ],
      "comments": [],
      "userRef": "6565e6a5931157a4c65bf9c3",
      "_id": "656efccaf382c26f55049264",
      "date": "2023-12-05T10:34:50.661Z",
      "createdAt": "2023-12-05T10:34:50.661Z",
      "updatedAt": "2023-12-05T10:34:50.661Z",
      "__v": 0
  }
]
```
</details>

<hr>


### 4. PATCH /questions/:id
<details open>
	<summary><b>Update question : </b></summary>
	
   - Metode : PATCH
   - Endpoint : /questions/:id
   - Deskripsi : Update atau memperbarui question.

**Contoh HTTP Request :**
```
PATCH https://api-greenwaste.vercel.app/api/questions/6565e77e931157a4c65bf9ca
Content-Type: application/json
{
  "title": "Update question title",
  "description": "update description question",
}
```

**Contoh Respons :**
```json
Status: 200 OK ✔️
{
  "acknowledged": true,
  "modifiedCount": 1,
  "upsertedId": null,
  "upsertedCount": 0,
  "matchedCount": 1
}
```
</details>


<hr>


### 5. DELETE /questions/:id
<details open>
	<summary><b>Delete question : </b></summary>
	
   - Metode : DELETE
   - Endpoint : /questions/:id
   - Deskripsi : Delete atau menghapus question.

**Contoh HTTP Request :**
```
DELETE https://api-greenwaste.vercel.app/api/questions/6565e77e931157a4c65bf9ca
```

**Contoh Respons :**
```json
Status: 200 OK ✔️
{
  "acknowledged": true,
  "deletedCount": 1
}
```
</details>


<hr>
