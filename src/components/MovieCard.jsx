import Poster from "./Poster";

export default function MovieCard({ item, esFavorito, onFavorito, onSeleccionar }) {
  return (
    <article className="card">
      {/* Botón de favorito: va fuera del botón del póster para no anidar botones.
          Se coloca abajo a la derecha (junto al texto) para no tapar el póster. */}
      <button
        className={`card__fav ${esFavorito ? "card__fav--activo" : ""}`}
        onClick={() => onFavorito(item.id)}
        aria-pressed={esFavorito}
        aria-label={
          esFavorito
            ? `Quitar ${item.titulo} de favoritos`
            : `Agregar ${item.titulo} a favoritos`
        }
      >
        {esFavorito ? "♥" : "♡"}
      </button>

      <button
        className="card__abrir"
        onClick={() => onSeleccionar(item)}
        aria-label={`Ver detalle de ${item.titulo}`}
      >
        {/* Sin etiquetas encima: los pósters reales ya traen su título. */}
        <Poster item={item} className="card__poster" />
        <h2 className="card__titulo">{item.titulo}</h2>
        <p className="card__genero">
          {item.tipo === "pelicula" ? "Película" : "Serie"} · {item.genero}
        </p>
      </button>
    </article>
  );
}
