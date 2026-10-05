import type { DonationType } from "@/type/donationType";

const DonationTwo = ({
  data,
  isTitleShow,
  cardClass,
  rowClass,
}: {
  data: DonationType[];
  isTitleShow?: boolean;
  cardClass?: string;
  rowClass?: string;
}) => {
  return (
    <section className="donation-section-2 section-padding fix">
      <div className="container">
        {isTitleShow ?? (
          <div className="section-title style-2">
            <span className="sub-title wow fadeInUp">Funds Collection</span>
            <h2 className="wow fadeInUp" data-delay=".3s">
              <span>E</span>xplore Our Campaigns
            </h2>
          </div>
        )}
        <div className="donation-wrapper-2">
          <div className={`row ${rowClass}`}>
            {data.map((item, idx) => (
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-delay={`${0.3 + idx * 0.2}s`}
                key={item.title}
              >
                <div className={`donation-card-item-2 ${cardClass}`}>
                  <div className="left-shape">
                    <img src={item.shape} alt="img" />
                  </div>
                  <div className="donation-image">
                    <img src={item.image} alt="img" />
                    <div className="news-layer-wrapper">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="news-layer-image"
                          style={{ backgroundImage: `url(${item.image})` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="donation-content">
                    <h4>
                      <a
                        href="https://api.whatsapp.com/send/?phone=5521982043786&text=Ol%C3%A1%21+Quero+ajudar+a+Abrario+doando&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>
                    </h4>
                    <div className={`pro-items ${item.progressClass}`}>
                      <div className="progress">
                        <div className="progress-value style-two" />
                      </div>
                    </div>
                    <ul className="donate-list">
                      <li>Raised - {item.raised}</li>
                      <li>
                        <span>Goal - {item.goal}</span>
                      </li>
                    </ul>
                    <a
                      href="https://api.whatsapp.com/send/?phone=5521982043786&text=Ol%C3%A1%21+Quero+ajudar+a+Abrario+doando&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={item.btnClass}
                    >
                      Doe agora <i className="fa-solid fa-arrow-right-long" />
                    </a>
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

export default DonationTwo;
