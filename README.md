# 🦸‍♂️ Hero Apps – Modern App Explorer Platform

Hero Apps is a modern, responsive, and interactive web application designed to explore, search, filter, install, and manage mobile applications.  
Built with React, Tailwind CSS, and React Router, this project includes dynamic pages, JSON-based app data, installation management via localStorage, and smooth UI interactions with loading animations.

---

## 🌐 Live Demo  
**Live Project:** https://hero-apps-a08.netlify.app/  
**GitHub Repository:** https://github.com/mdtajrianrashid/Hero-Apps-A08  

---

## 🧩 Project Overview

Hero Apps is a web-based platform built to display and manage a collection of mobile applications using dynamic data.  
Users can browse all apps, search in real-time, view detailed app information, analyze ratings through Recharts, and install/uninstall apps using localStorage.

This project is developed based on the *Hero IO – Assignment 008* specifications.

---

## 🛠️ Technologies Used

### **Frontend**
- React  
- React Router  
- Tailwind CSS  
- DaisyUI  
- Recharts  
- Framer Motion  

### **State / Logic**
- React Hooks  
- LocalStorage  

### **Development & Tools**
- Vite or Create React App  
- ESLint  
- Prettier  

---

## ✨ Main Features

### **1. Home Page**
- Banner with heading and two store buttons (App Store & Play Store)
- States section with 3 custom statistic cards
- Top Apps section showing 8 highlighted apps
- “Show All” button navigates to All Apps page

### **2. All Apps Page**
- Title + Subtitle  
- Total app count  
- Live search with real-time, case-insensitive filtering  
- “No App Found” message when no results  
- App cards displaying:
  - Title  
  - Image  
  - Downloads  
  - Average rating  

### **3. App Details Page**
- App image preview  
- Complete app information (reviews, downloads, size, etc.)  
- Install button:
  - Changes to “Installed”
  - Becomes disabled
  - Shows a success toast  
- Responsive Recharts rating graph  
- Full description section  

### **4. Installation Management**
- Stores installed apps in `localStorage`  
- Dedicated “My Installation” page  
- Uninstall Feature:
  - Removes from localStorage
  - Removes from UI
  - Shows toast message  

### **5. Sorting System**
- Sort by Downloads:
  - High → Low  
  - Low → High  

### **6. Error & Loading**
- Custom error (404) page  
- Loading animation during:
  - Page navigation  
  - Search  

### **7. Routing & Deployment**
- Fully functional route reloads after deployment  
- Works on Cloudflare / Netlify / Vercel  

---

## 📦 Dependencies

```json```
"dependencies": {
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x",
  "tailwindcss": "^3.x",
  "daisyui": "^4.x",
  "recharts": "^2.x",
  "framer-motion": "^10.x",
  "react-hot-toast": "^2.x"
}

## 🏃 Running the Project Locally

Follow these steps to run Hero Apps on your local machine:

1. **Clone the repository**

```git clone https://github.com/mdtajrianrashid/Hero-Apps-A08.git```
```cd Hero-Apps-A08```

2. **Install dependencies**

```npm install```

3. **Run the development server**

```npm run dev```

4. Open the project in your browser

The app will usually run at:

```http://localhost:5173/```