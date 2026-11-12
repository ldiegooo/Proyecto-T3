# CineSpot – Explorador de películas y series

Proyecto T3 (Programación del lado del cliente – Manejo de Frameworks).

## Tecnología seleccionada

- **React 18** con **Vite** como herramienta de desarrollo.
- Estilos con CSS plano (cuadrícula adaptable con CSS Grid).
- Sin backend ni API: los datos están en `src/data/catalogo.js`.

## Instalación y ejecución

Requisitos: Node.js 18 o superior.

```bash
npm install
npm run dev
```

Abrir la dirección que muestra la terminal (normalmente http://localhost:5173).

## Componentes

| Componente | Función |
|---|---|
| `App` | Componente raíz. Guarda el estado (búsqueda, tipo, género, vista, título seleccionado y favoritos) y calcula las listas filtradas. |
| `Header` | Encabezado con el nombre de la aplicación y navegación Catálogo / Favoritos (con contador). |
| `SearchBar` | Input controlado para buscar por título. |
| `FilterBar` | Botones para filtrar por tipo (todas / películas / series) y selector de género. |
| `MovieGrid` | Cuadrícula que recorre la lista y muestra un mensaje si no hay resultados. |
| `MovieCard` | Tarjeta con póster, título y género. Abre el detalle al hacer clic y tiene botón de favorito (corazón). |
| `MovieDetail` | Ventana modal con sinopsis, año y duración o temporadas. Se cierra con ✕, Escape o clic fuera. |

## Conceptos de React utilizados

- **Componentes y props:** `App` pasa datos y funciones a sus hijos.
- **Estado (`useState`):** `busqueda`, `tipo`, `genero`, `vista`, `seleccionado` y `favoritos` (arreglo de ids).
- **Efectos (`useEffect`):** guarda los favoritos en `localStorage` y maneja la tecla Escape en el modal.
- **Renderizado condicional:** alterna entre catálogo y favoritos, y muestra el modal solo si hay un título seleccionado.
- **Eventos:** `onChange` en el input y el selector, `onClick` en los botones.
- **Renderizado dinámico:** `.filter()` y `.map()` con `key` para listar tarjetas.

## Avance actual

- [x] Catálogo de 20 títulos (arreglo de objetos)
- [x] Tarjetas con imagen, título y género
- [x] Búsqueda por título
- [x] Filtros por tipo y género
- [x] Detalle al seleccionar una tarjeta
- [x] Marcar y desmarcar favoritos (se conservan al recargar)
- [x] Sección de favoritos
- [ ] Pruebas en distintos tamaños de pantalla
