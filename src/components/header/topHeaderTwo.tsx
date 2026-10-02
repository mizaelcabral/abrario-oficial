const TopHeaderTwo = () => {
  return (
    <div className="header-top-section-2">
      <div className="container-fluid">
        <div className="header-top-wrapper-2">
          <div className="header-left">
            <ul className="list-icon">
              <li>
                <i className="fa-regular fa-location-dot" /> Centro, Niterói - RJ
              </li>
              <li>
                <i className="fa-solid fa-envelope" />
                <a href="mailto:contato@abrario.org"> contato@abrario.org</a>
              </li>
              <li>
                <i className="fa-solid fa-phone-volume" />
                <a href="tel:+5521982043786"> (21) 98204-3786</a>
              </li>
            </ul>
          </div>
          <div className="social-icon">
            <a href="#">
              <i className="fa-brands fa-twitter" />
            </a>
            <a href="https://wa.me/5521982043786" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp" />
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeaderTwo;
