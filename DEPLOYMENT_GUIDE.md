# 🚀 CineBook Deployment Guide

## 📋 Complete Deployment Steps

### **Step 1: Deploy Backend to Render**

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
   MONGO_URI=mongodb+srv://your-username:password@cluster.mongodb.net/cinebook
   JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random
   
   # Email (Gmail App Password)
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-digit-app-password
   
   # Razorpay (get from razorpay.com)
   RAZORPAY_KEY_ID=rzp_test_your_key_id
   RAZORPAY_KEY_SECRET=rzp_test_your_key_secret
   RAZORPAY_MODE=test
   
   # Cloudinary (get from cloudinary.com)
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   
   # Production Settings
   SKIP_OTP_IN_DEV=false
   SKIP_PAYMENT_IN_DEV=false
   SKIP_EMAIL_ON_DEV=false
   
   # Frontend URL (add after frontend deployment)
   FRONTEND_URL=https://your-frontend-domain.netlify.app
   ```

4. **Deploy**: Click "Create Web Service"
5. **Get Backend URL**: Copy the URL (e.g., `https://cinebook-backend-xyz.onrender.com`)

---

### **Step 2: Deploy Frontend to Netlify**

1. **Go to Netlify**: [netlify.com](https://netlify.com)
2. **Import Project**:
   - Connect GitHub: `aflah1234/cinebook`
   - Build Command: `npm run build`
   - Publish Directory: `dist`

3. **Add Environment Variables in Netlify**:
   ```
   VITE_API_URL=https://your-render-backend-url.onrender.com
   VITE_RAZORPAY_KEY_ID=rzp_test_your_key_id
   VITE_SKIP_RAZORPAY=false
   VITE_FORCE_MOCK_PAYMENT=false
   ```

4. **Deploy**: Click "Deploy site"
5. **Get Frontend URL**: Copy the URL (e.g., `https://amazing-name-123456.netlify.app`)

---

### **Step 3: Connect Frontend and Backend**

1. **Update Backend CORS**:
   - Go to Render dashboard
   - Add environment variable: `FRONTEND_URL=https://your-netlify-url.netlify.app`
   - Redeploy backend

2. **Test Connection**:
   - Visit your frontend URL
   - Try to register/login
   - Check browser console for any CORS errors

---

### **Step 4: Update Repository URLs**

Update your local environment files with production URLs:

**Backend (.env.example)**:
```env
FRONTEND_URL=https://your-actual-frontend-url.netlify.app
```

**Frontend (.env)**:
```env
VITE_API_URL=https://your-actual-backend-url.onrender.com
```

---

## 🔧 **Environment Variables Setup Guide**

### **MongoDB Atlas** (Database):
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create free cluster
3. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/cinebook`

### **Gmail App Password** (Email):
1. Enable 2-factor authentication on Gmail
2. Go to Google Account settings
3. Generate App Password (16 digits)
4. Use this as `EMAIL_PASS`

### **Razorpay** (Payments):
1. Go to [razorpay.com](https://razorpay.com)
2. Create account and get test keys
3. Use `rzp_test_` keys for testing

### **Cloudinary** (Images):
1. Go to [cloudinary.com](https://cloudinary.com)
2. Create free account
3. Get API credentials from dashboard

---

## 🧪 **Testing Your Deployment**

### **Backend Testing**:
```bash
# Test backend health
curl https://your-backend-url.onrender.com

# Test API endpoint
curl https://your-backend-url.onrender.com/api/movie/movies
```

### **Frontend Testing**:
1. Visit your Netlify URL
2. Open browser developer tools
3. Check Network tab for API calls
4. Test user registration/login
5. Test movie browsing and booking

---

## 🚨 **Common Issues & Solutions**

### **CORS Errors**:
- Ensure `FRONTEND_URL` is set in backend environment
- Check that frontend URL matches exactly (no trailing slash)

### **API Connection Failed**:
- Verify `VITE_API_URL` in frontend environment
- Check backend is running on Render
- Ensure backend URL is correct

### **Database Connection**:
- Check MongoDB Atlas IP whitelist (allow all: 0.0.0.0/0)
- Verify connection string format
- Check username/password in connection string

### **Email Not Working**:
- Use Gmail App Password (not regular password)
- Enable 2-factor authentication first
- Check EMAIL_USER and EMAIL_PASS format

---

## 📱 **Final Checklist**

- [ ] Backend deployed to Render
- [ ] Frontend deployed to Netlify
- [ ] Environment variables configured
- [ ] CORS configured correctly
- [ ] Database connected
- [ ] Email service working
- [ ] Payment system configured
- [ ] Frontend can connect to backend
- [ ] User registration works
- [ ] Movie browsing works
- [ ] Booking system works

---

## 🎉 **Success!**

Your CineBook application should now be fully deployed and accessible:

- **Frontend**: https://your-frontend-url.netlify.app
- **Backend**: https://your-backend-url.onrender.com

Share your live application with the world! 🌟