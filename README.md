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

<img width="756" height="840" alt="{DC9FF535-C3D8-46F8-95A3-E352DAFF443F}" src="https://github.com/user-attachments/assets/32587915-42bf-49d4-be0c-d1b4f3dcb470" />
<img width="742" height="651" alt="{FF8E1514-FD02-4428-8DBB-1A73B17EF96B}" src="https://github.com/user-attachments/assets/b47633a0-f5dc-46c2-a85f-3cc98dc91a35" />

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
