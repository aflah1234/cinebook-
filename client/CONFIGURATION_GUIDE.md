# 🌐 CineBook Frontend Configuration Guide

## 📋 Complete Setup Instructions

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

### **🔗 Connect with Backend**

#### **Update Frontend with Backend URL:**
1. Go to your frontend hosting platform (Netlify/Vercel)
2. Update environment variable:
   ```
   VITE_API_URL=https://your-actual-backend-url.onrender.com
   ```
3. Redeploy frontend

---

### **🧪 Testing Your Frontend**

#### **Test Frontend:**
1. Visit your frontend URL
2. Open browser developer tools
3. Check Network tab for API calls
4. Test user registration
5. Test movie browsing

#### **Test Connection:**
1. Try to register a new user
2. Check if API calls are successful
3. Look for CORS errors in console
4. Test booking flow

---

### **🚨 Common Issues & Solutions**

#### **API Connection Failed:**
- Check `VITE_API_URL` in frontend
- Ensure backend is running
- Check for typos in URLs

#### **CORS Errors:**
- Ensure backend has correct FRONTEND_URL
- Check that URLs match exactly

---

### **📱 Frontend Configuration Checklist**

- [ ] Frontend deployed with all environment variables
- [ ] VITE_API_URL updated with backend URL
- [ ] Razorpay key configured
- [ ] Connection tested successfully
- [ ] User registration works
- [ ] Movie browsing works
- [ ] Booking system works

---

**Your CineBook frontend should now be fully configured and working! 🚀**