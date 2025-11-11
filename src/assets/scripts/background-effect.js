particlesJS('particles-js', {
    particles: {
        number: {
            value: 90,
            density: { enable: true, value_area: 800 },
        },
        color: { value: '#ffffff' },
        shape: {
            type: 'circle',
            stroke: { width: 0, color: '#000000' },
        },
        opacity: {
            value: 0.4,
            random: false,
        },
        size: {
            value: 3,
            random: true,
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.2,
            width: 1,
        },
        move: {
            enable: true,
            speed: 1.2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
        },
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: false },
        },
        modes: {
            grab: { distance: 120, line_linked: { opacity: 0.5 } },
        },
    },
    retina_detect: true,
});
