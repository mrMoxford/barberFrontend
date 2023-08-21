import { Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout";
import './App.css'
import Events from "./pages/events/Events";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Booking from "./pages/booking/Booking";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";

function App() {
  

  return (
    <>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="events" element={<Events />} />
          <Route path="booking" element={<Booking />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
