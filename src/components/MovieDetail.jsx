import { useEffect } from "react";
import Poster from "./Poster";
import { textoDuracion } from "../utils/formato";

// Ventana modal con la información completa de un título.
export default function MovieDetail({ item, esFavorito, onFavorito, onCerrar }) {
  // Efecto: cerrar con la tecla Escape y bloquear el scroll del fondo.
  useEffect(() => {
    const alPresionar = (e) => {
      if (e.key === "Escape") onCerrar();
    };
    document.addEventListener("keydown", alPresionar);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", alPresionar);
      document.body.style.overflow = "";
    };
  }, [onCerrar]);

  const esPelicula = item.tipo === "pelicula";
  const dato = textoDuracion(item);

  return (
    // Clic en el fondo oscuro cierra; clic dentro del cuadro no (stopPropagation).
    <div className="modal" onClick={onCerrar}>
      <div
        className="modal__caja"
        role="dialog"
        aria-modal="true"
        aria-label={`Detalle de ${item.titulo}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__cerrar" onClick={onCerrar} aria-label="Cerrar">
          ✕
        </button>

        <Poster item={item} className="modal__poster" />

        <div className="modal__info">
          <h2 className="modal__titulo">{item.titulo}</h2>
          <p className="modal__meta">
            {esPelicula ? "Película" : "Serie"} · {item.genero} · {item.anio} ·{" "}
            {dato}
          </p>
          <p className="modal__sinopsis">{item.sinopsis}</p>
          <button
            className={`modal__fav ${esFavorito ? "modal__fav--activo" : ""}`}
            onClick={() => onFavorito(item.id)}
            aria-pressed={esFavorito}
          >
            {esFavorito ? "♥ En favoritos" : "♡ Agregar a favoritos"}
          </button>
        </div>
      </div>
    </div>
  );
}
