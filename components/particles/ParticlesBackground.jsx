import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div className="particlesContainer">
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "#000000", // Fallback color for older browsers
                            },
                            image: "url('/dd-2.png')", // Background image
                            position: "center",
                            repeat: "no-repeat",
                            size: "cover",
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "grab",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 1,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                                grab: {
                                    distance: 100,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#DD0EE2",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 300,
                                enable: false,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: "top",
                                enable: true,
                                outModes: {
                                    default: "out",
                                },
                                random: true,
                                speed: 2,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 100,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                                polygon: {
                                    nb_sides: 8, // Octagon
                                },
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </div>
    );
};

export default ParticlesBackground;
