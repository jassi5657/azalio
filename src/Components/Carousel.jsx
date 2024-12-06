import React, { useEffect, useRef, useState } from 'react';
import "./style.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Carousel = () => {
    const [items, setItems] = useState([
        { 
            id: 1, 
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Red_Hat_logo.svg/640px-Red_Hat_logo.svg.png',
            title: 'Red Hat', 
            // topic: 'Aerphone', 
            description: 'Short description about Aerphone.',
            details: 'Detailed description about Aerphone GHTK.',
            specs: [
                { label: 'Used Time', value: '6 hours' },
                { label: 'Charging port', value: 'Type-C' },
                { label: 'Compatible', value: 'Android' },
                { label: 'Bluetooth', value: '5.3' },
                { label: 'Controlled', value: 'Touch' }
            ]
        },
        { 
            id: 1, 
            img: './ibm.png',
            title: 'IBM', 
            // topic: 'Aerphone', 
            description: 'Short description about Aerphone.',
            details: 'Detailed description about Aerphone GHTK.',
            specs: [
                { label: 'Used Time', value: '6 hours' },
                { label: 'Charging port', value: 'Type-C' },
                { label: 'Compatible', value: 'Android' },
                { label: 'Bluetooth', value: '5.3' },
                { label: 'Controlled', value: 'Touch' }
            ]
        },
        { 
            id: 1, 
            img: './nokia.png',
            title: 'Nokia', 
            // topic: 'Aerphone', 
            description: 'Short description about Aerphone.',
            details: 'Detailed description about Aerphone GHTK.',
            specs: [
                { label: 'Used Time', value: '6 hours' },
                { label: 'Charging port', value: 'Type-C' },
                { label: 'Compatible', value: 'Android' },
                { label: 'Bluetooth', value: '5.3' },
                { label: 'Controlled', value: 'Touch' }
            ]
        },
        { 
            id: 1, 
            img: './f5.png',
            title: 'F5', 
            // topic: 'Aerphone', 
            description: 'Short description about Aerphone.',
            details: 'Detailed description about Aerphone GHTK.',
            specs: [
                { label: 'Used Time', value: '6 hours' },
                { label: 'Charging port', value: 'Type-C' },
                { label: 'Compatible', value: 'Android' },
                { label: 'Bluetooth', value: '5.3' },
                { label: 'Controlled', value: 'Touch' }
            ]
        },
      
        
        // Add more items here
    ]);

    const nextButtonRef = useRef(null);
    const prevButtonRef = useRef(null);
    const carouselRef = useRef(null);
    const listHTMLRef = useRef(null);
    const seeMoreButtonsRef = useRef([]);
    const backButtonRef = useRef(null);

    useEffect(() => {
        const nextButton = nextButtonRef.current;
        const prevButton = prevButtonRef.current;
        const carousel = carouselRef.current;
        const listHTML = listHTMLRef.current;
        const seeMoreButtons = seeMoreButtonsRef.current;
        const backButton = backButtonRef.current;

        let unAcceppClick;

        const showSlider = (type) => {
            nextButton.style.pointerEvents = 'none';
            prevButton.style.pointerEvents = 'none';

            carousel.classList.remove('next', 'prev');
            let items = document.querySelectorAll('.carousel .list .item');
            if (type === 'next') {
                listHTML.appendChild(items[0]);
                carousel.classList.add('next');
            } else {
                listHTML.prepend(items[items.length - 1]);
                carousel.classList.add('prev');
            }
            clearTimeout(unAcceppClick);
            unAcceppClick = setTimeout(() => {
                nextButton.style.pointerEvents = 'auto';
                prevButton.style.pointerEvents = 'auto';
            }, 2000);
        };

        nextButton.onclick = () => showSlider('next');
        prevButton.onclick = () => showSlider('prev');

        seeMoreButtons.forEach((button) => {
            button.onclick = () => {
                carousel.classList.remove('next', 'prev');
                carousel.classList.add('showDetail');
            };
        });

        backButton.onclick = () => {
            carousel.classList.remove('showDetail');
        };

        return () => {
            // Cleanup event listeners on component unmount
            nextButton.onclick = null;
            prevButton.onclick = null;
            seeMoreButtons.forEach((button) => (button.onclick = null));
            backButton.onclick = null;
        };
    }, []);

    return (
        <div className="carousel" ref={carouselRef}>
                <h1 className='partern'>Co-innovating with industry leaders</h1>
                <p className='parternP'>The best of our partners</p>
            <div className="list" ref={listHTMLRef}>
                {items.map((item, index) => (
                    <div className="item" key={item.id}>
                        <img src={item.img} alt={`Item ${index + 1}`} />
                        <div className="introduce">
                            {/* <div className="title">{item.title}</div> */}
                            <div className="topic">{item.topic}</div>
                            {/* <div className="des">{item.description}</div> */}
                            {/* <button className="seeMore" ref={(el) => (seeMoreButtonsRef.current[index] = el)}>
                                SEE MORE &#8599;
                            </button> */}
                        </div>
                        <div className="detail">
                            <div className="title">{item.details}</div>
                            <div className="specifications">
                                {item.specs.map((spec, i) => (
                                    <div key={i}>
                                        <p>{spec.label}</p>
                                        <p>{spec.value}</p>
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
            <div className="arrows">
                <button id="prev" ref={prevButtonRef}>
                <FaArrowCircleLeft />
                </button>
                <button id="next" ref={nextButtonRef}>
                <FaArrowCircleRight />
                </button>
                <button id="back" ref={backButtonRef}>
                    See All &#8599;
                </button>
            </div>
        </div>
    );
};

export default Carousel;
