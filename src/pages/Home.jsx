/**
 * Home Page
 * Main landing page with all sections
 */
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import CourseShowcase from '../components/home/CourseShowcase';
import WhyMastery from '../components/home/WhyMastery';

function Home() {
    return (
        <main>
            <Hero />
            <Features />
            <CourseShowcase />
            <WhyMastery />
        </main>
    );
}

export default Home;
