import './Project.css';
export default function Project({
  projectImg,
  projectTitle,
  projectDesc,
  techUsed,
  githubLink,
  liveDemoLink,
}) {
  return (
    <div className="project_card flex w-full gap-9 p-5 rounded-tl-[16px] items-center justify-between bg-white">
      <div className="project_img_box min-w-[48%] max-h-[320px] overflow-hidden">
        <img
          className="project_img w-full "
          src={projectImg}
          alt={projectImg}
        />
      </div>
      <div className="project_text_box">
        <h4 className="project_title font-semibold text-2xl uppercase mb-2">
          {projectTitle}
        </h4>
        <div className="project_desc mb-4">
          <p>{projectDesc}</p>
        </div>
        <div className="tech_used mb-4">
          <ul className="flex gap-4">
            {techUsed.map((technology) => (
              <li className="w-8 hover:scale-105">
                <img className="w-full" src={technology} />
              </li>
            ))}
          </ul>
        </div>
        <div className="project_links flex  gap-8 text-blue-700  text-lg ">
          <a
            className="flex gap-1 items-center "
            href={githubLink}
            target="_blank"
          >
            Github
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-github w-5"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            className="flex gap-1 items-center"
            href={liveDemoLink}
            target="_blank"
          >
            Live Demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-external-link w-5"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
