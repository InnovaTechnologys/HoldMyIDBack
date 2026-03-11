const express = require('express');
const router = express.Router();
const { registro, verificarRegistro, login, obtenerPerfil } = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');
const loginLimiter = require('../middleware/loginLimiter');
const generalLimiter = require('../middleware/generalLimiter');

// Rutas públicas
router.post('/registro', generalLimiter, registro);
router.post('/verificar-registro', generalLimiter, verificarRegistro);
router.post('/login', loginLimiter, login);

// Ruta de verificación de token
router.get('/verify', authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Token válido',
    data: {
      id: req.usuario.id,
      email: req.usuario.email,
      rol: req.usuario.rol,
    },
  });
});

// Rutas protegidas
router.get('/perfil', authMiddleware, obtenerPerfil);

module.exports = router;
