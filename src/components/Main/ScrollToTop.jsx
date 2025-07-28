import { useEffect, useState } from "react";

function ScrollToTop() {

    const [isVisible, setIsVisible] = useState(false);

    function scrollToTop() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    function handleScroll() {
        if (window.scrollY > 300) {
            setIsVisible(true)    
        }

        else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
}, []);

    const buttonStyle = {
    position: 'fixed',
    background: 'black',
    color: 'white',
    border: 'none',
    bottom: '20px',
    right: '20px',
    padding: '10px 15px',
    fontSize: '16px',
    cursor: 'pointer',
    };

    return (
        isVisible && (<button onClick={scrollToTop} style={buttonStyle}>Наверх</button>)
    )
}

export default ScrollToTop;