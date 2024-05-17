import Project from './Project';
import omniImg from '../../img/omnifood.png';
import daruwalaImg from '../../img/daruwala.png';
import html from '../../img/html-5.png';
import css from '../../img/css-3.png';
import js from '../../img/js.png';
import reactjs from '../../img/reactjs.png';
import nodejs from '../../img/nodejs.png';
import expressjs from '../../img/expressjs.png';
import mongodb from '../../img/mongodb.png';
import tailwindcss from '../../img/tailwindcss.png';

const projects = [
  {
    projectImg: daruwalaImg,
    projectTitle: 'Project 2',
    projectDesc: `Introducing Daruwala, a sophisticated alcohol-centric website meticulously crafted with the MERN stack. Featuring seamless user experiences like sign-in, sign-up, cart management, orders, and secure payments via Razorpay, Daruwala redefines the way enthusiasts explore and purchase their favorite spirits. Leveraging MongoDB Atlas for robust data management, this platform seamlessly integrates modern design with cutting-edge functionality, offering a one-stop destination for aficionados to indulge in the world of fine libations.`,
    techUsed: [reactjs, nodejs, expressjs, mongodb, css],
    githubLink: 'https://github.com/charugulla-sai/daruwala.git',
    liveDemoLink: 'https://daruwala.vercel.app',
  },
  {
    projectImg: omniImg,
    projectTitle: 'Omnifood',
    projectDesc: `Welcome to Omnifood – your gateway to culinary excellence. Our
    homepage, built with HTML, CSS, and JavaScript, offers a visually
    stunning and user-friendly experience. Explore a diverse collection
    of mouthwatering recipes and engage with a vibrant community of food
    enthusiasts. Let Omnifood inspire your next culinary adventure. Bon
    appétit!`,
    techUsed: [html, css, js],
    githubLink: 'https://github.com/charugulla-sai/omnifood.git',
    liveDemoLink: 'https://charugulla-sai.github.io/omnifood/',
  },
];

export default function ProjectContainer() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1100px] mx-auto p-5 ">
        <div className="mb-9">
          <h3 className="text-xl font-semibold uppercase text-[#4446b7] border-b-2 border-b-red-200 mx-auto w-fit mb-7">
            Projects
          </h3>
          <h4 className='text-2xl font-bold'>Each project is a unique peice of development.🧩</h4>
        </div>
        <div className="flex flex-col gap-9">
          {projects.map((project) => (
            <Project
              key={project.projectImg}
              projectImg={project.projectImg}
              projectTitle={project.projectTitle}
              projectDesc={project.projectDesc}
              techUsed={project.techUsed}
              githubLink={project.githubLink}
              liveDemoLink={project.liveDemoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
