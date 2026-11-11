// Catálogo local: arreglo de objetos (no hay backend ni API).
// "tipo" puede ser "pelicula" o "serie".
// "duracion" aplica a películas; "temporadas" aplica a series.
// "color" se usa para generar el póster (degradado) mientras no haya imágenes reales.
// Para usar imágenes reales, agrega un campo "poster" con la ruta (ej. "/posters/interstellar.jpg").

export const catalogo = [
  {
    id: 1,
    titulo: "Interstellar",
    tipo: "pelicula",
    genero: "Ciencia ficción",
    anio: 2014,
    duracion: "169 min",
    sinopsis:
      "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
    color: ["#1e3a8a", "#be185d"],
  },
  {
    id: 2,
    titulo: "Coco",
    tipo: "pelicula",
    genero: "Animación",
    anio: 2017,
    duracion: "105 min",
    sinopsis:
      "Un niño que sueña con ser músico llega a la Tierra de los Muertos para descubrir la historia de su familia.",
    color: ["#7c3aed", "#f97316"],
  },
  {
    id: 3,
    titulo: "Stranger Things",
    tipo: "serie",
    genero: "Misterio",
    anio: 2016,
    temporadas: 5,
    sinopsis:
      "Un grupo de amigos enfrenta fuerzas sobrenaturales y experimentos secretos en un pequeño pueblo de los años 80.",
    color: ["#7f1d1d", "#0f172a"],
  },
  {
    id: 4,
    titulo: "El origen",
    tipo: "pelicula",
    genero: "Ciencia ficción",
    anio: 2010,
    duracion: "148 min",
    sinopsis:
      "Un ladrón especializado en robar secretos a través de los sueños recibe la misión de plantar una idea en la mente de alguien.",
    color: ["#0f766e", "#1e293b"],
  },
  {
    id: 5,
    titulo: "Breaking Bad",
    tipo: "serie",
    genero: "Drama",
    anio: 2008,
    temporadas: 5,
    sinopsis:
      "Un profesor de química con una enfermedad grave se adentra en el mundo del narcotráfico para asegurar el futuro de su familia.",
    color: ["#166534", "#facc15"],
  },
  {
    id: 6,
    titulo: "Toy Story",
    tipo: "pelicula",
    genero: "Animación",
    anio: 1995,
    duracion: "81 min",
    sinopsis:
      "Los juguetes de un niño cobran vida cuando nadie los ve, y una rivalidad entre dos de ellos desencadena una gran aventura.",
    color: ["#0284c7", "#f59e0b"],
  },
  {
    id: 7,
    titulo: "Parásitos",
    tipo: "pelicula",
    genero: "Drama",
    anio: 2019,
    duracion: "132 min",
    sinopsis:
      "Una familia sin recursos se infiltra poco a poco en la vida de una familia adinerada, con consecuencias inesperadas.",
    color: ["#334155", "#65a30d"],
  },
  {
    id: 8,
    titulo: "The Office",
    tipo: "serie",
    genero: "Comedia",
    anio: 2005,
    temporadas: 9,
    sinopsis:
      "Un falso documental sobre el día a día de los empleados de una oficina de ventas de papel.",
    color: ["#1d4ed8", "#94a3b8"],
  },
  {
    id: 9,
    titulo: "Mad Max: Furia en el camino",
    tipo: "pelicula",
    genero: "Acción",
    anio: 2015,
    duracion: "120 min",
    sinopsis:
      "En un desierto postapocalíptico, una guerrera y un vagabundo huyen de un tirano a bordo de un camión blindado.",
    color: ["#c2410c", "#fbbf24"],
  },
  {
    id: 10,
    titulo: "Dark",
    tipo: "serie",
    genero: "Misterio",
    anio: 2017,
    temporadas: 3,
    sinopsis:
      "La desaparición de un niño en un pueblo alemán revela secretos que conectan a varias generaciones a través del tiempo.",
    color: ["#0f172a", "#ca8a04"],
  },
  {
    id: 11,
    titulo: "Spider-Man: Un nuevo universo",
    tipo: "pelicula",
    genero: "Animación",
    anio: 2018,
    duracion: "117 min",
    sinopsis:
      "Un joven de Brooklyn descubre que no es el único con poderes de araña cuando aparecen versiones de otras dimensiones.",
    color: ["#db2777", "#2563eb"],
  },
  {
    id: 12,
    titulo: "Juego de tronos",
    tipo: "serie",
    genero: "Fantasía",
    anio: 2011,
    temporadas: 8,
    sinopsis:
      "Varias familias nobles se disputan el control del trono de hierro mientras una amenaza antigua despierta en el norte.",
    color: ["#475569", "#b91c1c"],
  },
  {
    id: 13,
    titulo: "El laberinto del fauno",
    tipo: "pelicula",
    genero: "Fantasía",
    anio: 2006,
    duracion: "118 min",
    sinopsis:
      "En la España de la posguerra, una niña descubre un mundo mágico y debe superar tres pruebas.",
    color: ["#14532d", "#7c2d12"],
  },
  {
    id: 14,
    titulo: "Black Mirror",
    tipo: "serie",
    genero: "Ciencia ficción",
    anio: 2011,
    temporadas: 6,
    sinopsis:
      "Historias independientes que exploran el lado oscuro de la tecnología y su efecto en la sociedad.",
    color: ["#111827", "#6b7280"],
  },
  {
    id: 15,
    titulo: "Gladiador",
    tipo: "pelicula",
    genero: "Acción",
    anio: 2000,
    duracion: "155 min",
    sinopsis:
      "Un general romano traicionado se convierte en gladiador y busca vengarse del emperador que destruyó a su familia.",
    color: ["#92400e", "#d6a05b"],
  },
  {
    id: 16,
    titulo: "Friends",
    tipo: "serie",
    genero: "Comedia",
    anio: 1994,
    temporadas: 10,
    sinopsis:
      "Seis amigos viven juntos las alegrías y los tropiezos de la vida adulta en Nueva York.",
    color: ["#9333ea", "#facc15"],
  },
  {
    id: 17,
    titulo: "Intensamente",
    tipo: "pelicula",
    genero: "Animación",
    anio: 2015,
    duracion: "95 min",
    sinopsis:
      "Las emociones dentro de la mente de una niña intentan guiarla cuando su familia se muda a otra ciudad.",
    color: ["#0ea5e9", "#f472b6"],
  },
  {
    id: 18,
    titulo: "Chernobyl",
    tipo: "serie",
    genero: "Drama",
    anio: 2019,
    temporadas: 1,
    sinopsis:
      "Recrea el desastre nuclear de 1986 y los esfuerzos de quienes intentaron contener sus consecuencias.",
    color: ["#3f6212", "#44403c"],
  },
  {
    id: 19,
    titulo: "Gravedad",
    tipo: "pelicula",
    genero: "Ciencia ficción",
    anio: 2013,
    duracion: "91 min",
    sinopsis:
      "Dos astronautas quedan a la deriva en el espacio tras un accidente y luchan por regresar a la Tierra.",
    color: ["#1e1b4b", "#38bdf8"],
  },
  {
    id: 20,
    titulo: "Avatar: La leyenda de Aang",
    tipo: "serie",
    genero: "Animación",
    anio: 2005,
    temporadas: 3,
    sinopsis:
      "Un joven con el poder de dominar los cuatro elementos debe detener a una nación que busca conquistar el mundo.",
    color: ["#ea580c", "#0891b2"],
  },
];

// Valores derivados del catálogo, para no repetirlos a mano en los filtros.
export const generos = [...new Set(catalogo.map((item) => item.genero))].sort();
