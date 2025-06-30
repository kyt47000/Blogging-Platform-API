# 📚 Blogging Platform API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Framework-blue)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Live](https://img.shields.io/badge/Deployed-Render-success?logo=render)

This is a simple **RESTful API** for a personal blogging platform, built with **Node.js**, **Express**, and **MongoDB Atlas**.  
It’s inspired by the [roadmap.sh blogging platform project](https://roadmap.sh/projects/blogging-platform-api).

## 🚀 Live Demo

✅ **API is deployed on Render:**  
👉 [https://blogging-platform-api-3lwo.onrender.com](https://blogging-platform-api-3lwo.onrender.com)

## 🎯 Goals

This project helps you:

- Understand **RESTful APIs** and best practices
- Use common HTTP methods: **GET**, **POST**, **PUT**, **DELETE**
- Handle **status codes** and **error handling**
- Perform **CRUD operations**
- Work with **MongoDB Atlas** using Mongoose
- Test with **Postman**

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **Postman**
- **Render** for deployment

## 📌 API Endpoints

### ✅ Create Blog Post

```http
POST /create
```

**Request Body:**

```json
{
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"]
}
```

* **201 Created** — Returns the created post
* **400 Bad Request** — Validation failed

---

### ✅ Update Blog Post

```http
PUT /posts/:id
```

**Request Body:**

```json
{
  "title": "Updated Title",
  "content": "Updated content.",
  "category": "Technology",
  "tags": ["Updated", "Tag"]
}
```

* **200 OK** — Updated post returned
* **400 Bad Request** — Validation failed
* **404 Not Found** — Post not found

---

### ✅ Delete Blog Post

```http
DELETE /posts/:id
```

* **204 No Content** — Successfully deleted
* **404 Not Found** — Post not found

---

### ✅ Get Single Blog Post

```http
GET /posts/:id
```

* **200 OK** — Returns the post
* **404 Not Found** — Post not found

---

### ✅ Get All Blog Posts (with search)

```http
GET /posts
```

**Optional search by term:**

```http
GET /posts?term=tech
```

* Searches `title`, `content`, or `category` (case-insensitive)
* **200 OK** — Array of posts

## ✅ Example Response

```json
{
  "id": 1,
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"],
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:00:00Z"
}
```


## 🛠️ How to Run Locally

```bash
# Clone the repo
git clone https://github.com/kyt47000/Blogging-Platform-API.git

# Install dependencies
npm install

# Add your MongoDB URI to a .env file
MONGO_URL="your-mongodb-uri"

# Start the server
node index.js
```

Use **Postman** to test your endpoints!

## 🤝 Contributing

We welcome contributions! Please fork the repository and submit a pull request.

## 📚 Credit

This project is based on the [roadmap.sh Blogging Platform API](https://roadmap.sh/projects/blogging-platform-api).

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for details.

## 💡 Author

**Yash** — [GitHub](https://github.com/kyt47000)

## ❓ FAQ

**Q: How can I contribute to this project?**  
A: We welcome contributions! Please fork the repository and submit a pull request.

**Q: How do I run this project locally?**  
A: Follow the instructions in the 'How to Run Locally' section.

**Happy Blogging! 🚀**
