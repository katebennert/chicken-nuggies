import React, { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';

function Nav() {

    const [activeSection, setActiveSection] = useState('about');

    const scrollToSection = (section) => {
        scroller.scrollTo(section, {
          duration: 800,
          delay: 0
        });
        setActiveSection(section);
    };

    useEffect(() => {
        const sectionIds = ['about', 'projects', 'experience'];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.8 // Adjust as needed
            }
        );

        sectionIds.forEach((id) => {
            const target = document.getElementById(id);
            if (target) {
                observer.observe(target);
            }
        });

        return () => {
            sectionIds.forEach((id) => {
                const target = document.getElementById(id);
                if (target) {
                    observer.unobserve(target);
                }
            });
        };
    }, []);

    return (
        <nav className="flex flex-col justify-center items-center text-center">
            <ul className="text-donutBrown font-agbalumo text-2xl" >
                <li className={'mb-4'}>
                    <span className={`${activeSection === 'about' ? 'active-section' : ''}`} onClick={() => scrollToSection("about")}>about</span>
                </li>
                <li className="mb-4">
                    <span className={`${activeSection === 'projects' ? 'active-section' : ''}`} onClick={() => scrollToSection("projects")}>projects</span>
                </li>
                <li className="">
                    <span className={`${activeSection === 'experience' ? 'active-section' : ''}`} onClick={() => scrollToSection("experience")}>experience</span>
                </li>
            </ul>
        </nav>
    );
  }
  
  export default Nav;
  