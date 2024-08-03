import React from 'react'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Events from './pages/events/Events'
import Results from './pages/results/Results'
import Charity from './pages/charity/Charity'
import Blog from './pages/blog/Blog'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Campaign from './pages/champaign/Campaign'
import DetailedEvent from './pages/detailedEvent/DetailedEvent'
import DetailedBlog from './pages/detailedBlog/DetailedBlog'
import MyCampaign from './pages/myCampaign/MyCampaign'

const App = () => {
  return (
    <>
    <BrowserRouter>
    {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/results' element={<Results/>} />
        <Route path='/charity' element={<Charity />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/campaign' element={<Campaign />} />
        <Route path='/detailedEvent' element={<DetailedEvent />} />
        <Route path='/detailedBlog' element={<DetailedBlog />} />
        <Route path='/myCampaign' element={<MyCampaign />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
    </>
  )
}

export default App