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



function App() {
 return (
  <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/explore" element={<ExplorePage />} />

        <Route path="/profile/:userId" element= {<ProfilePage />} />
        <Route path="/createPodcast/:userId" element={<CreatePodcast />} />


        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
      
    </div>  
  );
}

export default App