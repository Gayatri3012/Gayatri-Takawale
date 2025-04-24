import React, { useContext } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { DarkModeContext } from "../context/DarkModeContext";

const ParticleBackground = () => {

    const {darkMode} = useContext(DarkModeContext);
    const particlesInit = async (main) => {
    await loadSlim(main);
  };

  const backgroundColor = darkMode ? '#111828' : '#f8fcff';
  const particleColor = darkMode ? '#3b5e8e' : '#acd0fb';

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: {
            value: backgroundColor, 
          },
        },
        particles: {
          number: {
            value: 15,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: particleColor,
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
            random: true,
          },
          size: {
            value: { min: 3, max: 5 },
          },
          move: {
            enable: true,
            direction: "top", 
            speed: 0.3,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
