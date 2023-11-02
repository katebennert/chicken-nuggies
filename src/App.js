import Home from "./Home";
import Nav from "./Nav";
import Scroll from "./Scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


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
        <div className="border border-pink-500">
        <FontAwesomeIcon icon={faHeart} />

        </div>
      </div>
      <div className="border border-red-500 flex-grow p-4 order-2 m-4 lg:m-10"> {/* RIGHT SIDE */}
        <Scroll />
      </div>
    </div>
  );
  
}

export default App;
