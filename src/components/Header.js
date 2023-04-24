function Header() {
  return (
    <div className="headerstyle container flex-row justify-center align-center">
      <div style={{ font: "", display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
        <h1 style={{ textShadow: '2px 2px 3px #FFFFFF', fontFamily: 'Apple Chancery, sans-serif' }}>John Hagens Portfolio</h1>
        <p>Coding for the Future!</p>
      </div>
      {/* <Nav></Nav> */}
    </div>
  );
}
export default Header;
