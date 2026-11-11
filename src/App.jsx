import { useState } from "react";
import { catalogo, generos } from "./data/catalogo";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import MovieGrid from "./components/MovieGrid";

export default function App() {
  // Estado de la aplicación: vive en App y se pasa a los hijos por props.
  const [busqueda, setBusqueda] = useState("");
  const [tipo, setTipo] = useState("todos"); // "todos" | "pelicula" | "serie"
  const [genero, setGenero] = useState("todos");

  // Valor derivado: no se guarda en el estado, se calcula en cada render.
  const resultados = catalogo.filter((item) => {
    const coincideTitulo = item.titulo
      .toLowerCase()
      .includes(busqueda.trim().toLowerCase());
    const coincideTipo = tipo === "todos" || item.tipo === tipo;
    const coincideGenero = genero === "todos" || item.genero === genero;
    return coincideTitulo && coincideTipo && coincideGenero;
  });

  return (
    <div className="app">
      <Header />
      <SearchBar valor={busqueda} onCambio={setBusqueda} />
      <FilterBar
        tipo={tipo}
        onTipo={setTipo}
        genero={genero}
        onGenero={setGenero}
        generos={generos}
      />
      <MovieGrid items={resultados} />
    </div>
  );
}
