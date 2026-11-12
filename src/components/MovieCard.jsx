export default function MovieCard({ item, esFavorito, onFavorito, onSeleccionar }) {
  const [c1, c2] = item.color;

  // Si hay imagen real se usa; si no, se muestra un degradado con el título.
  const estiloPoster = item.poster
    ? { backgroundImage: `url(${item.poster})` }
    : { backgroundImage: `linear-gradient(160deg, ${c1}, ${c2})` };

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
        <div className="card__poster" style={estiloPoster}>
          {!item.poster && (
            <span className="card__poster-titulo">{item.titulo}</span>
          )}
          <span className="card__tipo">
            {item.tipo === "pelicula" ? "Película" : "Serie"}
          </span>
        </div>
        <h2 className="card__titulo">{item.titulo}</h2>
        <p className="card__genero">{item.genero}</p>
      </button>
    </article>
  );
}
