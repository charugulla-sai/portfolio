import Project from './Project';

export default function ProjectContainer() {
  return (
    <section className="w-full">
      <div className="max-w-[1100px] mx-auto p-5">
        <div>
          <h3>Projects</h3>
          <h4>Each project is a unique peice of development.🧩</h4>
        </div>
      <Project />
      </div>
    </section>
  );
}
