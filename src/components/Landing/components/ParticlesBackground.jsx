import React, { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { PARTICLES_CONFIG } from '../../../config/constants';

const ParticlesBackground = () => {
    const prefersReducedMotion = useMemo(
        () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        []
    );

    const particlesInit = useCallback(async (main) => {
        await loadSlim(main);
    }, []);

    if (prefersReducedMotion) {
        return null;
    }

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            className="particles"
            options={PARTICLES_CONFIG}
        />
    );
};

export default ParticlesBackground;
