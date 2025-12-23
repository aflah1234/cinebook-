# 🚀 URGENT: Fix Vercel Backend Connection

## 🎯 Current Issue
Your frontend at `https://cinebookproject.netlify.app` is trying to connect to a placeholder URL instead of your actual Vercel backend at `https://cinebook-6ys5.vercel.app`.

## ⚡ IMMEDIATE STEPS TO FIX

### **Step 1: Update Netlify Environment Variables**

1. **Go to Netlify Dashboard**: [app.netlify.com](https://app.netlify.com)
2. **Find Your Site**: `cinebookproject`
3. **Go to**: Site Settings → Environment Variables
4. **Add/Update This Variable**:
   ```
   VITE_API_URL = https://cinebook-6ys5.vercel.app
   ```
   ⚠️ **IMPORTANT**: Remove the trailing slash `/` - it should be `https://cinebook-6ys5.vercel.app` NOT `https://cinebook-6ys5.vercel.app/`

5. **Save and Trigger Redeploy**: Go to Deploys → Trigger Deploy

### **Step 2: Update Vercel Environment Variables**

1. **Go to Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
2. **Find Your Backend Project**: `cinebook-6ys5`
3. **Go to**: Settings → Environment Variables
4. **Add/Update These Variables**:
   ```
   NODE_ENV = production
   FRONTEND_URL = https://cinebookproject.netlify.app
   MONGO_URI = mongodb+srv://developed848:r8svIM3fDRlY0dug@cluster0.vd8bep7.mongodb.net/cinebook
   JWT_SECRET = your_super_secret_jwt_key_make_it_long_and_random_for_production
   EMAIL_USER = developed848@gmail.com
   EMAIL_PASS = developed1234567
   SKIP_OTP_IN_DEV = false
   SKIP_PAYMENT_IN_DEV = false
   RAZORPAY_KEY_ID = rzp_test_your_actual_key_id
   RAZORPAY_KEY_SECRET = rzp_test_your_actual_key_secret
   RAZORPAY_MODE = test
   ```

5. **Redeploy**: Go to Deployments → Redeploy

### **Step 3: Test Your Backend**

Open these URLs in your browser:

1. **Backend Health Check**: https://cinebook-6ys5.vercel.app
   - Should show: "Hello Welcome To CineBook"

2. **API Test**: https://cinebook-6ys5.vercel.app/api/movie/movies
   - Should return JSON with movies data

### **Step 4: Test Frontend Connection**

1. **Visit**: https://cinebookproject.netlify.app
2. **Open Browser Console**: Press F12 → Console tab
3. **Look for**: 
   - ✅ "🚀 API Request" messages pointing to your Vercel URL
   - ❌ No more "your-backend-domain.onrender.com" errors

## 🔍 Quick Verification

### **Check Current Frontend Environment**:
1. Go to https://cinebookproject.netlify.app
2. Open browser console (F12)
3. Type: `console.log(import.meta.env.VITE_API_URL)`
4. Should show: `https://cinebook-6ys5.vercel.app`

### **Check Backend CORS**:
Your backend is already configured to accept requests from `cinebookproject.netlify.app`, so CORS should work once the environment variables are updated.

## 🚨 Common Issues & Solutions

### **Issue 1: Still seeing "your-backend-domain.onrender.com"**
- **Cause**: Netlify hasn't redeployed with new environment variables
- **Fix**: Go to Netlify → Deploys → Trigger Deploy

### **Issue 2: CORS errors**
- **Cause**: `FRONTEND_URL` not set in Vercel
- **Fix**: Add `FRONTEND_URL=https://cinebookproject.netlify.app` in Vercel dashboard

### **Issue 3: 404 errors on API calls**
- **Cause**: Trailing slash in `VITE_API_URL`
- **Fix**: Use `https://cinebook-6ys5.vercel.app` (no trailing slash)

## ✅ Success Checklist

- [ ] `VITE_API_URL=https://cinebook-6ys5.vercel.app` set in Netlify
- [ ] `FRONTEND_URL=https://cinebookproject.netlify.app` set in Vercel
- [ ] Both services redeployed
- [ ] Backend health check works: https://cinebook-6ys5.vercel.app
- [ ] API test works: https://cinebook-6ys5.vercel.app/api/movie/movies
- [ ] Frontend loads without CORS errors
- [ ] No more "your-backend-domain.onrender.com" in console

## 🎯 Expected Result

After following these steps:
- ✅ Frontend connects to your Vercel backend
- ✅ No CORS errors
- ✅ Movies load on homepage
- ✅ User authentication works
- ✅ All API calls successful

**Your CineBook app should be fully functional! 🎬**