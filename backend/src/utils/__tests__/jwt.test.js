const { generateToken, verifyToken, decodeToken } = require('../jwt');

// Mock del JWT_SECRET
process.env.JWT_SECRET = 'test_secret_key_for_testing';

describe('JWT Utils', () => {
  const mockUsuario = {
    id: 1,
    email: 'test@ejemplo.com',
    codigo_estudiante: 'EST001',
    rol: 'estudiante'
  };

  describe('generateToken', () => {
    test('debe generar un token JWT válido', () => {
      const token = generateToken(mockUsuario);
      
      expect(token).toBeDefined();
      expect(typeof token).toBe('string');
      expect(token.length).toBeGreaterThan(0);
    });

    test('el token debe contener la información del usuario', () => {
      const token = generateToken(mockUsuario);
      const decoded = decodeToken(token);
      
      expect(decoded.id).toBe(mockUsuario.id);
      expect(decoded.email).toBe(mockUsuario.email);
      expect(decoded.codigo_estudiante).toBe(mockUsuario.codigo_estudiante);
      expect(decoded.rol).toBe(mockUsuario.rol);
    });
  });

  describe('verifyToken', () => {
    test('debe verificar correctamente un token válido', () => {
      const token = generateToken(mockUsuario);
      const verified = verifyToken(token);
      
      expect(verified).toBeDefined();
      expect(verified.id).toBe(mockUsuario.id);
      expect(verified.email).toBe(mockUsuario.email);
    });

    test('debe retornar null para un token inválido', () => {
      const invalidToken = 'token_invalido_xyz';
      const verified = verifyToken(invalidToken);
      
      expect(verified).toBeNull();
    });

    test('debe retornar null para un token vacío', () => {
      const verified = verifyToken('');
      
      expect(verified).toBeNull();
    });
  });

  describe('decodeToken', () => {
    test('debe decodificar un token sin verificarlo', () => {
      const token = generateToken(mockUsuario);
      const decoded = decodeToken(token);
      
      expect(decoded).toBeDefined();
      expect(decoded.id).toBe(mockUsuario.id);
      expect(decoded.email).toBe(mockUsuario.email);
    });

    test('debe tener un campo de expiración', () => {
      const token = generateToken(mockUsuario);
      const decoded = decodeToken(token);
      
      expect(decoded.exp).toBeDefined();
      expect(typeof decoded.exp).toBe('number');
    });
  });
});
