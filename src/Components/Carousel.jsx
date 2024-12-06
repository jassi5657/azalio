import React, { useEffect, useRef, useState } from 'react';
import "./style.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Carousel = () => {
    const [items, setItems] = useState([
        { 
            id: 1, 
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Red_Hat_logo.svg/640px-Red_Hat_logo.svg.png',
            title: 'Red Hat', 
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
            id: 2, 
            img: './ibm.png',
            title: 'IBM', 
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
            id: 3, 
            img: './nokia.png',
            title: 'Nokia', 
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
            id: 4, 
            img: './f5.png',
            title: 'F5', 
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
    ]);

    const nextButtonRef = useRef(null);
    const prevButtonRef = useRef(null);
    const carouselRef = useRef(null);
    const listHTMLRef = useRef(null);

    useEffect(() => {
        const nextButton = nextButtonRef.current;
        const prevButton = prevButtonRef.current;
        const carousel = carouselRef.current;
        const listHTML = listHTMLRef.current;

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

        const autoSlide = setInterval(() => showSlider('next'), 4000); // Change slide every 3 seconds

        nextButton.onclick = () => showSlider('next');
        prevButton.onclick = () => showSlider('prev');

        return () => {
            clearInterval(autoSlide); // Clear interval on unmount
            nextButton.onclick = null;
            prevButton.onclick = null;
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
                        {/* <div className="introduce">
                            <div className="topic">{item.title}</div>
                        </div> */}
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
            </div>
        </div>
    );
};

export default Carousel;
