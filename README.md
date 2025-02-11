# Anthurium - Docs

Landing page moderna y responsive. Usa Next.js (con Turbopack), TypeScript, shadcn y Tailwind CSS.

## Configuración del Proyecto

### Instalación

```bash
// cloná el repo
git clone https://github.com/NBN7/anthurium

// navegá al dir del proyecto
cd anthurium

// instalá las dependencias
npm install

// iniciá el server
npm run dev
```

## Personalización

### Constantes

Para personalizar el contenido de la landing page, podés modificar los archivos en la carpeta `src/constants`. Cada archivo contiene diferentes aspectos del contenido de la página.

**Importante:** Dentro de un archivo de constantes, no se puede importar otra constante para ser usada como variable. Esto resulta en un error del tipo "la variable X no se puede usar antes de inicializarse".

### Colores

Para modificar los colores del tema, edita el archivo `tailwind.config.ts` en la raíz del proyecto. Acá podés ajustar el color primario, secundario, background, foreground, etc.

## Estructura del Proyecto

- `src/app/` - Contiene los componentes principales de la app.
- `src/assets/` - Almacena imágenes, íconos, fuentes y otros recursos estáticos.
- `src/components/` - Componentes reutilizables que pueden ser utilizados en distintas partes de la app.
- `src/constants/` - Contiene constantes globales usadas en la app, como configuraciones, rutas o valores predefinidos.
- `src/hooks/` - Hooks personalizados para la gestión de lógica reutilizable en la app.
- `src/lib/` - Se genera automáticamente con la inicialización de shadcn para usar la función `cn`.
- `src/types/` - Definiciones de tipos TypeScript para asegurar el tipado de los datos en la app.

### A tener en cuenta

Todas las carpetas incluyen un archivo `index.ts`, en el cual se importan y exportan todos los archivos dentro de la carpeta. Esto facilita la importación de módulos en otros archivos de la aplicación. Sin embargo, en ciertos casos, los componentes deben importarse directamente debido al uso de `'use client'` en Next.js.

_Hecho con ❤️ por Nacho_
