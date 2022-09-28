//components
import Header from "./components/Header";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
    return (
        <div className="main-component">
            <Header />
            <ParticlesBackground />
            <div className="main-header">
                <div>
                    <h1>
                        <span className="main-header-line1">
                            Hi, <br></br>
                        </span>
                        I'm a Web developer
                    </h1>
                    <div className="sub-header">
                        <p>Building Spectacular Sites</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
