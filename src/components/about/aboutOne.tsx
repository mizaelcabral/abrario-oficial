import { motion } from "motion/react";
const AboutOne = () => {
  return (
    <section
      id="quem-somos"
      style={{ scrollMarginTop: "110px" }}
      className="about-section section-padding fix"
    >
      <div className="container">
        <div className="about-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title mb-0">
                  <span className="sub-title wow fadeInUp">Quem somos</span>
                  <h2 className="wow fadeInUp" data-delay=".3s">
                    <span>N</span>ossa missão é cuidar de vidas com acolhimento.
                  </h2>
                </div>
                <p className="text wow fadeInUp" data-delay=".5s">
                  A Abrario nasceu para apoiar pacientes e familiares que buscam no
                  tratamento com a cannabis medicinal mais saúde, alívio e qualidade
                  de vida. Atuamos com seriedade, ética e empatia para garantir
                  acesso seguro e orientação.
                </p>
                <div className="about-icon-item wow fadeInUp" data-delay=".3s">
                  <div className="icon">
                    <img src="/img/home-1/icon/01.svg" alt="img" />
                  </div>
                  <div className="content">
                    <h4>Acolhimento</h4>
                    <p>
                      Oferecemos suporte completo e humanizado para que cada
                      associado encontre o caminho seguro para seu bem-estar
                      integral.
                    </p>
                  </div>
                </div>
                <div
                  className="about-icon-item mb-0 wow fadeInUp"
                  data-delay=".5s"
                >
                  <div className="icon">
                    <img src="/img/home-1/icon/02.svg" alt="img" />
                  </div>
                  <div className="content">
                    <h4>Apoio e orientação</h4>
                    <p>
                      Orientamos sobre tratamentos, direitos e procedimentos
                      para viabilizar o acesso à terapia canábica com segurança
                      plena.
                    </p>
                  </div>
                </div>
                <div className="about-bottom wow fadeInUp" data-delay=".3s">
                  <a
                    href="https://api.whatsapp.com/send/?phone=5521982043786&text=Ol%C3%A1+Abrario+estou+precisando+de+atendimento%21&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn"
                  >
                    Fale Conosco <i className="fa-solid fa-arrow-right-long" />
                  </a>
                  <div className="info-item">
                    <div className="client-image">
                      <img src="/img/home-1/about/client.png" alt="Marilene Oliveira" />
                    </div>
                    <div className="info-content">
                      <h5>Marilene Oliveira</h5>
                      <span>Presidente Abrario</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-item">
                <div className="about-image">
                  <motion.img
                    src="/img/home-1/about/about-3.jpg"
                    alt="img"
                    className="wow img-custom-anim-right"
                    initial={{
                      x: "5%",
                      clipPath: "inset(0 0 0 100%)",
                      opacity: 0,
                    }}
                    whileInView={{
                      x: "0%",
                      clipPath: "inset(0 0 0 0)",
                      opacity: 1,
                    }}
                    transition={{
                      duration: 1.3,
                      ease: [0.645, 0.045, 0.355, 1],
                      delay: 0.3,
                    }}
                  />
                  <div className="shape">
                    <img src="/img/home-1/about/shape.png" alt="img" />
                  </div>
                  <div className="about-image-2">
                    <motion.img
                      src="/img/home-1/about/about-1.jpg"
                      alt="img"
                      className="wow img-custom-anim-left"
                      initial={{
                        x: "5%",
                        clipPath: "inset(0 100% 0 0)",
                        opacity: 0,
                      }}
                      whileInView={{
                        x: "0%",
                        clipPath: "inset(0 0 0 0)",
                        opacity: 1,
                      }}
                      transition={{
                        duration: 1.3,
                        ease: [0.645, 0.045, 0.355, 1],
                        delay: 0.3,
                      }}
                    />
                  </div>
                  <div className="about-image-3">
                    <motion.img
                      src="/img/home-1/about/about-2.png"
                      alt="img"
                      className="wow img-custom-anim-left"
                      initial={{
                        x: "5%",
                        clipPath: "inset(0 100% 0 0)",
                        opacity: 0,
                      }}
                      whileInView={{
                        x: "0%",
                        clipPath: "inset(0 0 0 0)",
                        opacity: 1,
                      }}
                      transition={{
                        duration: 1.3,
                        ease: [0.645, 0.045, 0.355, 1],
                        delay: 0.3,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
