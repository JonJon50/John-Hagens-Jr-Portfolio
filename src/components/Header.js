import Nav from "./Nav";
function Header() {
    return (
      <div class="headerstyle container flex-row justify-space-between-lg justify-center align-center">
        <div style={{  font: "",display: "flex", justifyContent: "space-between", width: "100%" }}>
        <h1 style={{textShadow: '2px 2px 3px #FFFFFF', fontFamily: 'Apple Chancery, sans-serif'}}>John Hagens Portfolio</h1>
        <p>Coding for the Future!</p>
        </div>
        {/* <Nav></Nav> */}
      </div>
    );
  }
  export default Header 