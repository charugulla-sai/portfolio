import aiImage from '../../img/aiimage.png';
import './About.css';
export default function About() {
  return (
    <section className="bg-blue-700 w-full p-5">
      <div className=" max-w-[1100px] mx-auto">
        <h3 className="about_me_heading font-bold text-6xl max-w-fit mb-6">
          About Me
        </h3>
        <div className="flex gap-8 items-center">
          <div className="about_image_box min-w-[320px]">
            <img className="w-full" src={aiImage} />
          </div>
          <div className="about_text_box text-[#ececec] leading-7 text-[17px] w-full">
            <p className='mb-2'>
              Welcome to my portfolio! With 2.5 years of experience as a React
              JS developer, I specialize in crafting dynamic and responsive web
              applications. From concept to execution, I'm dedicated to
              delivering clean, efficient code that enhances user experiences.
              Passionate about staying at the forefront of technology, I'm
              committed to continuous learning and growth to ensure that my work
              remains innovative and impactful.
            </p>
            <p>
              Driven by a love for problem-solving and collaboration, I thrive
              in team environments where I can contribute my expertise and
              creativity. Whether it's building intuitive UI components or
              optimizing performance, I approach each project with enthusiasm
              and a focus on exceeding expectations. Let's work together to
              create something amazing!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
