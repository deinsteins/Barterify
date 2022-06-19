import BarterifyDbSource from '../../data/barterifydb-source';
import { createTeamCardTemplate } from '../templates/template-creator';

const About = {
    async render() {
        const hero = document.querySelector('.hero-image');
        hero.style.display = 'none';
        const nav = document.querySelector('nav');
        nav.style.backgroundColor = '#112b3c';
        nav.style.position = 'relative';
        return `
        <div class="max-w-screen-xl px-4 mx-auto md:px-8">
        <div class="mt-10 mb-10 md:mb-16">
          <h2
            class="
              mb-4
              text-2xl
              font-bold
              text-center text-gray-800
              lg:text-3xl
              md:mb-6
            "
          >
            About Our Team
          </h2>

        <p class="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
          perspiciatis omnis aspernatur impedit vel, consectetur laudantium nulla et
          aliqua
        </p>
        </div>

        <div class="grid gap-5 md:grid-cols-2" id="aboutUs">
          
        </div>
      </div>
        `
    },
    async afterRender() {
      const teamsData = await BarterifyDbSource.Data();
      const aboutContainer = document.getElementById('aboutUs');
      teamsData.teams.forEach((team) =>{
        aboutContainer.innerHTML += createTeamCardTemplate(team);
      });
    },
};

export default About;