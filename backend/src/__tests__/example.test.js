// Test de ejemplo básico para verificar que Jest funciona
describe('Pruebas de Ejemplo', () => {
  test('suma básica funciona correctamente', () => {
    expect(1 + 1).toBe(2);
  });

  test('verificar que un array contiene elementos', () => {
    const arr = [1, 2, 3];
    expect(arr).toContain(2);
    expect(arr).toHaveLength(3);
  });

  test('verificar operaciones con objetos', () => {
    const usuario = {
      nombre: 'Juan',
      edad: 25
    };
    expect(usuario).toHaveProperty('nombre');
    expect(usuario.edad).toBeGreaterThan(18);
  });

  test('operaciones asíncronas con async/await', async () => {
    const promesa = Promise.resolve('éxito');
    const resultado = await promesa;
    expect(resultado).toBe('éxito');
  });
});
