import "./App.css";
import LoginSignup from "./Components/Login-Signup/LoginSignup";
import Allroutes from "./Allroutes/Allroutes";
import Cart from "./Components/Cart/Cart";
import HomePage from "./Components/Homepage/Homapage";
import Singleproductpage from "./Components/Singleproductpage/Singleproductpage";
import SearchPage from "./Components/Searchpage/SearchPage";
function App() {
  return (
    <div className="App">
  {/* <Allroutes/> */}
   {/* <LoginSignup/> */}
   {/* <Singleproductpage/> */}
   <SearchPage/>
    </div>
  );
}

export default App;
