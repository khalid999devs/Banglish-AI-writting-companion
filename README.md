# Banglish-AI Writing Companion

This project is a full-stack web application built with a **Django backend** and a **React frontend**. It integrates various APIs, including **Clerk**, **OpenAI**, and **Hugging Face**, to deliver advanced functionality. Below, you'll find the project folder structure, setup guide, and links to the system design and user flow.

---

![Working Demo](./working.gif)

---

## UI/UX design (Figma)

[https://www.figma.com/design/hWLVs3KYPOENTLdj5OCYaP/Banglish-AI-writing-companion?node-id=0-1&t=pJjlyHPqOeYOEFYZ-1](https://www.figma.com/design/hWLVs3KYPOENTLdj5OCYaP/Banglish-AI-writing-companion?node-id=0-1&t=pJjlyHPqOeYOEFYZ-1)

---

## Folder Structure

### Backend (Django)

```
server/
├── bitfest_hackathon/
├── my_app/
│   ├── __pycache__/
│   ├── middlewares/
│   ├── migrations/
│   ├── models/
│   ├── serializers/
│   ├── uploads/
│   ├── views/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── tests.py
│   ├── urls.py
├── .env
├── .gitignore
├── fine_tune_model.py
├── manage.py
├── requirements.txt
```

### Frontend (React + Vite)

```
client/
├── src/
│   ├── assets/
│   ├── axios/
│   ├── components/
│   ├── Constants/
│   ├── hooks/
│   ├── layout/
│   ├── lib/
│   ├── pages/
│   ├── utils/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .env.local
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
```

---

## Setup Guide

### Prerequisites

1. **Node.js** and **npm** (for the frontend)
2. **Python 3.8+** (for the backend)
3. **pip** and **virtualenv** (for Python package management)

### Environment Variables

#### Backend (.env)

```plaintext
SECRET_KEY=your-django-secret-key
DEBUG=True
ALLOWED_HOSTS=*
OPENAI_API_KEY=your-openai-api-key
HUGGINGFACE_API_KEY=your-huggingface-api-key
```

#### Frontend (.env.local)

```plaintext
VITE_CLERK_API_KEY=your-clerk-api-key
VITE_OPENAI_API_KEY=your-openai-api-key
```

---

### Backend Setup

1. Navigate to the `server` directory:

   ```bash
   cd server
   ```

2. Create a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate # For Windows, use `venv\Scripts\activate`
   ```

3. Install the dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Apply migrations:

   ```bash
   python manage.py migrate
   ```

5. Start the development server:
   ```bash
   python manage.py runserver
   ```

---

### Frontend Setup

1. Navigate to the `client` directory:

   ```bash
   cd client
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

---

### Running the Application

1. Ensure the **backend** is running at `http://127.0.0.1:8000/`.
2. Start the **frontend** and access it at the URL provided by Vite (typically `http://localhost:5173/`).

---

### Key Features

- **User Authentication** via Clerk API.
- **AI-Powered Features** using OpenAI and Hugging Face APIs.
- **Django Admin Panel** for backend management.
- **Responsive UI** built with React.

---

## System Design and User Flow

- **System Design**: [View Diagram](https://lucid.app/lucidchart/d6b8a025-e9a9-41b7-a11f-0c94383148b0/edit?viewport_loc=1595%2C937%2C1754%2C766%2C0_0&invitationId=inv_6ad2dab6-ec70-48f1-935b-f932a5137c84)
- **User Flow**: [View Diagram](https://www.figma.com/board/2r3VRtmcSu0uTHRGysZJig/Bitfest_hackathon_final?node-id=0-1&t=kpfCQblxd4bXqeDo-1)

---

### Notes

- Replace placeholder API keys in `.env` and `.env.local` with your actual keys.
- Update `ALLOWED_HOSTS` in the backend `.env` file for production deployment.

---

## License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this software under the terms of the MIT License.  
However, this software is provided **"as is"**, without any warranties or guarantees.

See the [LICENSE](LICENSE) file for full details.
