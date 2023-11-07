import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import SignIn from './pages/SignIn.js';
import SignUp from './pages/SignUp.js';
import AboutUs from './pages/AboutUs.js';
import Classes from './pages/Classes.js';
import Store from './pages/Store.js';
import Blogs from './pages/Blogs.js';
import NavBar from './components/NavBar.js';
import AdminPage from './pages/AdminPage.js';
import TrainerPage from './pages/TrainerPage.js';
import AddTrainer from './admin_options/AddTrainer.js';
import AddAdmin from './admin_details/AddAdmin.js';
import AddClass from './admin_details/AddClass.js';
const Navigation = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/aboutUs' element={<AboutUs />} />
            <Route path='/classes' element={<Classes />} />
            <Route path='/store' element={<Store />} />
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/trainer' element={<TrainerPage />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/addTrainer' element={<AddTrainer />} />
            <Route path='/addAdmin' element={<AddAdmin />} />
            <Route path='/addClass' element={<AddClass />} />
          </Routes>
        </NavBar>
      </BrowserRouter>
    </div>
  );
};

export default Navigation;
