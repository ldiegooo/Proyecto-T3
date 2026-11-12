const TIPOS = [
  { valor: "todos", etiqueta: "Todas" },
  { valor: "pelicula", etiqueta: "Películas" },
  { valor: "serie", etiqueta: "Series" },
];

export default function FilterBar({
  tipo,
  onTipo,
  genero,
  onGenero,
  generos,
  totalFavoritos,
}) {
  return (
    <div className="filters">
      <div className="chips">
        {TIPOS.map((t) => (
          <button
            key={t.valor}
            className={`chip ${tipo === t.valor ? "chip--activo" : ""}`}
            onClick={() => onTipo(t.valor)}
          >
            {t.etiqueta}
          </button>
        ))}
        <button
          className={`chip chip--fav ${tipo === "favoritos" ? "chip--activo" : ""}`}
          onClick={() => onTipo("favoritos")}
        >
          ♥ Favoritos ({totalFavoritos})
        </button>
      </div>

      <select
        className="select"
        aria-label="Filtrar por género"
        value={genero}
        onChange={(e) => onGenero(e.target.value)}
      >
        <option value="todos">Todos los géneros</option>
        {generos.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>
    </div>
  );
}
