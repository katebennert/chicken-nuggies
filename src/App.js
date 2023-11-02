import Home from "./Home";
import Nav from "./Nav";
import Experience from "./Experience";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev, faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="font-inter bg-bgBeige min-h-screen flex flex-col lg:flex-row"> {/* APP */}
      <div className="flex-shrink-0 w-full lg:w-1/4 p-4 order-1 p-4 md:p-8"> {/* LEFT SIDE */}
        <div className="border border-green-500 mb-4"> {/* HOME */}
          <Home />
        </div>
        <div className="border border-yellow-500"> {/* NAV */}
          <Nav />
        </div>
        <div className="border border-pink-500"> {/* ICONS */}
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faDev} />
        </div>
      </div>
      <div className="border border-red-500 flex-grow p-4 order-2 m-4 lg:m-10"> {/* RIGHT SIDE SCROLL*/}
        <Experience />
      </div>
    </div>
  );
  
}

export default App;
