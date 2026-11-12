import { useState } from "react";

// Póster con imagen real. Si no hay imagen o no carga, muestra el degradado con el título.
export default function Poster({ item, className, children }) {
  const [fallo, setFallo] = useState(false);
  const [c1, c2] = item.color;
  const hayImagen = item.poster && !fallo;

  return (
    <div
      className={className}
      style={{ backgroundImage: `linear-gradient(160deg, ${c1}, ${c2})` }}
    >
      {hayImagen ? (
        <img
          className="poster__img"
          src={item.poster}
          alt={`Póster de ${item.titulo}`}
          loading="lazy"
          onError={() => setFallo(true)}
        />
      ) : (
        <span className="card__poster-titulo">{item.titulo}</span>
      )}
      {children}
    </div>
  );
}
