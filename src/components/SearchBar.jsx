// Input controlado: el valor viene del estado de App y cada tecla lo actualiza.
export default function SearchBar({ valor, onCambio }) {
  return (
    <input
      className="search"
      type="search"
      placeholder="Buscar películas o series..."
      aria-label="Buscar por título"
      value={valor}
      onChange={(e) => onCambio(e.target.value)}
    />
  );
}
