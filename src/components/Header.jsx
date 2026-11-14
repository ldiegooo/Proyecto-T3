export default function Header() {
  return (
    <header className="header">
      {/* El h1 conserva el nombre para lectores de pantalla; visualmente se ve el logo. */}
      <h1 className="logo">
        <img
          className="logo__img"
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="PonyCine"
        />
      </h1>
    </header>
  );
}
