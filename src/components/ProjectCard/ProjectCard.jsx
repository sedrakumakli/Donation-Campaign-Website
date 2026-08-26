import { ChevronLeft, MapPin } from "lucide-react";
import config from "../../constants/enviroment";
import { useNavigate } from "react-router-dom";

function ProjectCard({ project }) {
  const isDone = project.status === "مكتمل";
  const navigate = useNavigate();

  return (
    <div className="project-card">
      <div className="project-img">
        <img src={config.baseUrl + project.cover_image} alt={project.name} />
        <span className={`project-badge ${isDone ? "done" : ""}`}>
          <span className="dot" />
          {isDone ? "مكتمل" : "قيد التنفيذ"}
        </span>
      </div>
      <div className="project-body">
        <h3 className="project-title">{project.name}</h3>
        <div className="project-desc">
          <MapPin size={14} />
          {project?.district?.city?.governorate?.governorate_name || ""}, {""}
          {project?.district?.district_name}
        </div>

        <div className='project-progress-track'>
          <div className='project-progress-fill' style={{ width: `${parseInt(project?.progress_percentage)}%` }} />
        </div>
        <div className="project-amounts">
          <span>
            {/* {project.raised.toLocaleString("en-US")}${" "}
            <span className="of">/ {project.target.toLocaleString("en-US")}$</span> */}
            <span>نسبة الإنجاز </span>
          </span>
          <span>{project?.progress_percentage}</span>
        </div>

        <div className="project-foot">
          <div className="project-allocated">
            الكلفة المقدرة
            <br />
            <b>{project?.estimated_cost?.toLocaleString("en-US")}</b>
          </div>

          <button
            type="button"
            className="project-link"
            onClick={() => navigate(`/project/detail/${project?.uuid}`)}
          >
            التفاصيل <ChevronLeft size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
