# Guía de Instalación del Proyecto

## Requisitos Previos
- Node.js (versión 16 o superior)
- npm o yarn

## Proceso de Instalación

### 1. Crear el Proyecto
Ejecuta el siguiente comando para crear un nuevo proyecto con Vite:

```bash
npm create vite@latest
```

Durante la configuración, se te pedirá definir:
- **Nombre del proyecto**: Ingresa el nombre que desees para tu proyecto
- **Nombre del paquete**: Confirma o modifica el nombre del paquete
- **Framework**: Selecciona **React**
- **Lenguaje**: Selecciona **JavaScript**

### 2. Instalar Dependencias
Navega al directorio del proyecto e instala las dependencias:

```bash
cd nombre-del-proyecto
npm install
```

### 3. Iniciar el Servidor de Desarrollo
Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

El servidor se iniciará por defecto en `http://localhost:5173`

### 4. Instalar Bootstrap (Opcional)
Si necesitas Bootstrap en tu proyecto, instala las dependencias adicionales:

```bash
npm install bootstrap @popperjs/core
```

## Comandos Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter (si está configurado)

## Estructura del Proyecto

```
nombre-del-proyecto/
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## Próximos Pasos

1. Personaliza el archivo `src/App.jsx` con tu contenido
2. Añade tus componentes en la carpeta `src/components/`
3. Configura las rutas si es necesario
4. Personaliza los estilos en los archivos CSS

¡Tu proyecto está listo para comenzar el desarrollo!