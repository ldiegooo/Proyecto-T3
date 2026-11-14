import Poster from "./Poster";
import { textoDuracion } from "../utils/formato";

// Título destacado en la parte superior del catálogo.
export default function Hero({ item, esFavorito, onFavorito, onVerDetalle }) {
  return (
    <section className="hero" aria-label="Título destacado">
      <div className="hero__texto">
        <span className="hero__etiqueta">Destacado</span>
        <h2 className="hero__titulo">{item.titulo}</h2>
        <p className="hero__meta">
          {item.tipo === "pelicula" ? "Película" : "Serie"} · {item.genero} ·{" "}
          {item.anio} · {textoDuracion(item)}
        </p>
        <p className="hero__sinopsis">{item.sinopsis}</p>
        <div className="hero__acciones">
          <button className="btn btn--primario" onClick={() => onVerDetalle(item)}>
            Ver detalle
          </button>
          <button
            className="btn"
            onClick={() => onFavorito(item.id)}
            aria-pressed={esFavorito}
          >
            {esFavorito ? "♥ En favoritos" : "♡ Favorito"}
          </button>
        </div>
      </div>
      <Poster item={item} className="hero__poster" />
    </section>
  );
}
