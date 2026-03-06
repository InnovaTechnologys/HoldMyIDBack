# Testing en HoldMyIDBack Backend

## Configuración de Tests

Este proyecto utiliza **Jest** como framework de testing y **Supertest** para pruebas de API.

## Comandos Disponibles

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch (se re-ejecutan al guardar cambios)
npm run test:watch

# Ejecutar tests con reporte de cobertura
npm run test:coverage
```

## Estructura de Tests

Los archivos de prueba siguen la convención de Jest:

- Archivos de test: `*.test.js` o `*.spec.js`
- Ubicación: Carpetas `__tests__` junto al código a testear

```
backend/src/
├── __tests__/              # Tests generales
│   └── example.test.js
└── utils/
    ├── __tests__/          # Tests de utilidades
    │   ├── password.test.js
    │   └── jwt.test.js
    ├── password.js
    └── jwt.js
```

## Tests Existentes

### 1. Password Utils (`password.test.js`)

- Hash de contraseñas con bcrypt
- Verificación de contraseñas
- Manejo de casos edge

### 2. JWT Utils (`jwt.test.js`)

- Generación de tokens JWT
- Verificación de tokens
- Decodificación de tokens

### 3. Example Tests (`example.test.js`)

- Tests de ejemplo básicos
- Demostración de sintaxis Jest

## Cómo Escribir Nuevos Tests

### Ejemplo básico:

```javascript
describe("Nombre del módulo", () => {
  test("debe hacer algo específico", () => {
    const resultado = miFuncion();
    expect(resultado).toBe(valorEsperado);
  });
});
```

### Test asíncrono:

```javascript
test("debe funcionar con async/await", async () => {
  const resultado = await funcionAsincrona();
  expect(resultado).toBeDefined();
});
```

### Test de API con Supertest:

```javascript
const request = require("supertest");
const app = require("../app");

test("GET /api/endpoint debe retornar 200", async () => {
  const response = await request(app).get("/api/endpoint").expect(200);

  expect(response.body).toHaveProperty("data");
});
```

## Próximos Pasos

Considera agregar tests para:

- Controllers (authController, carnetController, etc.)
- Routes (authRoutes, carnetRoutes, etc.)
- Models (Carnet, Usuario, etc.)
- Middleware (auth.js)

## Recursos

- [Jest Documentation](https://jestjs.io/)
- [Supertest Documentation](https://github.com/visionmedia/supertest)
