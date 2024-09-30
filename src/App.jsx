import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainPage from "./pages/main/MainPage.jsx";
import ActivityPage from "./component/activity/ActivityPage.jsx";

function App() {

  return (
    <>
      <Router>

        <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/activity' element={<ActivityPage/>} />
        </Routes>

      </Router>

    </>
  )
}

export default App
