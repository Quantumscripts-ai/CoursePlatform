/**
 * Home Page
 * Main landing page with all sections
 */
import Hero from '../components/home/Hero';
import WhyMastery from '../components/home/WhyMastery';
import WhatYoullLearn from '../components/home/WhatYoullLearn';
import Instructor from '../components/home/Instructor';
import HomeCurriculum from '../components/home/HomeCurriculum';
import WhoThisCourseIsFor from '../components/home/WhoThisCourseIsFor';

function Home() {
    return (
        <main>
            <Hero />
            <WhyMastery />
            <WhatYoullLearn />
            <Instructor />
            <HomeCurriculum />
            <WhoThisCourseIsFor />
        </main>
    );
}

export default Home;


