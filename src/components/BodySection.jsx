export const BodySection = () => {
  return (
    <>
      <section className="first-sec">
        <h2>welcome to oasis of calm</h2>
        <p>
          Discover the power of nature with our premium essential oils. At FRin
          Essentials, we believe in the transformative power of pure,
          high-quality oils to enhance your well-being and create a tranquil
          environment. Whether you're looking to unwind after a long day, boost
          your mood, or support your overall health, we have the perfect blend
          for you.
        </p>
      </section>
      <section className="explore">
        <h2>explore our collection</h2>
        <div className="collection-divs">
          <div className="collections">
            <div className="image-div">
              <img src={require("../images/peppermint.jpeg")} alt="" />
            </div>
            <div className="details-div">
              <p>
                At Frin Essentials, we make shopping easy and enjoyable. Enjoy
                fast shipping, secure payment options, and a hassle-free return
                policy. We're dedicated to making your experience as smooth and
                pleasant as possible.
              </p>
            </div>
          </div>
          <div className="collections">
            <div className="details-div">
              <h2>100% Pure and Natural</h2>
              <p>
                Our oils are free from additives, chemicals, and synthetic
                fragrances. You get only the best nature has to offer.
              </p>
            </div>
            <div className="image-div">
              <img src={require("../images/second-image.png")} alt="" />
            </div>
          </div>
          <div className="collections">
            <div className="image-div">
              <img src={require("../images/spray.jpeg")} alt="" />
            </div>
            <div className="details-div">
              <h2>Customer Satisfaction</h2>
              <p>
                Your well-being is our top priority. Enjoy a seamless shopping
                experience with our user-friendly website and exceptional
                customer service.
              </p>
            </div>
          </div>
          <div className="collections">
            <div className="details-div">
              <h2>Shop with Confidence</h2>
              <p>
                Experience the magic of essential oils with Frin Essentials.
                Start exploring our collection and find your perfect scent
                today!
              </p>
            </div>
            <div className="image-div">
              <img src={require("../images/longrich.jpeg")} alt="" />
            </div>
          </div>
          <div className="collections">
            <div className="image-div">
              <img src={require("../images/second-image.png")} alt="" />
            </div>
            <div className="details-div">
              <h2>Ethically Sourced</h2>
              <p>
                We partner with responsible growers and distillers to ensure
                sustainability and fairness.
              </p>
            </div>
          </div>
        </div>
        <div className="body-btn">
          <button onClick={() => (window.location.href = "./products")}>
            view our products
          </button>
        </div>
      </section>
    </>
  );
};
