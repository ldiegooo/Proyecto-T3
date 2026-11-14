// Opciones de ordenamiento del catálogo.
// "comparar" es la función que recibe .sort(); en "recomendado" es null y se conserva el orden original.
export const ORDENES = [
  { valor: "recomendado", etiqueta: "Recomendados", comparar: null },
  { valor: "anio-desc", etiqueta: "Más recientes", comparar: (a, b) => b.anio - a.anio },
  { valor: "anio-asc", etiqueta: "Más antiguos", comparar: (a, b) => a.anio - b.anio },
  {
    valor: "titulo-asc",
    etiqueta: "Título A → Z",
    comparar: (a, b) => a.titulo.localeCompare(b.titulo, "es"),
  },
  {
    valor: "titulo-desc",
    etiqueta: "Título Z → A",
    comparar: (a, b) => b.titulo.localeCompare(a.titulo, "es"),
  },
];
