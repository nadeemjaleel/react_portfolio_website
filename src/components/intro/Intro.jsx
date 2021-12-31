import "./intro.scss"
import { init  } from "ityped"
import { useEffect, useRef} from "react"

export default function Intro() {
    const textRef = useRef();

    useEffect(()=>{
       init(textRef.current, {
        showCursor: true,
        backDelay:1500,
        backSpeed:60,
        strings: ["Web Developer" , "Web Designer"],
        });
    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/nadeem.jpg" alt=""/>
                    </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Nadeem Jaleel</h1>
                    <h3>
                        B.Tech Student <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}