function Header() {
  return (
    <header className="background-header">
      <nav>
        <div className="leftWrapper"></div>
        <div className="rigthWrapper">
          <a href="!#">Serviços</a>
          <a href="!#">Equipes</a>
          <a href="!#">Contatos</a>
        </div>
      </nav>
      <div className="banner">
        <h1 className="title one" translate="no">
          BARBEARIA BLADE
        </h1>
        <h2 className="title two" translate="no">
          ESTD. 2018
        </h2>
        <span className="title sublime pointer">Agende um horário{"->"}</span>
      </div>
    </header>
  );
}

export default Header;
