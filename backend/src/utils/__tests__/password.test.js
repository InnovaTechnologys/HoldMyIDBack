const { hashPassword, verifyPassword } = require('../password');

describe('Password Utils', () => {
  describe('hashPassword', () => {
    test('debe generar un hash de contraseña', async () => {
      const password = 'miContraseña123';
      const hash = await hashPassword(password);
      
      expect(hash).toBeDefined();
      expect(hash).not.toBe(password);
      expect(hash.length).toBeGreaterThan(0);
    });

    test('debe generar hashes diferentes para la misma contraseña', async () => {
      const password = 'miContraseña123';
      const hash1 = await hashPassword(password);
      const hash2 = await hashPassword(password);
      
      expect(hash1).not.toBe(hash2);
    });
  });

  describe('verifyPassword', () => {
    test('debe verificar correctamente una contraseña válida', async () => {
      const password = 'miContraseña123';
      const hash = await hashPassword(password);
      
      const isValid = await verifyPassword(password, hash);
      expect(isValid).toBe(true);
    });

    test('debe rechazar una contraseña incorrecta', async () => {
      const password = 'miContraseña123';
      const wrongPassword = 'contraseñaIncorrecta';
      const hash = await hashPassword(password);
      
      const isValid = await verifyPassword(wrongPassword, hash);
      expect(isValid).toBe(false);
    });

    test('debe manejar contraseñas vacías', async () => {
      const password = '';
      const hash = await hashPassword(password);
      
      const isValid = await verifyPassword(password, hash);
      expect(isValid).toBe(true);
    });
  });
});
