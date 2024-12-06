import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css'; // Style file (combined CSS from above)
import './lenis.css'; // Lenis-specific styles
import { Button, Card } from 'antd';
import { Typewriter } from 'react-simple-typewriter';
import Navbar from '../Components/Navbar';
import Carousel from '../Components/Carousel';


const HorizontalScroll = () => {
  useEffect(() => {
    // Initialize GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const applyHorizontalScroll = () => {
      const sections = gsap.utils.toArray(".panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".container",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + (sections.length - 1) * window.innerWidth,
        },
      });
    };

    if (window.innerWidth > 800) {
      applyHorizontalScroll();
    }

    // Initialize Lenis (smooth scroll)
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      // Clean up GSAP ScrollTrigger
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div>
      <header className="hero">
        <div className='description'>
          <div >

      <Navbar/>
          </div>
          {/* <h1>Welcome to Horizontal Scroll with GSAP! Here you can find the famous effect you can often see in Awwwards winning websites.</h1>
          <p>Not enough? <br /> I've also added some Smooth Scroll effect with Lenis!</p> */}
          <img src="https://cdn-llelb.nitrocdn.com/UftRSQDyRkDCbWJQAdpKGlpgEtIfhLUm/assets/images/optimized/rev-9b7e781/aimarketingengineers.com/wp-content/uploads/2024/05/What-Are-the-Essential-Ad-Policies-and-Compliance-Standards-in-Advertising.webp" class="mainImg" />


          <div className="desc" >
            <h1>Welcome to Azalio Technology</h1>

            <p>
              Explore Our Services Like
              <span style={{ color: 'white', fontWeight: 'bold' , marginLeft:"9px"}}>
                <Typewriter
                
                  words={["Cloud Services", "DevOps", "Cyber Security", "Data Science", "Web Full Stack", " "]}
                  loop="true"
                  cursor
                  cursorStyle='_'
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}

                />
              </span>
            </p>


            <br />
            <br />
            <br />
            <br />
            <br />


            <Button type='primary'>Consult Us</Button>
          </div>



        </div>
      </header>

      <div className="container">
        <div className="panel">
          <div>
            {/* <h1>&#127775;Sooo smoooooth...</h1> */}
            <img src="https://cdn.dribbble.com/users/1912990/screenshots/6129020/cloud_computing.gif" className="scrollImg1" />
            <h1>Cloud Services</h1>
            <br />
            <br />

            <p>GO CLOUD, GO BIG.</p>
            <br />
            <br />


            <p>Unlock true potential with automated cloud platforms</p>
            <Button className='btn' type='primary'>Explore</Button>

          </div>
        </div>
        <div className="panel">

            <div className="cyber-head">



            <h1>Cybersecurity for Industry that’s proven in practice</h1>
            <p>Your company benefits from best practices, optimized processes, and interfaces that take into account the growing requirements of industrial cybersecurity.</p>
            </div>



          <div>

            <div className='cyber'>

              <div>
                <img src="./cyber1.webp" className="cyberImg" />
                <h1>Multilayer Defense-in-Depth concept</h1>
              </div>



              <div>
                <img src="./cyber2.webp" className="cyberImg" />
                <h1 style={{marginLeft:"40px"}}>Products hardened ex works</h1>
              </div>



              <div>
                <img src="./cyber3.webp" className="cyberImg" />
                <h1>Proactive protection against threats</h1>
              </div>


            </div>




          </div>


        </div>
        <div className="panel">

          <div className="dataDesc">


<h1>Data Analytics Services</h1>
<p>Unlock the value in your data </p>
<br />
<br />

<p>Convert data to information, information to insights and insights to better business outcomes </p>
          </div>

          <img src="./dataScience.gif" className="dataScience" />

          
        </div>
        <div className='panel'>
          <h1 style={{marginTop:"-550px"}}>You Are In <br /> <span className='companySpan'>Good Company</span> </h1>

          <Card className='card'>
            <img src="https://www.azalio.io/wp-content/uploads/2021/12/zorgers-logo-e1641219701905.png" alt="" />
          </Card>

          <Card className='card'>
            <img src="https://www.azalio.io/wp-content/uploads/2021/12/Mobileum_Logo_Color-e1641219658154.png" alt="" />
          </Card>

          <Card className='card'>
            <img src="https://www.azalio.io/wp-content/uploads/2022/02/HFCL-logo.png" alt="" />
          </Card>


          <Card className='card'>
            <img src="https://www.azalio.io/wp-content/uploads/2021/12/BluPin-Technologies-e1641219682210.png" alt="" />
          </Card>


         
         

          

        </div>
      </div>

      {/* <footer className="footer"> */}
       <Carousel/>
      {/* </footer> */}
    </div>
  );
};

export default HorizontalScroll;
