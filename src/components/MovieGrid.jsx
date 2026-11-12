import MovieCard from "./MovieCard";

export default function MovieGrid({
  items,
  favoritos,
  onFavorito,
  onSeleccionar,
  mensajeVacio = "No se encontraron resultados.",
}) {
  if (items.length === 0) {
    return <p className="vacio">{mensajeVacio}</p>;
  }

  return (
    <section className="grid">
      {items.map((item) => (
        <MovieCard
          key={item.id}
          item={item}
          esFavorito={favoritos.includes(item.id)}
          onFavorito={onFavorito}
          onSeleccionar={onSeleccionar}
        />
      ))}
    </section>
  );
}
