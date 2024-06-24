const Navigation = () => {
  return (
    <div className="container border">
      <div className="logo">
        <img src="../public/images/brand_logo.png" />
      </div>

      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button>Login</button>
    </div>
  );
};

export default Navigation;
