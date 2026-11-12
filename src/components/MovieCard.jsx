import Poster from "./Poster";

export default function MovieCard({ item, esFavorito, onFavorito, onSeleccionar }) {
  return (
    <article className="card">
      {/* Botón de favorito: va fuera del botón del póster para no anidar botones. */}
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
        <Poster item={item} className="card__poster">
          <span className="card__tipo">
            {item.tipo === "pelicula" ? "Película" : "Serie"}
          </span>
        </Poster>
        <h2 className="card__titulo">{item.titulo}</h2>
        <p className="card__genero">{item.genero}</p>
      </button>
    </article>
  );
}
