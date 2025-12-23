# 🔧 Environment Variables Configuration

## 🌐 Frontend (Netlify) Environment Variables

**Go to**: Netlify Dashboard → Your Site → Site Settings → Environment Variables

```env
VITE_API_URL=https://your-vercel-backend-url.vercel.app
VITE_RAZORPAY_KEY_ID=rzp_test_your_actual_key_id
VITE_SKIP_RAZORPAY=false
VITE_FORCE_MOCK_PAYMENT=false
```

**Example with Real Vercel URL**:
```env
VITE_API_URL=https://cinebook-backend.vercel.app
VITE_RAZORPAY_KEY_ID=rzp_test_1234567890abcdef
VITE_SKIP_RAZORPAY=false
VITE_FORCE_MOCK_PAYMENT=false
```

---

## 🚀 Backend (Vercel) Environment Variables

**Go to**: Vercel Dashboard → Your Project → Settings → Environment Variables

```env
NODE_ENV=production
FRONTEND_URL=https://cinebookproject.netlify.app
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/cinebook
JWT_SECRET=your_super_long_random_jwt_secret_for_production
RAZORPAY_KEY_ID=rzp_test_your_actual_key_id
RAZORPAY_KEY_SECRET=rzp_test_your_actual_key_secret
RAZORPAY_MODE=test
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-digit-gmail-app-password
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
SKIP_OTP_IN_DEV=false
SKIP_PAYMENT_IN_DEV=false
SKIP_EMAIL_ON_DEV=false
```

---

## 🔗 How to Get Required Services

### **1. MongoDB Atlas (Database)**
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create free cluster
3. Create database user
4. Whitelist IP: `0.0.0.0/0`
5. Get connection string

### **2. Gmail App Password**
1. Enable 2-factor authentication
2. Go to Google Account → Security → App passwords
3. Generate 16-digit password

### **3. Razorpay (Payments)**
1. Go to [razorpay.com](https://razorpay.com)
2. Create account
3. Get test API keys

### **4. Cloudinary (Images)**
1. Go to [cloudinary.com](https://cloudinary.com)
2. Create free account
3. Get API credentials

---

## ⚠️ Vercel-Specific Notes

1. **Serverless Environment**: Each request runs in a new function instance
2. **Environment Variables**: Set in Vercel dashboard, redeploy after changes
3. **Cold Starts**: First request might be slower, this is normal
4. **Database Connections**: Use connection pooling for better performance

---

## 🧪 Testing Environment Variables

### **Test Frontend**:
```javascript
// In browser console
console.log(import.meta.env.VITE_API_URL);
```

### **Test Backend**:
```bash
# Health check
curl https://your-vercel-backend-url.vercel.app

# Environment check
curl https://your-vercel-backend-url.vercel.app/api/movie/movies
```

---

## 🎯 Quick Setup

1. **Get your Vercel backend URL** from Vercel dashboard
2. **Add `VITE_API_URL`** in Netlify with your Vercel URL
3. **Add `FRONTEND_URL`** in Vercel with `https://cinebookproject.netlify.app`
4. **Redeploy both services**
5. **Test connection**