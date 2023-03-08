import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/NavBar";
import ErrorPage from "./pages/ErrorPage";
import ExplorePage from "./pages/ExplorePage";
import ProfilePage from "./pages/ProfilePage";
import CreatePodcast from "./pages/CreatePodcast";
//import AllPodcasts from "./components/AllPodcasts";
import ViewPodcast from "./components/ViewPodcast";
import UpdatePodcast from "./pages/UpdatePodcast";

function App() {
 return (
  <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/profile" element= {<ProfilePage />} />
        <Route path="/viewPodcast/" element= {<ViewPodcast />} />
        <Route path="/createPodcast" element={<CreatePodcast />} />
        <Route path="/updatePodcast/:podcastId" element={<UpdatePodcast />} />


        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
      
    </div>  
  );
}

export default App