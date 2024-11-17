import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './componants/header/header'
import Home from './componants/pages/clientPages/home'
import Admin from './componants/pages/adminPages/admin';
import LoginPage from './componants/pages/login/login';
import SignUp from './componants/pages/register/signup';

function App() {
  console.log("************");
  return (
    <BrowserRouter>
      <Routes path="/*">
        <Route path="/admin/*" element={<Admin/>} />
        <Route path="/home/*" element={<Home/>} />
        <Route path="/Login/*" element={<LoginPage/>} />
        <Route path="/signup/*" element={<SignUp/>} />
        <Route path="/*" 
        element=
        {
          <>          
          <div className='h-screen w-full bg-[#DAE2B6] relative flex-col'>
            <Header/>
            <div className='absolute inset-0 flex justify-center items-center'>
              <h1 className='text-[70px] text-[#FFFBE9]'>Page Under Maintenance.</h1>
            </div>
          </div>
          </>
        } />
      </Routes>
    </BrowserRouter>
      

  );
}

export default App;
