import { ChevronLeft, LocateIcon, MapPin } from "lucide-react";

function ProjectCard({ project }) {
  const pct = Math.round((project.raised / project.target) * 100);
  const isDone = project.status === "done";

  return (
    <div className="project-card">
      <div className="project-img">
        <img src={project.image} alt={project.title} />
        <span className={`project-badge ${isDone ? "done" : ""}`}>
          <span className="dot" />
          {isDone ? "مكتمل" : "قيد التنفيذ"}
        </span>
      </div>
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-desc"><MapPin  size={14}/>{project.location}</div>

        <div className="project-progress-track">
          <div className="project-progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="project-amounts">
          <span>
            {/* {project.raised.toLocaleString("en-US")}${" "}
            <span className="of">/ {project.target.toLocaleString("en-US")}$</span> */}
            <span>نسبة الإنجاز </span>
          </span>
          <span>{pct}%</span>
        </div>

        <div className="project-foot">
          <div className="project-allocated">
           الكلفة المقدرة
            <br />
            <b>{project.allocated.toLocaleString("en-US")}$</b>
          </div>
          <a href="#" className="project-link">
            التفاصيل <ChevronLeft size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;