# 🚨 Production Backend Connection Fix

## Current Issue
Your frontend at `https://cinebookproject.netlify.app` is trying to connect to `https://your-backend-domain.onrender.com` (placeholder URL) instead of your actual backend.

## 🔧 Step-by-Step Fix

### **Step 1: Deploy Your Backend First**

1. **Go to Render**: [render.com](https://render.com)
2. **Create Web Service**:
   - Connect GitHub: `aflah1234/cinebook-`
   - Name: `cinebook-backend`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`

3. **Add Environment Variables in Render**:
   ```
   NODE_ENV=production
   PORT=10000
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

4. **Deploy and Copy URL**: You'll get something like `https://cinebook-backend-xyz.onrender.com`

### **Step 2: Update Frontend Environment Variables**

1. **Go to Netlify Dashboard**: [app.netlify.com](https://app.netlify.com)
2. **Find Your Site**: `cinebookproject`
3. **Go to Site Settings** → **Environment Variables**
4. **Add These Variables**:
   ```
   VITE_API_URL=https://your-actual-backend-url.onrender.com
   VITE_RAZORPAY_KEY_ID=rzp_test_your_key
   VITE_SKIP_RAZORPAY=false
   VITE_FORCE_MOCK_PAYMENT=false
   ```

5. **Trigger Redeploy**: Go to Deploys → Trigger Deploy

### **Step 3: Test Connection**

1. **Visit Your Site**: https://cinebookproject.netlify.app
2. **Open Browser Console**: F12 → Console tab
3. **Look for Connection Logs**: Should see "🚀 API Request" messages
4. **Check Connection Widget**: Bottom-right corner should show green ✅

## 🔍 Quick Test Commands

### Test Backend Directly:
```bash
# Replace with your actual backend URL
curl https://your-backend-url.onrender.com
curl https://your-backend-url.onrender.com/api/movie/movies
```

### Check CORS:
```bash
curl -H "Origin: https://cinebookproject.netlify.app" \
     -H "Access-Control-Request-Method: GET" \
     -H "Access-Control-Request-Headers: X-Requested-With" \
     -X OPTIONS \
     https://your-backend-url.onrender.com/api/movie/movies
```

## 🚨 Common Issues

### **Issue 1: "your-backend-domain.onrender.com" in Errors**
- **Cause**: Environment variable not set in Netlify
- **Fix**: Add `VITE_API_URL` in Netlify dashboard

### **Issue 2: CORS Errors**
- **Cause**: Backend doesn't allow your frontend domain
- **Fix**: Add `FRONTEND_URL=https://cinebookproject.netlify.app` in Render

### **Issue 3: 404 Errors**
- **Cause**: Backend not deployed or wrong URL
- **Fix**: Deploy backend first, then update frontend env vars

## ✅ Success Checklist

- [ ] Backend deployed to Render with environment variables
- [ ] Backend URL copied (e.g., `https://cinebook-backend-xyz.onrender.com`)
- [ ] `VITE_API_URL` set in Netlify dashboard
- [ ] `FRONTEND_URL` set in Render dashboard
- [ ] Both services redeployed
- [ ] No CORS errors in browser console
- [ ] Connection widget shows green ✅

## 🎯 Expected Result

After fixing:
- ✅ No more "your-backend-domain.onrender.com" errors
- ✅ No more CORS errors
- ✅ API calls work properly
- ✅ User registration/login works
- ✅ Movie browsing works

## 📞 Need Help?

If you're still having issues:
1. Share your actual backend URL from Render
2. Check browser console for specific error messages
3. Verify environment variables are set correctly in both platforms