import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Handle both navigation and page refresh
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            });
        };

        // Scroll on route changes
        scrollToTop();

        // Scroll on page refresh
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        window.addEventListener('load', scrollToTop);
        return () => window.removeEventListener('load', scrollToTop);
    }, [pathname]);

    return null;
};

export default ScrollToTop; 