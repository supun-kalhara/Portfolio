//components
import Profile from "./components/Profile";
import Work from "./components/Work";
import Home from "./components/Home";
import Contact from "./components/Contact";


function App() {

    return (
        <div className="main-component">
            <div>
                <Home />
            </div>
            <div>
                <Profile />
            </div>
            <div>
                <Work />
            </div>
            <div>
                <Contact />
            </div>
        </div>
    );
}

export default App;
