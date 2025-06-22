# 🚌 Bus Reservation API

Este es un backend RESTful creado con [NestJS](https://nestjs.com/) para gestionar la **reserva de boletos de autobús** tanto desde una **página web** como desde un **bot de WhatsApp**.  
El sistema permite a los usuarios seleccionar rutas, horarios disponibles, reservar asientos y cargar un comprobante de pago para confirmar su viaje.

---

## 🎯 Propósito del Proyecto

El objetivo principal es desarrollar un sistema completo y automatizado que permita:

- Ofrecer una experiencia ágil de compra de boletos de autobús en línea.
- Gestionar buses, rutas, horarios, asientos y reservas.
- Conectar con un **bot de WhatsApp** para que los usuarios puedan reservar sus boletos desde su teléfono móvil de forma sencilla.
- Integrarse con un frontend hecho en Angular para ofrecer una interfaz visual moderna y accesible.

---

## 🛠️ Tecnologías Usadas

- **NestJS**: Framework para aplicaciones backend en Node.js.
- **TypeORM**: ORM para manejar la base de datos relacional.
- **MySQL**: Base de datos relacional.
- **Swagger (OpenAPI)**: Documentación interactiva de la API.
- **TypeScript**: Tipado estricto y desarrollo escalable.

---

## 📂 Estructura del Proyecto

```bash
src/
│
├── users/           # Gestión de usuarios
├── admins/          # Administración
├── buses/           # Gestión de buses
├── seats/           # Gestión de asientos
├── routes/          # Rutas de viaje
├── schedules/       # Horarios disponibles
├── reservations/    # Reservas de boletos
├── entities/        # Entidades TypeORM compartidas
└── app.module.ts    # Módulo principal
