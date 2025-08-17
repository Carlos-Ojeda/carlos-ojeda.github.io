import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { PARTICLES_CONFIG } from '../../../config/constants';

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (main) => {
        await loadSlim(main);
    }, []);

    const particlesLoaded = useCallback((container) => {
        // Optional: Add any initialization logic here
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            className="particles"
            options={PARTICLES_CONFIG}
        />
    );
};

export default ParticlesBackground;
