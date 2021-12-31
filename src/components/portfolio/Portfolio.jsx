import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
             <h1>Portfolio</h1>
             <ul>
                 <li className="active">Featured</li>
                 <li>Web App</li>
                 <li>Web Designing</li>
                 <li>Design</li>
                 <li>Python</li>

             </ul>
             <div className="container">
                 <div className="item">
                     <img src="assets/web design.png" alt=""/>
                     <h3>Website</h3>
                 </div>
             </div>
        </div>
    )
}