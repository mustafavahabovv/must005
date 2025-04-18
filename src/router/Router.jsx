import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRouter from './router/Router';
import Home from "./pages/Home";
import About from "./pages/About";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

// const AppRouter = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Router>
//   );
// };


export default AppRouter;
