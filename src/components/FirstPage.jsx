import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import "./firstpage.css"
import {motion, AnimatePresence } from 'framer-motion';

const FirstPage = () => {
  const [activeId, setActiveId] = useState(null);
  const [index,setIndex] = useState(0)

  const headings = [
    { id: 1, title: "Lorem ipsum dolor sit", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae fuga placeat beatae officiis enim similique repellat corrupti " },
    { id: 2, title: "Lorem ipsum dolor sit", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae fuga placeat beatae officiis enim similique repellat corrupti " },
    { id: 3, title: "Lorem ipsum dolor sit", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae fuga placeat beatae officiis enim similique repellat corrupti " }
  ];

  const images = [{
    image : "https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg"
  },
  {
    image: "https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg"

  },
  {
    image: "https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg"
  
  }
  ]
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length); 
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    
    <div className='firstpage'>
       <div className="scrolling-navbar">
            <div className="menu">
                <a href=""><Link to="home/introduction">Introduction</Link></a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Portfolio</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Portfolio</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Portfolio</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>
            
        </div>
        
        <div className="textbox">
                <h4>Lorem ipsum dolor sit amet</h4>
            <h1>Lorem ipsum dolor sit, amet consecte adipisicing elit.</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae fuga placeat beatae officiis enim similique repellat corrupti illo nisi fugiat. Facilis magni nobis optio minima quam. Explicabo itaque ducimus cupiditate!</p>
          <button><Link to="/home" className='btnlink'>Explore More</Link></button>
        </div>

        <div className="gif1">
          <img src="https://miro.medium.com/v2/resize:fit:1400/0*X_dgAtE9LaY4gjRC.gif" alt="" />
        </div>
        <div className="colorbox"></div>

        <div className="textbox2">
        {headings.map(({ id, title, content }) => (
        <div key={id} className="section">
          <h2
            onMouseEnter={() => setActiveId(id)}
            onMouseLeave={() => setActiveId(null)}
          >
            {title}
          </h2>
          <div className={`content-box ${activeId === id ? "show" : ""}`}>
            <div className="top-bar"></div>
            <p className="content">{content}</p>
            <div className="bottom-bar"></div>
          </div>
        </div>
      ))}
        </div>
        <div className="sliderbox">
          <div className="box1">
      
          </div>
          <div className="box2">
          {/* <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww" alt="" /> */}

          </div>
          <div className="box3">
          <AnimatePresence mode="wait">
          <motion.div
    key={index}
    className="skillbox"
    initial={{ opacity: 0.7, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0.7, x: -30 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    style={{ width: "100%", height: "100%" }}
  >
    <img src={images[index].image} alt="sliding" />
  </motion.div>
        </AnimatePresence>
          </div>
   


          <div className="box4">
          {/* <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww" alt="" /> */}

          </div>
          <div className="box5"></div>
        </div>
        <div className="textbox3">
          <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque aut vitae enim reiciendis voluptatem illo dolores beatae amet perspiciatis similique.</h1>
          <button><Link to="/home" className='btnlink'>Let's Code</Link></button>
        </div>
    </div>
  )
}

export default FirstPage
