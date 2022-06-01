
import styled from "styled-components";
import SimpleSidebar from "./components/Drawer/Drawer";
import WithSubnavigation from "./components/Navbar/Navbar";

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;
function App() {
  return (
    <div className="App">
     <WithSubnavigation/>
     <br></br>
     <SimpleSidebar/>
    </div>
  );
}

export default App;
