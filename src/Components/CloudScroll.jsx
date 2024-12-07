import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './css/cloudScroll.css'; // Style file (combined CSS from above)
import './css/lenis.css'; // Lenis-specific styles
import { Button, Card } from 'antd';
import { Typewriter } from 'react-simple-typewriter';
import Navbar from '../Components/Navbar';
import Carousel from '../Components/Carousel';
import Test from '../pages/Test';


import DecodeAnimation from "react-decode-animation";

const CloudScroll = () => {

  const ref = useRef(null);
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
          {/* <img src="https://cdn-llelb.nitrocdn.com/UftRSQDyRkDCbWJQAdpKGlpgEtIfhLUm/assets/images/optimized/rev-9b7e781/aimarketingengineers.com/wp-content/uploads/2024/05/What-Are-the-Essential-Ad-Policies-and-Compliance-Standards-in-Advertising.webp" class="mainImg" /> */}
<div className='mainImg'>


          <img src="https://www.azalio.io/wp-content/uploads/2022/01/cyber-security-18.png" className="" />


          <div className="cloudImg">
            <img src="https://www.azalio.io/wp-content/uploads/2022/01/Cloud-services-1536x1442.png" alt="" />
          </div>

</div>

          <div className="desc" >
            <h1>Cloud Services</h1>
            <p>Unlock the true potential of applications with automated cloud platforms. <br /> <br />
Azalio, your cloud journey partner will help you discover better ways to reveal the power of cloud computing. Our team of industry experts collaborate with you to help realize your business’s full promise and achieve value in every direction.
</p>

            


          </div>



        </div>
      </header>

      <div className="container">
        <div className="panel">
        <div>
			<DecodeAnimation
				ref={ref}
				autoplay // will play when rendered
				text={"OUR OFFERINGS"}
        style={{fontSize:"70px",
          fontWeight:"bolder"
        }}
			/>
			
		</div>
        </div>
        <div className="panel">

            <div className="cyber-head">


            </div>



          <div>

            <div className='cloudImg'>

              

              <img src="https://www.atatus.com/glossary/content/images/size/w960/2021/06/Cloud-Automation.jpeg" alt="" />


              
              <img src="https://media.istockphoto.com/id/1404020923/vector/devops-banner-concept-has-8-steps-to-analyze-such-as-plan-code-build-operate-deploy-test.jpg?s=612x612&w=0&k=20&c=KJ90yfWIP3lELbmiTS2Furjv_IOSHrTDYqz-BWhkerU=" alt="" />



              <img src="https://data.moonscdn.com/prompt/slices/1/watermarked/Consultant-reviewing-cloud-architecture-on-holographic-screen-professionally._Nwd0k.png" alt="" />


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
       {/* <Carousel/> */}
       <Test/>
      {/* </footer> */}
    </div>
  );
};

export default CloudScroll;
