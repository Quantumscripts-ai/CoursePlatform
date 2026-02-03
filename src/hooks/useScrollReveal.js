/**
 * useScrollReveal Hook
 * Triggers animations when elements enter the viewport
 */
import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(options = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const { threshold = 0.1, triggerOnce = true } = options;

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold, triggerOnce]);

    return [ref, isVisible];
}

export default useScrollReveal;
