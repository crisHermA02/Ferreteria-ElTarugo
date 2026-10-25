# Ferretería El Tarugo (E-Commerce)
**Proyecto Semestral - DUOC UC (Fullstack II)**

## Descripción del Proyecto
**Ferretería El Tarugo** (anteriormente caso "Ferretería Los Maestros") es un negocio familiar con 22 años de trayectoria física. Este proyecto representa su transformación digital, llevando la tienda a la era moderna mediante el desarrollo de una plataforma web (E-commerce) robusta, rápida y responsiva.

### Funcionalidades Principales
- **Gestión de Usuarios:** Sistema de registro, inicio de sesión y perfiles.
- **Experiencia de Compra:** Catálogo interactivo paginado, vista detallada de productos y carrito de compras dinámico.
- **Gestión de Pedidos:** Historial completo de compras para los usuarios.
- **Roles del Sistema:** Vistas y paneles protegidos dependiendo del rol (Administrador, Vendedor, Cliente).
- **Contacto:** Canales de comunicación directa e información de la tienda.

---

## Equipo de Desarrollo (Integrantes)
- **Axel Matías Cortés Mesías** - [ax.cortesm@duocuc.cl](mailto:ax.cortesm@duocuc.cl)
- **Cristóbal Ramón Hermosilla Andrades** - [cr.hermosillaa@duocuc.cl](mailto:cr.hermosillaa@duocuc.cl)
- **Carlos Felipe Neculman Villarroel** - [Ca.neculman@duocuc.cl](mailto:Ca.neculman@duocuc.cl)

---

## Stack Tecnológico
Este proyecto fue construido utilizando herramientas modernas de desarrollo web:

* **Core:** React.js + Vite
* **Enrutamiento:** React Router DOM
* **Estilos y UI:** React Bootstrap (Bootstrap 5)
* **Gestión de Estado:** React Context API (Productos, Carrito)
* **Testing:** Vitest & React Testing Library

---

## Estructura de Carpetas
El front-end está estructurado siguiendo los principios de la metodología **Atomic Design** para garantizar un código modular, escalable y fácil de mantener.
```text
src/
 ┣ assets/            # Archivos estáticos
 ┃ ┗ img/             # Imágenes locales (logos, banners, productos por defecto)
 ┣ components/        # Interfaz de usuario (UI)
 ┃ ┣ atoms/           # Componentes básicos (Botones, Badges, Precios)
 ┃ ┣ molecules/       # Agrupaciones de átomos (Item individual)
 ┃ ┣ organism/        # Secciones complejas (Grilla de catálogo, Navbars)
 ┃ ┗ templates/       # Estructuras de página (Plantillas públicas/privadas)
 ┣ context/           # Estados globales de la aplicación (Carrito, Productos)
 ┣ data/              # Datos estáticos o mocks (ej. JSON con el catálogo inicial)
 ┣ hooks/             # Custom Hooks (ej. useTituloPagina)
 ┣ pages/             # Vistas principales renderizadas por el router (Catálogo, Detalles)
 ┣ utils/             # Funciones de utilidad (Filtros, formateadores, animaciones)
 ┣ App.jsx            # Componente raíz y configuración de Rutas
 ┗ main.jsx           # Punto de entrada de la aplicación
```
## Covertura Test

<img width="1147" height="851" alt="{D0FFD97B-90E9-410D-BD89-94C52E82BE5E}" src="https://github.com/user-attachments/assets/e585b2b6-ab95-4664-b99a-44313281c877" />
<img width="1040" height="863" alt="{FD82CAC8-8D2C-41B3-B436-A5E7CC0DA9FC}" src="https://github.com/user-attachments/assets/ab2b9e33-8ddb-422d-bb79-435efbcab091" />
<img width="1153" height="339" alt="{E8C0EF45-0259-4FE0-8EF7-149488696E5E}" src="https://github.com/user-attachments/assets/fcbd30f3-9fc0-4738-9865-c5ab4987bfb5" />


## Cómo Ejecutar el Proyecto
Sigue estos pasos para configurar y correr la aplicación en tu entorno local.

Requisitos Previos
Asegúrate de tener instalado Node.js (versión 18 o superior) y npm.

### Pasos de Instalación y Ejecución
- Clonar el repositorio.
- Instala las dependencias: npm install
- Levantar el servidor de desarrollo: npm run dev
### Comandos de Test:
- Ejecutar pruebas unitarias: npm run test
- Generar reporte de cobertura de pruebas: npm run test:cov
- Compilar para producción: npm run build

## Material Complementario
- https://drive.google.com/drive/folders/1O1AH67Dr2NBIZvCtvRHHtCrjQp7M-8Rw?usp=sharing
