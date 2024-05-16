import omniImg from '../../img/omnifood.png';
export default function Project() {
  return (
    <div className="flex w-full gap-9 bg-yellow-300 items-center justify-between">
      <div className="project_img_box min-w-[48%] max-h-[320px] overflow-hidden  hover:transform-[100%] transition transition-all">
        <img className="w-full" src={omniImg} alt="project image" />
      </div>
      <div className="project_text_box">
        <h4 className="project_title">Omnifood</h4>
        <p className="project_desc">
          Welcome to my portfolio! With 2.5 years of experience as a React JS
          developer, I specialize in crafting dynamic and responsive web
          applications. From concept to execution, I'm dedicated to delivering
          clean, efficient code that enhances user experiences. Passionate about
          staying at the forefront of technology, I'm committed to continuous
          learning and growth to ensure that my work remains innovative and
          impactful. Driven by a love for problem-solving and collaboration, I
          thrive in team
        </p>
        <div className="tech_used">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Vanilla JS</li>
          </ul>
        </div>
        <div className="project_links">
          <p>Github</p>
          <p>Live Demo</p>
        </div>
      </div>
    </div>
  );
}
