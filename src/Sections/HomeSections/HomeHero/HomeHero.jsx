import { Button } from "@mui/material";
import "./HomeHero.css";
import Experts from "../../../components/Experts/Experts";
function HomeHero(){
    return(
    <div className="home-hero">
      <section>
        <h1>معاً نصنع فارقاً حقيقياً في حياة الآخرين</h1>
        <p className="desc">كل تبرع — مهما كان صغيراً — يُشعل شمعة أمل في حياة أسرة تحتاج دعمك. انضم إلى آلاف المتبرعين حول العالم.</p>
        <div className="btns">
        <Button
            variant="contained"
            sx={{
              borderRadius: "8px",
              px: 4,
              display: { xs: "none", md: "flex" },
              bgcolor: "#004A5B",
              height:"60px",
              width:"300px",
              fontSize:"24px"
            }}
          >
            تبرع الآن
          </Button>
          <Button
                      variant="outlined"
                      sx={{
                        borderRadius: "8px",
                        // borderColor:"gray",
                        border:"solid 2px",
                        px: 4,
                        display: { xs: "none", md: "flex" },
                        bgcolor: "white",
                        color:"#939393",
                        height:"60px",
                        width:"300px",
                        fontSize:"24px",
                      }}
                    >
                     اسكتشف الحملات
                    </Button>
                  
        </div>
      </section>
        <Experts/>
    </div>
    )
}
export default HomeHero; 