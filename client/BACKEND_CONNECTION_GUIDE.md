# 🔗 Backend Connection Troubleshooting Guide

## 🚨 Common Backend Connection Issues

### **Issue 1: "Network Error" or "ERR_NETWORK"**

**Cause**: Backend is not running or wrong URL

**Solutions**:
1. **Check Backend Status**:
   ```bash
   # If running locally
   curl http://localhost:8000
   
   # If deployed
   curl https://your-backend-url.onrender.com
   ```

2. **Update Frontend .env**:
   ```env
   # For local backend
   VITE_API_URL=http://localhost:8000
   
   # For deployed backend
   VITE_API_URL=https://your-backend-url.onrender.com
   ```

3. **Restart Frontend**:
   ```bash
   npm run dev
   ```

---

### **Issue 2: CORS Errors**

**Cause**: Backend doesn't allow frontend domain

**Solutions**:
1. **Update Backend Environment**:
   ```env
   FRONTEND_URL=http://localhost:5173
   # or your deployed frontend URL
   FRONTEND_URL=https://your-frontend.netlify.app
   ```

2. **Restart Backend** after updating environment variables

---

### **Issue 3: 404 Not Found**

**Cause**: Wrong API endpoint

**Solutions**:
1. **Check API Routes**: Ensure backend has `/api/movie/movies` endpoint
2. **Check Axios Config**: Should use `VITE_API_URL + '/api'`

---

### **Issue 4: Connection Timeout**

**Cause**: Backend is slow or unresponsive

**Solutions**:
1. **Check Backend Logs**
2. **Increase Timeout** in axios config
3. **Restart Backend Service**

---

## 🧪 Testing Steps

### **1. Test Backend Directly**:
```bash
# Health check
curl https://your-backend-url.onrender.com

# API test
curl https://your-backend-url.onrender.com/api/movie/movies
```

### **2. Check Frontend Console**:
- Open browser developer tools
- Look for API request logs
- Check for error messages

### **3. Use Connection Test Component**:
- Look for connection test widget in bottom-right corner
- Click "Test Again" to retry connection

---

## ✅ Quick Fix Checklist

- [ ] Backend is running (local or deployed)
- [ ] `VITE_API_URL` is correct in frontend `.env`
- [ ] `FRONTEND_URL` is set in backend environment
- [ ] Both services restarted after env changes
- [ ] No CORS errors in browser console
- [ ] API endpoints are accessible

---

## 🔧 Environment Configuration

### **Development (Local)**:
```env
# Frontend .env
VITE_API_URL=http://localhost:8000

# Backend .env
FRONTEND_URL=http://localhost:5173
```

### **Production (Deployed)**:
```env
# Frontend (Netlify/Vercel)
VITE_API_URL=https://your-backend.onrender.com

# Backend (Render/Railway)
FRONTEND_URL=https://your-frontend.netlify.app
```

---

**If issues persist, check the connection test widget for detailed error information! 🔍**