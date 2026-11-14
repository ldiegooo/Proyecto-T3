// Duración de una película ("169 min") o número de temporadas de una serie ("5 temporadas").
export function textoDuracion(item) {
  if (item.tipo === "pelicula") return item.duracion;
  return `${item.temporadas} ${item.temporadas === 1 ? "temporada" : "temporadas"}`;
}
