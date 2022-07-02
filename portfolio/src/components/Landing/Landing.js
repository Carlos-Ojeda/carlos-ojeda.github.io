import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import SaluteAnimation from './SaluteAnimation/SaluteAnimation';

function Header() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
    };

    return (
        <div className="landing">
            <Particles
                init={particlesInit}
                loaded={particlesLoaded}
                className={"particles"}
                options={{
                    fpsLimit: 60,
                    fullScreen: false,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "grab",
                            },
                            resize: true,
                        }
                    },
                    particles: {
                        color: {
                            value: "#FFFFFF",
                        },
                        links: {
                            color: "#FFFFFF",
                            distance: 200,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 3,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 30,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 3,
                        },
                    },
                    detectRetina: true,
                }}
            />

            <div>
                <SaluteAnimation word="Hi There!"/>
            </div>
        </div>
    );
  }
  
  export default Header;
  