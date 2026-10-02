import { donationDataOne } from "@/data/donationData";
import { Link } from "react-router-dom";

const DonationOne = () => {
  return (
    <section
      id="doe"
      style={{ scrollMarginTop: "110px" }}
      className="donation-section section-padding fix"
    >
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span className="sub-title wow fadeInUp">Campanhas da Abrario</span>
            <h2 className="wow fadeInUp" data-delay=".3s">
              <span>C</span>onheça nossas campanhas para <br /> melhorias da Abrario
            </h2>
          </div>
          <Link to="/donation" className="theme-btn">
            Saiba mais <i className="fa-solid fa-arrow-right-long" />
          </Link>
        </div>
        <div className="donation-wrapper">
          <div className="row">
            {donationDataOne.map((item, index) => (
              <div
                key={index}
                className="col-lg-6 wow fadeInUp"
                data-delay=".2s"
              >
                <div className="donation-card-item">
                  <div className="donation-image">
                    <img src={item.image} alt="img" />
                    <div className="right-shape">
                      <img src="/img/home-1/donation/shape.png" alt="img" />
                    </div>
                  </div>
                  <div className="donation-content">
                    <h4>
                      <Link to="/donation-details">{item.title}</Link>
                    </h4>
                    <p>{item.description}</p>
                    <div className={`pro-items ${item.progressClass}`}>
                      <div className="progress">
                        <div className={`progress-value `} />
                      </div>
                    </div>
                    <ul className="donate-list">
                      <li>
                        <span>Meta:</span> {item.goal}
                      </li>
                      <li>
                        <span>Arrecadado:</span> {item.raised}
                      </li>
                    </ul>
                    <Link to="/donation-details" className={item.btnClass}>
                      Doe agora <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationOne;
