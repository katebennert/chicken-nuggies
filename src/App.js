import './custom-styles.css';
import Home from "./Home";
import Nav from "./Nav";
import Experience from "./Experience";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev, faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="font-inter flex flex-col lg:flex-row"> {/* APP */}
      <div className="flex-shrink-0 w-full lg:w-1/2 order-1 border lg:mr-10 pl-6 pr-6 md:pl-10 md:pr-10 lg:pr-20"> {/* LEFT SIDE */}
        <div className="sticky top-0"> {/* STICKY */}
          <div className="border border-green-500 mb-4 pt-10 lg:pt-20 lg:text-right"> {/* HOME */}
            <Home />
          </div>
          <div className="hidden lg:block border border-yellow-500 mb-4 lg:text-right"> {/* NAV */}
            <Nav />
          </div>
          <div className="border border-pink-500 flex flex-row space-x-8 lg:space-x-14 lg:justify-end">
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: '2rem' }} />
            <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: '2rem' }} />
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '2rem' }} />
            <FontAwesomeIcon icon={faDev} style={{ fontSize: '2rem' }} />
          </div>
        </div>
      </div>
      <div className="flex-grow order-2 pl-6 pr-6 md:pt-10 lg:pt-20 lg:w-1/2"> {/* RIGHT SIDE SCROLL*/}
        <Experience />
      </div>
    </div>
  );
  
}

export default App;
