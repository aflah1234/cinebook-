# 🔧 CineBook Configuration Guide

## 📋 Complete Setup Instructions

### **🚀 Backend Configuration (Render/Railway)**

#### **1. Environment Variables for Backend:**

Copy these to your hosting platform (Render/Railway):

```env
# Server Configuration
PORT=10000
NODE_ENV=production

# Frontend URL (update after frontend deployment)
FRONTEND_URL=https://your-frontend-domain.netlify.app

# Database (MongoDB Atlas)
MONGO_URI=mongodb+srv://your-username:your-password@cluster0.xxxxx.mongodb.net/cinebook

# JWT Secret (generate a strong secret)
JWT_SECRET=your_super_long_random_jwt_secret_for_production_make_it_at_least_32_characters

# Razorpay (get from razorpay.com)
RAZORPAY_KEY_ID=rzp_test_your_actual_key_id
RAZORPAY_KEY_SECRET=rzp_test_your_actual_key_secret
RAZORPAY_MODE=test

# Email (Gmail App Password)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-digit-gmail-app-password

# Cloudinary (get from cloudinary.com)
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Production Settings
SKIP_OTP_IN_DEV=false
SKIP_PAYMENT_IN_DEV=false
SKIP_EMAIL_ON_DEV=false
```

#### **2. Backend Deployment Steps:**

**For Render:**
1. Go to [render.com](https://render.com)
2. New Web Service → Connect GitHub: `aflah1234/cinebook-`
3. Settings:
   - **Name**: `cinebook-backend`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Add all environment variables above
5. Deploy and copy the URL: `https://cinebook-backend-xyz.onrender.com`

**For Railway:**
1. Go to [railway.app](https://railway.app)
2. Deploy from GitHub: `aflah1234/cinebook-`
3. Add environment variables
4. Deploy and copy the URL

---

### **🌐 Frontend Configuration (Netlify/Vercel)**

#### **1. Environment Variables for Frontend:**

Copy these to your hosting platform:

```env
# Backend API URL (use your actual backend URL)
VITE_API_URL=https://your-backend-domain.onrender.com

# Razorpay (same key as backend)
VITE_RAZORPAY_KEY_ID=rzp_test_your_actual_key_id

# Production Settings
VITE_SKIP_RAZORPAY=false
VITE_FORCE_MOCK_PAYMENT=false
```

#### **2. Frontend Deployment Steps:**

**For Netlify:**
1. Go to [netlify.com](https://netlify.com)
2. New site from Git → Connect GitHub: `aflah1234/cinebook`
3. Settings are auto-configured via `netlify.toml`
4. Add environment variables above
5. Deploy and copy the URL: `https://amazing-name-123456.netlify.app`

**For Vercel:**
1. Go to [vercel.com](https://vercel.com)
2. Import Project → GitHub: `aflah1234/cinebook`
3. Framework: **Vite**
4. Add environment variables
5. Deploy

---

### **🔗 Connect Backend and Frontend**

#### **Step 1: Update Backend with Frontend URL**
1. Go to your backend hosting platform (Render/Railway)
2. Update environment variable:
   ```
   FRONTEND_URL=https://your-actual-frontend-url.netlify.app
   ```
3. Redeploy backend

#### **Step 2: Update Frontend with Backend URL**
1. Go to your frontend hosting platform (Netlify/Vercel)
2. Update environment variable:
   ```
   VITE_API_URL=https://your-actual-backend-url.onrender.com
   ```
3. Redeploy frontend

---

### **🛠 Required External Services**

#### **1. MongoDB Atlas (Database)**
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create free cluster
3. Create database user
4. Whitelist IP: `0.0.0.0/0` (allow all)
5. Get connection string: `mongodb+srv://user:pass@cluster.mongodb.net/cinebook`

#### **2. Gmail App Password (Email)**
1. Enable 2-factor authentication on Gmail
2. Go to Google Account → Security → App passwords
3. Generate app password (16 digits)
4. Use as `EMAIL_PASS`

#### **3. Razorpay (Payments)**
1. Go to [razorpay.com](https://razorpay.com)
2. Create account
3. Get test API keys: `rzp_test_xxxxx`
4. Use same key for both backend and frontend

#### **4. Cloudinary (Images)**
1. Go to [cloudinary.com](https://cloudinary.com)
2. Create free account
3. Get API credentials from dashboard

---

### **🧪 Testing Your Configuration**

#### **1. Test Backend:**
```bash
# Health check
curl https://your-backend-url.onrender.com

# API test
curl https://your-backend-url.onrender.com/api/movie/movies
```

#### **2. Test Frontend:**
1. Visit your frontend URL
2. Open browser developer tools
3. Check Network tab for API calls
4. Test user registration
5. Test movie browsing

#### **3. Test Connection:**
1. Try to register a new user
2. Check if API calls are successful
3. Look for CORS errors in console
4. Test booking flow

---

### **🚨 Common Issues & Solutions**

#### **CORS Errors:**
- Ensure `FRONTEND_URL` matches exactly in backend
- No trailing slash in URLs
- Redeploy backend after updating FRONTEND_URL

#### **API Connection Failed:**
- Check `VITE_API_URL` in frontend
- Ensure backend is running
- Check for typos in URLs

#### **Database Connection:**
- Whitelist all IPs: `0.0.0.0/0`
- Check username/password in connection string
- Ensure database name is correct

#### **Email Not Working:**
- Use Gmail App Password (not regular password)
- Enable 2-factor authentication first
- Check EMAIL_USER format

---

### **📱 Final Configuration Checklist**

- [ ] Backend deployed with all environment variables
- [ ] Frontend deployed with all environment variables
- [ ] MongoDB Atlas configured and accessible
- [ ] Gmail App Password generated
- [ ] Razorpay test keys obtained
- [ ] Cloudinary account set up
- [ ] FRONTEND_URL updated in backend
- [ ] VITE_API_URL updated in frontend
- [ ] Both services redeployed
- [ ] Connection tested successfully

---

### **🎉 Example Working Configuration**

**Backend Environment:**
```env
FRONTEND_URL=https://cinebook-app.netlify.app
MONGO_URI=mongodb+srv://user:pass@cluster0.abc123.mongodb.net/cinebook
JWT_SECRET=my_super_secret_jwt_key_that_is_very_long_and_random
RAZORPAY_KEY_ID=rzp_test_1234567890abcdef
EMAIL_USER=myemail@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```

**Frontend Environment:**
```env
VITE_API_URL=https://cinebook-backend.onrender.com
VITE_RAZORPAY_KEY_ID=rzp_test_1234567890abcdef
VITE_SKIP_RAZORPAY=false
VITE_FORCE_MOCK_PAYMENT=false
```

**Your CineBook application should now be fully configured and working! 🚀**