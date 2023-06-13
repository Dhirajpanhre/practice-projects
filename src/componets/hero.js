const HeroSection = () => {
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>
                    Your feet deserve the best
                </h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
                </p>

                <div className="hero-btn">
                    <button>Shop now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                
                <div className="shopping">
                    <p>Also available on</p>

                    <div className="brnadicons">
                        <img src="/images/amazon.png"/>
                        <img src="/images/flipkart.png"/>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/shoes.jpg"/>
            </div>
        </main>
    )
}

export default HeroSection;