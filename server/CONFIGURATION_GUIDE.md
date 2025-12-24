# 🔧 CineBook Backend Configuration Guide

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

### **🧪 Testing Your Backend**

#### **Test Backend:**
```bash
# Health check
curl https://your-backend-url.onrender.com

# API test
curl https://your-backend-url.onrender.com/api/movie/movies
```

---

### **🚨 Common Issues & Solutions**

#### **CORS Errors:**
- Ensure `FRONTEND_URL` matches exactly in backend
- No trailing slash in URLs
- Redeploy backend after updating FRONTEND_URL

#### **Database Connection:**
- Whitelist all IPs: `0.0.0.0/0`
- Check username/password in connection string
- Ensure database name is correct

#### **Email Not Working:**
- Use Gmail App Password (not regular password)
- Enable 2-factor authentication first
- Check EMAIL_USER format

---

**Your CineBook backend should now be fully configured and working! 🚀**