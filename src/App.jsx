import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import ExplorePage from "./pages/ExplorePage";
import ProfilePage from "./pages/ProfilePage";
import CreatePodcast from "./pages/CreatePodcast";
//import AllPodcasts from "./components/AllPodcasts";
import ViewPodcast from "./components/ViewPodcast";
import UpdatePodcast from "./pages/UpdatePodcast";
import ViewProfile from "./components/ViewProfile";
import UpdateProfile from "./pages/UpdateProfile";
import Temporary from "./pages/Temporary";
import { useContext } from 'react'
import { SessionContext } from './contexts/SessionContext';
import ReviewForm from "./components/reviewForm";
import NavBar from "./components/NavBar";

function App() {

  return (
  <div className="App">
     <NavBar />
     
      <Routes>
    
        <Route path="/" element={<HomePage />} /> 
        <Route path="/signup" element={<SignupPage />} />
        
        
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/profile" element= {<ProfilePage />} />
        <Route path="/viewPodcast" element= {<ViewPodcast />} />
        <Route path="/createPodcast/:podcastId" element={<CreatePodcast />} />
        <Route path="/updatePodcast/:podcastId" element={<UpdatePodcast />} />
        <Route path="/viewProfile" element= {<ViewProfile />} />
        <Route path="/updateProfile/:profileId" element={<UpdateProfile />} />




        <Route path="/addReview/:podcastId" element={<ReviewForm/>}/>
       
          <Route path="/login" element={<LoginPage />} />
        
        
        
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
      
    </div>  
  );
}

export default App