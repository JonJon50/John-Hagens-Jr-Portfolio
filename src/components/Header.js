import Nav from "./Nav";
function Header() {
    return (
      <div class="headerstyle container flex-row justify-space-between-lg justify-center align-center">
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <h1>John Hagens Page</h1>
        <p>Coding for the Future!</p>
        </div>
        {/* <Nav></Nav> */}
      </div>
    );
  }
  export default Header 