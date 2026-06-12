// import { Button } from "@mui/material";
// import "./ProjectCard.css";

// const ProjectCard = ({image,sector,gool,total,title,rate,city,region}) => {
//     return (
//         <div class="project-card">

//             <div class="image-wrapper">
//                 <img src={image} alt="مشروع" />
//                 <div class="sector top-right">{sector}</div>

//                 {/* <div class="status top-left">بعد 3 يوم</div> */}

//             </div>

//             <div class="card-content">
//                 <h2>{title}</h2>
//                 <div className="location-info">
//                     <div className="location-icon"></div>
//                     <p>{city} <span>-</span>{region}</p>
//                 </div>
//                 <div class="progress-info">
//                     <span>نسبة الإنجاز</span>
//                     <strong>{rate}</strong>
//                 </div>

//                 <div class="progress">
//                     <div class="progress-fill"></div>
//                 </div>
//                 <div className="rate-bar">
//                     <div className="rate-item">
//                         <span>تم جمعه الأن</span>
//                          <strong>{total}</strong>
//                     </div>
//                     <div className="rate-item">
//                         <span>الهدف</span>
//                          <strong>{gool}</strong>
//                     </div>
//                 </div>

//                 {/* <div class="funding-bar">
//                     <div class="funding-item">
//                         <span>تم جمعه حتى الآن</span>
//                         <strong>{total}</strong>
//                     </div>

//                     <div class="funding-item">
//                         <span>الهدف</span>
//                         <strong>{gool}</strong>
//                     </div>
//                 </div> */}

//                 <hr />
//                     <Button
//                         variant="outlined"
//                         sx={{
//                             borderRadius: "8px",
//                             borderColor: "#004A5B",
//                             px: 4,
//                             display: { xs: "none", md: "flex" },
//                             bgcolor: "white",
//                             color: "#004A5B",
//                             width:"200px",
//                             height:"40px"
//                         }}
//                     >
//                        معرفة المزيد
//                     </Button>
//                 </div>
//             </div>
//     )
// }
// export default ProjectCard;