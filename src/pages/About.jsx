/**
 * About Page
 * Company information with Mission, Timeline, Team, and Values sections
 */
import Mission from '../components/about/Mission';
import Timeline from '../components/about/Timeline';
import Team from '../components/about/Team';
import Values from '../components/about/Values';

function About() {
    return (
        <main>
            <Mission />
            <Timeline />
            <Team />
            <Values />
        </main>
    );
}

export default About;
