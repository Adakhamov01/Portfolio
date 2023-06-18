import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import NavBar from './components/NabBar'
import Job from "./components/Job";
import Header from "./components/Header";
import CardInfoOn from './components/CardInfoOn'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Info" element={<CardInfoOn />} />
        <Route path="/Job" element={<Job />} />
      </Routes>

    </BrowserRouter>
  );
}

function Home() {
  return (
    <>
    <div className="continer"> 
    <header>

      <NavBar />
    <main className="main-list">
      <Header />
    </main>
    </header>
  
    </div>
    <footer>
    <div className='list_icon_times'>
                    <ul>
                    <li><a href='https://www.instagram.com/armwx.ll7/'><img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="" /></a></li>
                    <li><a href="https://api.whatsapp.com/send/?phone=996730013&text&type=phone_number&app_absent=0"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png" alt="" /></a></li>
                    <li><a href="https://web.telegram.org/k/"><img src="https://cdn-icons-png.flaticon.com/128/87/87413.png" alt="" /></a></li>
                    </ul>
                </div>
    </footer>
    </>
  );
}

