import Marquee from "react-fast-marquee";

const projectSlides = [
  {
    image: "/img/home-1/project/01.jpg",
    title: "Eventos da Abrario",
    subtitle: "Palestras e conscientização",
    shape: "/img/home-1/project/shape.png",
    contentClass: "",
  },
  {
    image: "/img/home-1/project/02.jpg",
    title: "Eventos da Abrario",
    subtitle: "Congressos e capacitação",
    shape: "/img/home-1/project/shape.png",
    contentClass: "",
  },
  {
    image: "/img/home-1/project/03.jpg",
    title: "Eventos da Abrario",
    subtitle: "Encontros e acolhimento",
    shape: "/img/home-1/project/shape.png",
    contentClass: "",
  },
  {
    image: "/img/home-1/project/04.jpg",
    title: "Eventos da Abrario",
    subtitle: "Mobilização comunitária",
    shape: "/img/home-1/project/shape.png",
    contentClass: "",
  },
  {
    image: "/img/home-1/project/05.jpg",
    title: "Eventos da Abrario",
    subtitle: "Educação em saúde",
    shape: "/img/home-1/project/shape.png",
    contentClass: "",
  },
  {
    image: "/img/home-1/project/06.jpg",
    title: "Eventos da Abrario",
    subtitle: "Apoio e acolhimento",
    shape: "/img/home-1/project/shape.png",
    contentClass: "",
  },
];

const ProjectsSlider = () => {
  const whatsappEventUrl =
    "https://api.whatsapp.com/send/?phone=5521982043786&text=" +
    encodeURIComponent("Olá! Quero que a Abrario participe de nosso evento.") +
    "&type=phone_number&app_absent=0";

  return (
    <section
      id="eventos"
      style={{ scrollMarginTop: "110px" }}
      className="project-section section-padding pb-0 fix"
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title wow fadeInUp">Nossos eventos</span>
          <h2 className="wow fadeInUp" data-delay=".3s">
            <span>E</span>ventos que a AbraRio participou
          </h2>
        </div>
      </div>
      <Marquee speed={100} className="project-slider">
        {projectSlides.map((slide, idx) => (
          <div key={idx} style={{ marginRight: "20px" }}>
            <div className="brand-slide-element">
              <div className="project-card-item">
                <div className="project-image">
                  <img src={slide.image} alt="img" />
                  <div className="shape-image">
                    <img src={slide.shape} alt="img" />
                  </div>
                  <div className={`project-content ${slide.contentClass}`}>
                    <div className="content">
                      <h3>
                        <a
                          href={whatsappEventUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          {slide.title}
                        </a>
                      </h3>
                      <h5>{slide.subtitle}</h5>
                    </div>
                    <a
                      href={whatsappEventUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="arrow-icon"
                      title="Quero que a Abrario participe de nosso evento"
                    >
                      <i className="fa-solid fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
      <Marquee speed={100} direction="right" className="project-slider-2">
        {projectSlides.map((slide, idx) => (
          <div key={idx} style={{ marginRight: "20px" }}>
            <div className="brand-slide-element">
              <div className="project-card-item">
                <div className="project-image">
                  <img src={slide.image} alt="img" />
                  <div className="shape-image">
                    <img src={slide.shape} alt="img" />
                  </div>
                  <div className={`project-content ${slide.contentClass}`}>
                    <div className="content">
                      <h3>
                        <a
                          href={whatsappEventUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          {slide.title}
                        </a>
                      </h3>
                      <h5>{slide.subtitle}</h5>
                    </div>
                    <a
                      href={whatsappEventUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="arrow-icon"
                      title="Quero que a Abrario participe de nosso evento"
                    >
                      <i className="fa-solid fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ProjectsSlider;
