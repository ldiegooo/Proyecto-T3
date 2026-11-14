// Catálogo local: arreglo de objetos (no hay backend ni API).
// "tipo" puede ser "pelicula" o "serie".
// "duracion" aplica a películas; "temporadas" aplica a series.
// "poster" es la ruta de la imagen dentro de public/ (ej. public/posters/interstellar.jpeg).
// Si el archivo no existe, la tarjeta muestra un degradado con el título usando "color".
// "destacado: true" marca el título que aparece grande arriba (solo uno).
// Los "id" no se repiten ni se reutilizan: los favoritos guardados se identifican por id.

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
    poster: "posters/interstellar.jpeg",
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
    poster: "posters/coco.jpeg",
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
    poster: "posters/stranger_things.jpeg",
    color: ["#0f172a", "#3b82f6"],
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
    poster: "posters/breaking_bad.jpeg",
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
    poster: "posters/toy_story.jpeg",
    color: ["#0369a1", "#7dd3fc"],
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
    poster: "posters/the_office.jpeg",
    color: ["#1d4ed8", "#93c5fd"],
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
    poster: "posters/dark.jpeg",
    color: ["#0f172a", "#6366f1"],
  },
  {
    id: 11,
    titulo: "The Amazing Spider-Man",
    tipo: "pelicula",
    genero: "Acción",
    anio: 2012,
    duracion: "136 min",
    sinopsis:
      "Peter Parker, un adolescente que obtiene poderes tras la picadura de una araña, investiga el pasado de sus padres y se enfrenta al Lagarto.",
    poster: "posters/spiderman.jpeg",
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
    poster: "posters/got.jpeg",
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
    poster: "posters/el_laberinto_del_fauno.jpeg",
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
    poster: "posters/black_mirror.jpeg",
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
    poster: "posters/gladiador.jpeg",
    color: ["#1e40af", "#93c5fd"],
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
    poster: "posters/chernobyl.jpeg",
    color: ["#0c4a6e", "#38bdf8"],
  },
  {
    id: 21,
    titulo: "Shrek",
    tipo: "pelicula",
    genero: "Animación",
    anio: 2001,
    duracion: "90 min",
    sinopsis:
      "Un ogro gruñón que solo quiere vivir tranquilo en su pantano debe rescatar a una princesa para recuperar su hogar, acompañado por un burro parlanchín.",
    poster: "posters/shrek.jpeg",
    color: ["#14532d", "#60a5fa"],
  },
  {
    id: 22,
    titulo: "Up",
    tipo: "pelicula",
    genero: "Animación",
    anio: 2009,
    duracion: "96 min",
    sinopsis:
      "Un viudo de edad avanzada ata miles de globos a su casa y emprende el viaje de sus sueños a Sudamérica, sin saber que un niño explorador viaja con él.",
    poster: "posters/up.jpeg",
    color: ["#0369a1", "#7dd3fc"],
  },
  {
    id: 23,
    titulo: "WALL·E",
    tipo: "pelicula",
    genero: "Animación",
    anio: 2008,
    duracion: "98 min",
    sinopsis:
      "Un pequeño robot que limpia una Tierra abandonada se enamora de una sonda y la sigue por el espacio, en una aventura que puede cambiar el destino de la humanidad.",
    poster: "posters/walle.jpeg",
    color: ["#1e3a8a", "#38bdf8"],
  },
  {
    id: 24,
    titulo: "Dumbo",
    tipo: "pelicula",
    genero: "Animación",
    anio: 1941,
    duracion: "64 min",
    sinopsis:
      "Un pequeño elefante del circo, burlado por sus enormes orejas, descubre con ayuda de un ratón que esas orejas le permiten volar.",
    poster: "posters/dumbo.jpeg",
    color: ["#4338ca", "#a5b4fc"],
  },
  {
    id: 25,
    titulo: "Son como niños",
    tipo: "pelicula",
    genero: "Comedia",
    anio: 2010,
    duracion: "102 min",
    sinopsis:
      "Cinco amigos que fueron compañeros de basquetbol en la infancia se reencuentran con sus familias para pasar un fin de semana en un lago tras la muerte de su antiguo entrenador.",
    poster: "posters/son_como_ninos.jpeg",
    color: ["#0284c7", "#bae6fd"],
  },
  {
    id: 26,
    titulo: "Malcolm el de en medio",
    tipo: "serie",
    genero: "Comedia",
    anio: 2000,
    temporadas: 7,
    sinopsis:
      "Malcolm, un niño genio, intenta sobrevivir al caos de su familia disfuncional, con tres hermanos más y unos padres siempre desbordados.",
    poster: "posters/malcom_in_the_middle.jpeg",
    color: ["#1d4ed8", "#93c5fd"],
  },
  {
    id: 27,
    titulo: "IT: Bienvenidos a Derry",
    tipo: "serie",
    genero: "Terror",
    anio: 2025,
    temporadas: 1,
    sinopsis:
      "Precuela de la película «It», ambientada en 1962: la desaparición de un niño en el pueblo de Derry, Maine, despierta un mal antiguo que acecha a sus habitantes.",
    poster: "posters/welcome_to_derry.jpeg",
    color: ["#0f172a", "#3b82f6"],
  },
];

// Valores derivados del catálogo, para no repetirlos a mano en los filtros.
export const generos = [...new Set(catalogo.map((item) => item.genero))].sort();
