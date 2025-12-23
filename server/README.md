# 🎬 CineBook - Backend API

## 🚀 Overview
This is the **Node.js/Express** backend API for **CineBook**, a movie ticket booking platform developed by Aflah. The backend provides comprehensive REST APIs for user authentication, movie management, theater operations, booking system, and payment processing.

---

## ✨ Key Features

### 🔒 Authentication & Authorization
- **JWT-based Authentication** with secure token management
- **Role-based Access Control** (User, Theater Owner, Admin)
- **OTP Verification** for email confirmation
- **Password Reset** functionality
- **Development Mode** with OTP skip for testing

### 🎬 Movie Management
- **CRUD Operations** for movies
- **Image Upload** with Cloudinary integration
- **Movie Reviews** and ratings system
- **Search and Filter** capabilities

### 🏛️ Theater Management
- **Theater Registration** and approval system
- **Show Management** with seat layouts
- **Revenue Tracking** for theater owners
- **Real-time Seat Availability**

### 💳 Payment System
- **Razorpay Integration** for secure payments
- **Mock Payment System** for development
- **Booking Confirmation** emails
- **Payment History** tracking

### 📧 Email System
- **Automated Email Notifications**
- **OTP Verification** emails
- **Booking Confirmations**
- **Password Reset** emails

---

## 🛠 Technologies Used

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Payment**: Razorpay API
- **Email**: Nodemailer
- **File Upload**: Cloudinary
- **Security**: bcryptjs, CORS
- **Development**: Nodemon, dotenv

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- Razorpay account (for payments)
- Cloudinary account (for image uploads)
- Gmail account (for email services)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aflah1234/cinebook-.git
   cd cinebook-
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   Create a `.env` file in the root directory:
   ```env
   PORT=8000
   NODE_ENV=development
   
   # Database
   MONGO_URI=your_mongodb_connection_string
   
   # JWT
   JWT_SECRET=your_jwt_secret_key
   
   # Razorpay (for payments)
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   RAZORPAY_MODE=test
   
   # Email Configuration
   EMAIL_USER=your_gmail_address
   EMAIL_PASS=your_gmail_app_password
   
   # Cloudinary (for image uploads)
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   
   # Development Settings
   SKIP_OTP_IN_DEV=true
   SKIP_PAYMENT_IN_DEV=true
   SKIP_EMAIL_ON_DEV=false
   ```

4. **Start the server**:
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

The server will start on `http://localhost:8000`

---

## 📚 API Endpoints

### 🔐 Authentication
- `POST /api/user/signup` - User registration
- `POST /api/user/verify-otp` - OTP verification
- `POST /api/user/login` - User login
- `POST /api/user/forgot-password` - Password reset request
- `POST /api/user/reset-password` - Password reset

### 🎬 Movies
- `GET /api/movie/movies` - Get all movies
- `GET /api/movie/movie-details/:id` - Get movie details
- `POST /api/movie/add-movie` - Add new movie (Admin)
- `PUT /api/movie/update-movie/:id` - Update movie (Admin)
- `DELETE /api/movie/delete-movie/:id` - Delete movie (Admin)

### 🏛️ Theaters
- `GET /api/theater/approved-theaters` - Get approved theaters
- `POST /api/theater/add-theater` - Add theater (Owner)
- `GET /api/theater/owner-theaters` - Get owner's theaters
- `PUT /api/theater/:id/approve` - Approve theater (Admin)

### 📅 Shows
- `GET /api/show/by-date` - Get shows by date
- `GET /api/show/by-location` - Get shows by location
- `POST /api/show/add-show` - Add show (Owner)
- `GET /api/show/seats/:showId` - Get seat availability

### 🎫 Bookings
- `POST /api/booking/book-seats` - Create booking
- `GET /api/booking/all-bookings` - Get user bookings
- `GET /api/booking/total-bookings` - Get booking statistics

### 💳 Payments
- `POST /api/payment/createOrder` - Create payment order
- `POST /api/payment/paymentVerification` - Verify payment

---

## 🧪 Development Tools

### Database Seeding
```bash
# Seed movies
node scripts/seedMovies.js

# Seed theaters
node scripts/seedTheaters.js

# Seed shows
node scripts/seedShows.js

# Create admin user
node scripts/createAdmin.js
```

### Testing Scripts
```bash
# Test database connection
node scripts/checkDatabase.js

# Test email functionality
node scripts/testEmail.js

# Test payment system
node scripts/testMockPayment.js
```

---

## 🔧 Configuration

### Development Mode Features
- **OTP Skip**: Set `SKIP_OTP_IN_DEV=true` to bypass OTP verification
- **Mock Payments**: Set `SKIP_PAYMENT_IN_DEV=true` for mock payment processing
- **Email Skip**: Set `SKIP_EMAIL_ON_DEV=true` to skip email sending

### Security Features
- **CORS** enabled for cross-origin requests
- **JWT** tokens with expiration
- **Password hashing** with bcrypt
- **Input validation** and sanitization
- **Rate limiting** for API endpoints

---

## 📁 Project Structure

```
server/
├── src/
│   ├── controllers/     # Route controllers
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   ├── middlewares/    # Custom middlewares
│   ├── utils/          # Utility functions
│   └── config/         # Configuration files
├── scripts/            # Database and testing scripts
├── .env               # Environment variables
├── server.js          # Main server file
└── package.json       # Dependencies
```

---

## 🚀 Deployment

### Environment Variables for Production
```env
NODE_ENV=production
PORT=8000
MONGO_URI=your_production_mongodb_uri
JWT_SECRET=your_strong_jwt_secret
# ... other production configs
```

### Deployment Platforms
- **Heroku**: Easy deployment with MongoDB Atlas
- **Railway**: Modern deployment platform
- **DigitalOcean**: VPS deployment
- **AWS**: EC2 with RDS/DocumentDB

---

## 👨‍💻 Author

**Aflah**
- GitHub: [@aflah1234](https://github.com/aflah1234)
- Email: aflah1234@gmail.com
- Project: [CineBook Backend](https://github.com/aflah1234/cinebook-)

---

## 📧 Contact

Got questions or feedback? Reach out:  
- Email: aflah1234@gmail.com  
- Issues: Open a ticket [here](https://github.com/aflah1234/cinebook-/issues)

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE.md](LICENSE.md) file for details.

---

## 🙏 Acknowledgments

- Built with modern Node.js and Express.js
- MongoDB for robust data storage
- Razorpay for secure payment processing
- Cloudinary for efficient image management

---

### 🎉 Why CineBook Backend?

**CineBook Backend** provides a robust, scalable, and secure foundation for movie ticket booking applications. With comprehensive APIs, real-time features, and developer-friendly tools, it's designed to handle everything from small theaters to large cinema chains! 🎬✨