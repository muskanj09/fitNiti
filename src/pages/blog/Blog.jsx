import React from 'react'
import '../blog/blog.css'
import '../../components/navbar/navbar.css'
import logo from '../../img/logo.png'
import blog from '../../img/blog.png'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
const Blog = () => {
  return (
    <>
<Navbar />
<section className='section-blog'>
        <div className="active-events-heading-flex row">
          <div className='col-8'>
            <h1>Blogs</h1>
          </div>
          <a href="#" className='col-md-2 col-sm-4'>Search <CiSearch /></a>
        </div>
        <div className="active-events-card-flex row">
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className=" activeCard">
              <img src={blog} alt="" />
              <div className="active-event-card-content blogContent active-event-card">
                <h3>Go Run</h3>
                <p>Lorem ipsum dolor sit amet, Consequat consectetur adipiscing elit. Consequat Lorem ipsum dolor sit amet, Consequat consectetur adipiscing elit. Consequat Lorem ipsum dolor sit amet, t amet, consectetur adipiscing elit. Consequat</p>
                <div>
                <Link to='/detailedBlog'>Read</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className=" activeCard">
              <img src={blog} alt="" />
              <div className="active-event-card-content blogContent active-event-card">
                <h3>Go Run</h3>
                <p>Lorem ipsum dolor sit amet, Consequat consectetur adipiscing elit. Consequat Lorem ipsum dolor sit amet, Consequat consectetur adipiscing elit. Consequat Lorem ipsum dolor sit amet, t amet, consectetur adipiscing elit. Consequat</p>
                <div>
                <Link to='/detailedBlog'>Read</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className=" activeCard">
              <img src={blog} alt="" />
              <div className="active-event-card-content blogContent active-event-card">
                <h3>Go Run</h3>
                <p>Lorem ipsum dolor sit amet, Consequat consectetur adipiscing elit. Consequat Lorem ipsum dolor sit amet, Consequat consectetur adipiscing elit. Consequat Lorem ipsum dolor sit amet, t amet, consectetur adipiscing elit. Consequat</p>
                <div>
                <Link to='/detailedBlog'>Read</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className=" activeCard">
              <img src={blog} alt="" />
              <div className="active-event-card-content blogContent active-event-card">
                <h3>Go Run</h3>
                <p>Lorem ipsum dolor sit amet, Consequat consectetur adipiscing elit. Consequat Lorem ipsum dolor sit amet, Consequat consectetur adipiscing elit. Consequat Lorem ipsum dolor sit amet, t amet, consectetur adipiscing elit. Consequat</p>
                <div>
                <Link to='/detailedBlog'>Read</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className=" activeCard">
              <img src={blog} alt="" />
              <div className="active-event-card-content blogContent active-event-card">
                <h3>Go Run</h3>
                <p>Lorem ipsum dolor sit amet, Consequat consectetur adipiscing elit. Consequat Lorem ipsum dolor sit amet, Consequat consectetur adipiscing elit. Consequat Lorem ipsum dolor sit amet, t amet, consectetur adipiscing elit. Consequat</p>
                <div>
                <Link to='/detailedBlog'>Read</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className=" activeCard">
              <img src={blog} alt="" />
              <div className="active-event-card-content blogContent active-event-card">
                <h3>Go Run</h3>
                <p>Lorem ipsum dolor sit amet, Consequat consectetur adipiscing elit. Consequat Lorem ipsum dolor sit amet, Consequat consectetur adipiscing elit. Consequat Lorem ipsum dolor sit amet, t amet, consectetur adipiscing elit. Consequat</p>
                <div>
                <Link to='/detailedBlog'>Read</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className=" activeCard">
              <img src={blog} alt="" />
              <div className="active-event-card-content blogContent active-event-card">
                <h3>Go Run</h3>
                <p>Lorem ipsum dolor sit amet, Consequat consectetur adipiscing elit. Consequat Lorem ipsum dolor sit amet, Consequat consectetur adipiscing elit. Consequat Lorem ipsum dolor sit amet, t amet, consectetur adipiscing elit. Consequat</p>
                <div>
                <Link to='/detailedBlog'>Read</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className=" activeCard">
              <img src={blog} alt="" />
              <div className="active-event-card-content blogContent active-event-card">
                <h3>Go Run</h3>
                <p>Lorem ipsum dolor sit amet, Consequat consectetur adipiscing elit. Consequat Lorem ipsum dolor sit amet, Consequat consectetur adipiscing elit. Consequat Lorem ipsum dolor sit amet, t amet, consectetur adipiscing elit. Consequat</p>
                <div>
                <Link to='/detailedBlog'>Read</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className=" activeCard">
              <img src={blog} alt="" />
              <div className="active-event-card-content blogContent active-event-card">
                <h3>Go Run</h3>
                <p>Lorem ipsum dolor sit amet, Consequat consectetur adipiscing elit. Consequat Lorem ipsum dolor sit amet, Consequat consectetur adipiscing elit. Consequat Lorem ipsum dolor sit amet, t amet, consectetur adipiscing elit. Consequat</p>
                <div>
                <Link to='/detailedBlog'>Read</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Blog