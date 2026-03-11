// Middleware para rate limiting general
const rateLimit = require('express-rate-limit');

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // máximo 100 peticiones por IP
  message: {
    success: false,
    message: 'Demasiadas peticiones. Intenta nuevamente en unos minutos.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = generalLimiter;
