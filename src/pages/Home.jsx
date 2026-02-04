/**
 * Home Page
 * Main landing page with all sections
 */
import Hero from '../components/home/Hero';
import WhyMastery from '../components/home/WhyMastery';
import BeforeAfter from '../components/home/BeforeAfter';
import WhatYoullLearn from '../components/home/WhatYoullLearn';
import Instructor from '../components/home/Instructor';
import HomeCurriculum from '../components/home/HomeCurriculum';
import WhoThisCourseIsFor from '../components/home/WhoThisCourseIsFor';
import Testimonials from '../components/home/Testimonials';
import Registration from '../components/home/Registration';
import FAQ from '../components/home/FAQ';
import CTASection from '../components/home/CTASection';

function Home() {
    return (
        <main>
            <Hero />
            <WhyMastery />
            <WhatYoullLearn />
            <Instructor />
            <HomeCurriculum />
            <WhoThisCourseIsFor />
            <Testimonials />
            <BeforeAfter />
            <Registration />
            <FAQ />
            <CTASection />
        </main>
    );
}

export default Home;


