import { useEffect, useState } from "react";
import { catalogo, generos } from "./data/catalogo";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import MovieGrid from "./components/MovieGrid";
import MovieDetail from "./components/MovieDetail";

const CLAVE_FAVORITOS = "cinespot-favoritos";

// Lee los favoritos guardados (solo ids). Si no hay nada o falla, arranca vacío.
function cargarFavoritos() {
  try {
    const guardado = JSON.parse(localStorage.getItem(CLAVE_FAVORITOS));
    return Array.isArray(guardado) ? guardado : [];
  } catch {
    return [];
  }
}

export default function App() {
  // Estado de la aplicación: vive en App y se pasa a los hijos por props.
  const [busqueda, setBusqueda] = useState("");
  const [tipo, setTipo] = useState("todos"); // "todos" | "pelicula" | "serie"
  const [genero, setGenero] = useState("todos");
  const [vista, setVista] = useState("catalogo"); // "catalogo" | "favoritos"
  const [seleccionado, setSeleccionado] = useState(null); // item abierto en el detalle
  const [favoritos, setFavoritos] = useState(cargarFavoritos); // arreglo de ids

  // Efecto: cada vez que cambian los favoritos se guardan en localStorage.
  useEffect(() => {
    try {
      localStorage.setItem(CLAVE_FAVORITOS, JSON.stringify(favoritos));
    } catch {
      // Si el navegador bloquea el almacenamiento, la app sigue funcionando.
    }
  }, [favoritos]);

  // Marca o desmarca: si el id ya está lo quita, si no, lo agrega.
  const alternarFavorito = (id) => {
    setFavoritos((actuales) =>
      actuales.includes(id)
        ? actuales.filter((f) => f !== id)
        : [...actuales, id]
    );
  };

  // Valores derivados: no se guardan en el estado, se calculan en cada render.
  const resultados = catalogo.filter((item) => {
    const coincideTitulo = item.titulo
      .toLowerCase()
      .includes(busqueda.trim().toLowerCase());
    const coincideTipo = tipo === "todos" || item.tipo === tipo;
    const coincideGenero = genero === "todos" || item.genero === genero;
    return coincideTitulo && coincideTipo && coincideGenero;
  });
  const listaFavoritos = catalogo.filter((item) => favoritos.includes(item.id));

  const enFavoritos = vista === "favoritos";

  return (
    <div className="app">
      <Header
        vista={vista}
        onVista={setVista}
        totalFavoritos={favoritos.length}
      />

      {enFavoritos ? (
        <>
          <h2 className="seccion-titulo">Mis favoritos</h2>
          <MovieGrid
            items={listaFavoritos}
            favoritos={favoritos}
            onFavorito={alternarFavorito}
            onSeleccionar={setSeleccionado}
            mensajeVacio="Aún no tienes favoritos. Toca el corazón de una tarjeta para agregarla."
          />
        </>
      ) : (
        <>
          <SearchBar valor={busqueda} onCambio={setBusqueda} />
          <FilterBar
            tipo={tipo}
            onTipo={setTipo}
            genero={genero}
            onGenero={setGenero}
            generos={generos}
          />
          <MovieGrid
            items={resultados}
            favoritos={favoritos}
            onFavorito={alternarFavorito}
            onSeleccionar={setSeleccionado}
          />
        </>
      )}

      {seleccionado && (
        <MovieDetail
          item={seleccionado}
          esFavorito={favoritos.includes(seleccionado.id)}
          onFavorito={alternarFavorito}
          onCerrar={() => setSeleccionado(null)}
        />
      )}
    </div>
  );
}
