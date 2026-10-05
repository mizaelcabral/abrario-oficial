const TopHeader = () => {
  return (
    <div className="header-top-section">
      <div className="container-fluid">
        <div className="header-top-wrapper">
          <div className="icon-items">
            <div className="icon">
              <i className="fa-regular fa-location-dot" />
            </div>
            <div className="content">
              <span>Endereço</span>
              <h5>Centro, Niterói - RJ</h5>
            </div>
          </div>
          <div className="icon-items">
            <div className="icon">
              <i className="fa-solid fa-phone-volume" />
            </div>
            <div className="content">
              <span>Telefone</span>
              <h5>
                <a href="tel:+5521982043786">(21) 98204-3786</a>
              </h5>
            </div>
          </div>
          <div className="icon-items">
            <div className="icon">
              <i className="fa-regular fa-envelope" />
            </div>
            <div className="content">
              <span>E-mail</span>
              <h5 style={{ textTransform: "lowercase" }}>
                <a href="mailto:contato@abrario.org" style={{ textTransform: "lowercase" }}>
                  contato@abrario.org
                </a>
              </h5>
            </div>
          </div>
          <div className="social-icon">
            <a
              href="https://www.facebook.com/Abrariooficial"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook AbraRio"
            >
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a href="https://wa.me/5521982043786" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp" />
            </a>
            <a
              href="https://www.instagram.com/abrariooficial/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram AbraRio"
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a
              href="https://www.youtube.com/@abrariooficial"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube AbraRio"
            >
              <i className="fa-brands fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
