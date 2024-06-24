const Description = () => {
  return (
    <main className="discription border">
      <div className="discription-content">
        <h1>YOUR FEET DESERVES THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="button">
          <button>Shop Now</button>
          <button className="secondButton">Category</button>
        </div>

        <div className="apps">
          <p>Also Available On</p>
          <div className="apps_icon">
            <img src="/images/amazon.png" alt="amazon-icon" />
            <img src="/images/flipkart.png" alt="flipcart-icon" />
          </div>
        </div>
      </div>

      <div className="shoes-image">
        <img src="/images/shoe_image.png" alt="shoes image" />
      </div>
    </main>
  );
};

export default Description;
