import PageHeader from "@/components/pageHeader";
import { Link } from "react-router-dom";
const volunteers = [
  {
    name: "Micheal R. Shannon",
    role: "Software Developer",
    image: "/img/inner-page/volounteer/01.jpg",
  },
  {
    name: "Darrell Steward",
    role: "Software Developer",
    image: "/img/inner-page/volounteer/02.jpg",
  },
  {
    name: "Eleanor Pena",
    role: "Software Developer",
    image: "/img/inner-page/volounteer/03.jpg",
  },
  {
    name: "Brooklyn Simmons",
    role: "Software Developer",
    image: "/img/inner-page/volounteer/02.jpg",
  },
  {
    name: "Micheal R. Shannon",
    role: "Software Developer",
    image: "/img/inner-page/volounteer/05.jpg",
  },
  {
    name: "Darrell Steward",
    role: "Software Developer",
    image: "/img/inner-page/volounteer/06.jpg",
  },
  {
    name: "Eleanor Pena",
    role: "Software Developer",
    image: "/img/inner-page/volounteer/07.jpg",
  },
  {
    name: "Brooklyn Simmons",
    role: "Software Developer",
    image: "/img/inner-page/volounteer/08.jpg",
  },
];

const Volounteer = () => {
  return (
    <>
      <PageHeader currentPage="Volunteers" title="Volunteers" />
      <section className="volounteer-section-4 section-padding fix">
        <div className="container">
          <div className="row g-4">
            {volunteers.map((vol, index) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-delay={`${0.2 * ((index % 4) + 1)}s`} // auto delay
                key={index}
              >
                <div className="volounteer-inner-card">
                  <div className="volounteer-image">
                    <img src={vol.image} alt={vol.name} />
                    <div className="shape">
                      <img
                        src="/img/inner-page/volounteer/shape.png"
                        alt="shape"
                      />
                    </div>
                    <div className="volounteer-content">
                      <h5>{vol.name}</h5>
                      <p>{vol.role}</p>
                      <div className="social-icon">
                        <a
                          href="https://www.facebook.com/Abrariooficial"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Facebook AbraRio"
                        >
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                        <Link to="#">
                          <i className="fa-brands fa-whatsapp" />
                        </Link>
                        <a
                          href="https://www.instagram.com/abrariooficial/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Instagram AbraRio"
                        >
                          <i className="fa-brands fa-instagram" />
                        </a>
                        <Link to="#">
                          <i className="fas fa-paper-plane" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Volounteer;
