import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AMAcademyMusicCaseStudy from "./pages/AMAcademyMusicCaseStudy";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/case-studies/am-academy-music" element={<AMAcademyMusicCaseStudy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
