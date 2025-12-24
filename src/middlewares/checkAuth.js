import jwt from "jsonwebtoken";

// -----------check user authenticated------------
const checkAuth = (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            console.log('❌ No token found in cookies');
            return res.status(401).json({ 
                message: "Unauthorized - No token provided",
                debug: process.env.NODE_ENV === 'development' ? {
                    cookies: Object.keys(req.cookies),
                    hasToken: false
                } : undefined
            });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log('❌ Token verification failed:', err.message);
                return res.status(401).json({ 
                    message: "Unauthorized - Invalid token",
                    debug: process.env.NODE_ENV === 'development' ? {
                        error: err.message,
                        tokenPreview: token.substring(0, 20) + "..."
                    } : undefined
                });
            }
            
            console.log('✅ User authenticated:', decoded.userId);
            req.user = decoded;
            next();
        });

    } catch (error) {
        console.error("Error in checkAuth middleware", error);
        res.status(error.statusCode || 500).json({ 
            message: error.message || "Internal server error" 
        });
    }
};

export default checkAuth;