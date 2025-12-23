# Server Environment

Copy `server/.env.example` to `server/.env` and replace the placeholder values with your actual credentials before running the server.

Required keys:
- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — secret used for signing JWTs
- `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` — Razorpay API credentials (use test keys when developing)
- `RAZORPAY_MODE` — set to `test` to enforce using Razorpay test keys
- `EMAIL_USER` and `EMAIL_PASS` — SMTP credentials for sending emails
- `CLOUDINARY_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` — Cloudinary credentials for image uploads

Note: `.env` is already ignored by Git (`.gitignore`). Do not commit real secrets to the repository.

## Seeding sample data

A small seed script is provided to insert sample movies for local development:

```bash
# from the repository root
node server/scripts/seedMovies.js
```

The script reads `server/.env` for `MONGO_URI` and will insert three sample movies. Use it anytime to reset or populate test data.
