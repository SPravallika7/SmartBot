# 🤖 SmartBot – AI Chat Application

SmartBot is a full-stack AI chat application with login/signup functionality and a modern UI.  
It uses a Node.js backend with Google Gemini AI and a clean HTML/CSS/JS frontend.

---

## ✨ Features

- 🔐 Login & Signup (frontend auth demo)
- 💬 AI Chat Interface
- 🎨 Modern, professional UI
- ⚡ Fast responses
- 🌍 Ready for deployment
- 🔒 Secure environment variables

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js
- Google Gemini AI
- dotenv

---

## 📁 Project Structure

chatbot/
│
├── client/
│ ├── index.html
│ ├── chat.html
│ ├── style.css
│ ├── logo.png
│ └── js/
│ ├── auth.js
│ └── chat.js
│
├── server/
│ ├── server.js
│ ├── package.json
│ └── package-lock.json
│
├── .gitignore
└── README.md

---

##  How to Run Locally

### 1️⃣ Clone Repository
```bash
git clone https://github.com/SPravallika7/YOUR_REPO_NAME.git
cd chatbot
cd server
#Running server
node server.js

3️⃣ Frontend Setup

Open this file directly in your browser:

client/index.html


After login/signup, you will be redirected to:

chat.html

🌐 API Endpoint
POST /ask

Request

{
  "prompt": "What is Artificial Intelligence?"
}


Response

{
  "reply": "AI is the simulation of human intelligence in machines..."
}

🌍 Deployment
Frontend (GitHub Pages)

Go to GitHub → Settings → Pages

Select:

Branch: main

Folder: /client

Save and wait 1–2 minutes

Backend (Render / Railway / Cyclic)

Root directory: server




Start command:
node server.js


Add environment variable:

GEMINI_API_KEY

🔐 Security

.env is excluded using .gitignore

API keys are never pushed to GitHub

node_modules is ignored

Safe for public repositories

🧪 Future Improvements

JWT authentication

MongoDB user storage

Chat history persistence

Dark mode

Typing indicators

File & image support

👩‍💻 Author

Pravallika
B.Tech | Web Developer
Passionate about full-stack development & UI design

⭐ Support

If you like this project:

⭐ Star the repo

🍴 Fork it

🧠 Improve it


---

