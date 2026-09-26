# NAURA EVENTS & TRAVEL CO. — Web Application Platform

Complete, production-ready corporate web platform for **Naura Events & Travel Co.**.

---

## 📁 Package Contents

This deployment package contains the entire codebase ready for Firebase Hosting and Vite React production build:

- **Source Code (`/src`)**: Complete React application component hierarchy and Firebase SDK setup.
- **Firebase Config (`firebase.json`, `firestore.rules`)**: Public routing rewrites and security rules for client enquiries.
- **Tailwind Setup (`tailwind.config.js`, `postcss.config.js`)**: Full brand design palette (Deep Teal `#0B5F5B`, Warm Gold `#C8A45D`, Navy `#17212B`).
- **Dependencies (`package.json`)**: Pre-configured with React 18, Vite, Lucide Icons, and Firebase Web SDK.

---

## 🚀 Simple Deployment Instructions (Non-Technical)

### Step 1: Install Node.js
If you haven't installed Node.js, download it from [https://nodejs.org](https://nodejs.org) (LTS version).

### Step 2: Extract & Install Dependencies
1. Unzip `naura-events-travel-app.zip` on your computer.
2. Open your terminal or Command Prompt inside the extracted folder.
3. Run:
   ```bash
   npm install
   ```

### Step 3: Connect Your Firebase Project
1. Copy `.env.example` to a new file named `.env`.
2. Open `.env` and fill in your Firebase Web App credentials from your [Firebase Console](https://console.firebase.google.com).

### Step 4: Deploy to Firebase Hosting
Run this single command:
```bash
npm run deploy
```
This will automatically build your app and deploy it to your live Firebase web URL.

---

## 🌐 Connecting Custom Domain (`nauraevents.in`)

1. Go to **Firebase Console** -> **Hosting** -> **Add Custom Domain**.
2. Type `nauraevents.in`.
3. Copy the two **A Records** (IP addresses) provided by Firebase.
4. Go to your domain registrar (GoDaddy, Hostinger, Namecheap) and paste the IP addresses under DNS Settings.
