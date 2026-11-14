// Catálogo local: arreglo de objetos (no hay backend ni API).
// "tipo" puede ser "pelicula" o "serie".
// "duracion" aplica a películas; "temporadas" aplica a series.
// "poster" es la ruta de la imagen dentro de public/ (ej. public/posters/interstellar.jpg).
// Si el archivo no existe, la tarjeta muestra un degradado con el título usando "color".
// "destacado: true" marca el título que aparece grande arriba (solo uno).

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
    destacado: true, // aparece grande arriba, en "Destacado"
    poster: "posters/interstellar.jpg",
    color: ["#1e3a8a", "#60a5fa"],
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
    poster: "posters/coco.jpg",
    color: ["#312e81", "#818cf8"],
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
    poster: "posters/stranger-things.jpg",
    color: ["#0f172a", "#3b82f6"],
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
    poster: "posters/el-origen.jpg",
    color: ["#164e63", "#22d3ee"],
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
    poster: "posters/breaking-bad.jpg",
    color: ["#1e3a8a", "#38bdf8"],
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
    poster: "posters/toy-story.jpg",
    color: ["#0369a1", "#7dd3fc"],
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
    poster: "posters/parasitos.jpg",
    color: ["#1e293b", "#60a5fa"],
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
    poster: "posters/the-office.jpg",
    color: ["#1d4ed8", "#93c5fd"],
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
    poster: "posters/mad-max-furia-en-el-camino.jpg",
    color: ["#172554", "#3b82f6"],
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
    poster: "posters/dark.jpg",
    color: ["#0f172a", "#6366f1"],
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
    poster: "posters/spider-man-un-nuevo-universo.jpg",
    color: ["#3730a3", "#60a5fa"],
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
    poster: "posters/juego-de-tronos.jpg",
    color: ["#1e293b", "#3b82f6"],
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
    poster: "posters/el-laberinto-del-fauno.jpg",
    color: ["#134e4a", "#38bdf8"],
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
    poster: "posters/black-mirror.jpg",
    color: ["#0f172a", "#64748b"],
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
    poster: "posters/gladiador.jpg",
    color: ["#1e40af", "#93c5fd"],
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
    poster: "posters/friends.jpg",
    color: ["#4338ca", "#a5b4fc"],
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
    poster: "posters/intensamente.jpg",
    color: ["#0284c7", "#bae6fd"],
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
    poster: "posters/chernobyl.jpg",
    color: ["#0c4a6e", "#38bdf8"],
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
    poster: "posters/gravedad.jpg",
    color: ["#1e1b4b", "#60a5fa"],
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
    poster: "posters/avatar-la-leyenda-de-aang.jpg",
    color: ["#075985", "#2dd4bf"],
  },
];

// Valores derivados del catálogo, para no repetirlos a mano en los filtros.
export const generos = [...new Set(catalogo.map((item) => item.genero))].sort();
