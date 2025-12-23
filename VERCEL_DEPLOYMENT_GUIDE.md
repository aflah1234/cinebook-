# 🚀 Vercel Backend Deployment Guide

## 🎯 Current Issue
Your frontend at `https://cinebookproject.netlify.app` is trying to connect to a placeholder backend URL instead of your actual Vercel backend.

## 🔧 Step-by-Step Fix for Vercel Backend

### **Step 1: Get Your Vercel Backend URL**

Your backend should be deployed at something like:
- `https://cinebook-backend.vercel.app`
- `https://cinebook-6ys5-t4me5ods4-aflahs-projects-f84feba8.vercel.app`
- Or similar Vercel URL

**To find your URL:**
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Find your backend project
3. Copy the deployment URL

### **Step 2: Update Frontend Environment Variables**

1. **Go to Netlify Dashboard**: [app.netlify.com](https://app.netlify.com)
2. **Find Your Site**: `cinebookproject`
3. **Go to Site Settings** → **Environment Variables**
4. **Add/Update These Variables**:
   ```
   VITE_API_URL=https://your-actual-vercel-backend-url.vercel.app
   VITE_RAZORPAY_KEY_ID=rzp_test_your_key
   VITE_SKIP_RAZORPAY=false
   VITE_FORCE_MOCK_PAYMENT=false
   ```

5. **Trigger Redeploy**: Go to Deploys → Trigger Deploy

### **Step 3: Update Backend Environment Variables in Vercel**

1. **Go to Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
2. **Find Your Backend Project**
3. **Go to Settings** → **Environment Variables**
4. **Add These Variables**:
   ```
   NODE_ENV=production
   FRONTEND_URL=https://cinebookproject.netlify.app
   MONGO_URI=mongodb+srv://your-username:password@cluster.mongodb.net/cinebook
   JWT_SECRET=your_super_secret_jwt_key_make_it_long_and_random
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   RAZORPAY_KEY_ID=rzp_test_your_key
   RAZORPAY_KEY_SECRET=rzp_test_your_secret
   RAZORPAY_MODE=test
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   SKIP_OTP_IN_DEV=false
   SKIP_PAYMENT_IN_DEV=false
   SKIP_EMAIL_ON_DEV=false
   ```

5. **Redeploy**: Trigger a new deployment

### **Step 4: Test Your Backend**

```bash
# Replace with your actual Vercel URL
curl https://your-backend-url.vercel.app
curl https://your-backend-url.vercel.app/api/movie/movies
```

### **Step 5: Test Frontend Connection**

1. **Visit**: https://cinebookproject.netlify.app
2. **Open Browser Console**: F12 → Console
3. **Look for**: "🚀 API Request" messages
4. **Check Connection Widget**: Bottom-right corner should show green ✅

## 🔍 Vercel-Specific Notes

### **Serverless Functions**
- Vercel runs your backend as serverless functions
- Each API call starts a new function instance
- Database connections should be optimized for serverless

### **Cold Starts**
- First request might be slower (cold start)
- Subsequent requests will be faster
- This is normal for serverless platforms

### **Environment Variables**
- Set in Vercel dashboard, not in code
- Automatically available in production
- Redeploy after changing env vars

## 🚨 Common Vercel Issues

### **Issue 1: Function Timeout**
- **Cause**: Long-running operations
- **Fix**: Optimize database queries, increase timeout in vercel.json

### **Issue 2: Cold Start Delays**
- **Cause**: Serverless function startup time
- **Fix**: Normal behavior, consider connection pooling

### **Issue 3: Environment Variables Not Working**
- **Cause**: Not set in Vercel dashboard
- **Fix**: Add all env vars in Vercel settings, redeploy

## ✅ Success Checklist

- [ ] Backend deployed to Vercel with environment variables
- [ ] Vercel backend URL copied
- [ ] `VITE_API_URL` updated in Netlify dashboard
- [ ] `FRONTEND_URL` set in Vercel dashboard
- [ ] Both services redeployed
- [ ] No CORS errors in browser console
- [ ] Connection widget shows green ✅
- [ ] API calls work properly

## 🎯 Expected URLs

**Frontend**: https://cinebookproject.netlify.app
**Backend**: https://your-project-name.vercel.app

## 📞 Quick Fix

If you know your Vercel backend URL, just:
1. Add `VITE_API_URL=https://your-vercel-url.vercel.app` in Netlify
2. Add `FRONTEND_URL=https://cinebookproject.netlify.app` in Vercel
3. Redeploy both
4. Test connection

**Your Vercel backend should now connect properly with your Netlify frontend! 🚀**