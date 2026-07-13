# 🏦 BankSense AI
### AI-Powered Banking Prospect Intelligence & Decision Support Platform

BankSense AI is an intelligent banking decision support platform that helps financial institutions identify high-value loan prospects, assess repayment risk, explain AI decisions, and improve customer targeting using Explainable AI, Gemini AI, and feedback-driven learning.

> Built for AI/ML Hackathons using the MERN Stack + Google Gemini AI.

---

## 🚀 Problem Statement

Banks often spend significant time and resources contacting customers who have a low probability of converting into loan applicants. Existing systems provide customer information but lack:

- Intelligent lead prioritization
- AI-powered decision support
- Explainable recommendations
- Continuous learning from banker decisions
- Compliance-ready audit trails

BankSense AI solves these challenges by providing an intelligent prospect ranking and recommendation platform.

---

# ✨ Features

## 🤖 AI Prospect Scoring
- Intelligent customer ranking
- HOT / WARM / COLD lead classification
- Risk assessment engine
- Recommendation generation

---

## 🧠 Gemini AI Banker Assistant

Ask natural language questions like:

- Why should I call this customer?
- Explain this score.
- What is the repayment risk?
- Suggest the next action.

---

## 📊 AI Explainability

Every AI recommendation includes:

- Income contribution
- Customer intent contribution
- Risk analysis
- Recommendation explanation

---

## 📈 Analytics Dashboard

Real-time banking insights including:

- Total prospects
- HOT / WARM / COLD distribution
- Conversion tracking
- AI impact visualization
- Business performance metrics

---

## 🛡 Compliance & Audit Dashboard

Responsible AI features:

- AI decision logging
- Model version tracking
- Explainability records
- Compliance-ready audit trail

---

## 🔄 Feedback Learning Loop

Bankers can provide feedback:

- Converted
- Follow-up
- Skipped

The platform stores this feedback to improve future recommendations.

---

## 🔐 Authentication

- Banker Registration
- Secure Login
- JWT Authentication
- Protected Routes
- HTTP-only Cookies

---

## 📋 Prospect Management

- Add new prospects
- View AI reports
- Risk analysis
- Banker actions

---

# 🏗 System Architecture

```text
                    React Frontend
                          │
                          │
                     Axios API
                          │
                          │
                Express.js Backend
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        │                 │                 │
   Gemini AI        AI Score Engine    MongoDB Atlas
        │                 │                 │
        └────────────┬────┴─────────────────┘
                     │
             Feedback Learning
                     │
             Analytics Dashboard
                     │
          Compliance & Audit Logs
```

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- Tailwind CSS
- Recharts

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## AI

- Google Gemini API
- Explainable AI
- Recommendation Engine

---

## Authentication

- JWT
- bcrypt
- HTTP-only Cookies

---

## Database

- MongoDB Atlas

---

# 📁 Project Structure

```text
BankSense
│
├── frontend
│   ├── src
│   │   ├── ai
│   │   ├── common
│   │   ├── component
│   │   ├── context
│   │   ├── dashboard
│   │   ├── hooks
│   │   ├── pages
│   │   ├── prospects
│   │   ├── routes
│   │   ├── services
│   │   ├── utils
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── middlewares
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   ├── utils
│   │   ├── app.js
│   │   └── server.js
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/your-username/banksense-ai.git

cd banksense-ai
```

---

## Backend

```bash
cd backend

npm install
```

Create `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_uri

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_gemini_api_key

FRONTEND_URL=http://localhost:5173
```

Run backend

```bash
npm run dev
```

---

## Frontend

```bash
cd frontend

npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Run

```bash
npm run dev
```

---

# 🌐 API Endpoints

## Authentication

```
POST /api/auth/register

POST /api/auth/login

POST /api/auth/logout
```

---

## Prospects

```
GET /api/prospects

POST /api/prospects

GET /api/prospects/:id
```

---

## AI Assistant

```
POST /api/ai/ask
```

---

## Analytics

```
GET /api/analytics
```

---

## Compliance

```
GET /api/compliance/audit
```

---

## Feedback

```
POST /api/feedback

GET /api/feedback
```

---

# 📸 Screenshots

Include screenshots of:

- Landing Page
- Login Page
- Dashboard
- Prospect List
- AI Report
- Gemini Assistant
- Analytics Dashboard
- Compliance Dashboard
- Feedback Learning

---

# 💡 Future Improvements

- ML-based conversion prediction model
- SHAP Explainability
- Voice AI Banker Assistant
- Loan Offer Generator
- OCR for customer documents
- Bulk CSV Prospect Upload
- Role-Based Access Control
- Notification System
- Predictive Customer Lifetime Value
- Docker & Kubernetes Deployment

---

# 👨‍💻 Author

**Sharad Pal**

B.Tech CSE | Full Stack Developer | AI Enthusiast

GitHub: https://github.com/sharadpal8055

LinkedIn: https://www.linkedin.com/in/sharadpal8055/

---

# 📄 License

This project is developed for educational purposes and hackathon participation.
