import MovieCard from "./MovieCard";

export default function MovieGrid({ items }) {
  if (items.length === 0) {
    return <p className="vacio">No se encontraron resultados.</p>;
  }

  return (
    <section className="grid">
      {items.map((item) => (
        <MovieCard key={item.id} item={item} />
      ))}
    </section>
  );
}
