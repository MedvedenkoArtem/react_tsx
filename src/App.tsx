import { BrowserRouter, Route, Routes } from "react-router-dom"; 
// import Layout from "components/Layout/Layout";
import Layout from "lessons/Lesson_15/Layout/Layout";
import { EmployeeProvider } from "lessons/Lesson_15/context/EmployeeContext";

import GlobalStyles from "styles/GlobalStyles";
import Home from "pages/EmployeeApp/Home/Home";
import About from "pages/EmployeeApp/About/About";
import LogIn from "pages/EmployeeApp/LogIn/LogIn";
import ContactUs from "pages/EmployeeApp/ContactUs/ContactUs";
import Clients from "pages/Clients/Clients";
import LifeWaves from "pages/Clients/LifeWaves/LifeWaves";
import RandomCrafts from "pages/Clients/RandomCrafts/RandomCrafts";
import YellowCow from "pages/Clients/YellowCow/YellowCow";
import Create_Employee from "lessons/Lesson_15/pages/Create_Employee/Create_Employee";
import EmployeeCard from "lessons/Lesson_15/pages/EmployeeCard/EmployeeCard";

// Homeworks
import Homework_06 from "./homeworks/Homework_06/Homework_06";
import Homewwork_07 from "homeworks/Homework_07/Homework_07";
import Homework_08 from "homeworks/Homework_08/Homework_08";
import Homework_09 from "homeworks/Homework_09/Homework_09";
import Homework_10 from "homeworks/Homework_10/Homework_10";
import Homework_12 from "homeworks/Homework_12/Homework_12";
import Homework_13 from "homeworks/Homework_13/Homework_13";
// Lessons
import Lesson_07 from "./lessons/Lesson_07/Lesson_07";
import Lesson_06 from "./lessons/Lesson_06/Lesson_06";
import Lesson_08 from "lessons/Lesson_08/Lesson_08";
import Lesson_09 from "lessons/Lesson_09/Lesson_09";
import Lesson_10 from "lessons/Lesson_10/Lesson_10";
import Lesson_11 from "lessons/Lesson_11/Lesson_11";
import Lesson_12 from "lessons/Lesson_12/Lesson_12";
import Lesson_14 from "lessons/Lesson_14/Lesson_14";

function App() {
  return (
    <>
    <BrowserRouter>
    <EmployeeProvider>
      <GlobalStyles />
      <Layout>
        <Routes>
           <Route path="/" element={<Create_Employee />} />
          <Route path="EmployeeCard" element={<EmployeeCard />} />
        </Routes>
      </Layout>
    </EmployeeProvider>

      {/* Homeworks */}
      {/* <Homework_06 /> */}
      {/* <Homewwork_07 /> */}
      {/* <Homework_08 /> */}
      {/* <Homework_09 /> */}
      {/* <Homework_10 /> */}
      {/* <Homework_12/> */}
      {/* <Homework_13/> */}
      {/* Lessons */}
      {/* <Lesson_06 /> */}
      {/* <Lesson_07 /> */}
      {/* <Lesson_08 /> */}
      {/* <Lesson_09 />  */}
      {/* <Lesson_10 /> */}
      {/* <Lesson_11 /> */}
      {/* <Lesson_12 /> */}
      {/* <Lesson_14/> */}
      </BrowserRouter>

    </>
  );
}

export default App;
