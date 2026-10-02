import { motion } from "motion/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { ReactNode } from "react";

interface SlideItem {
  subTitle: string;
  title: ReactNode;
  description: string;
  bg: string;
}

const slides: SlideItem[] = [
  {
    subTitle: "Acesso à saúde e qualidade de vida",
    title: (
      <>
        Acolhimento e acesso <br />
        à cannabis medicinal
      </>
    ),
    description: `Apoiamos pacientes e famílias no acesso seguro ao tratamento com cannabis medicinal, promovendo saúde, acolhimento e bem-estar integral.`,
    bg: "url(/img/home-1/hero/hero-bg.jpg)",
  },
  {
    subTitle: "Tratamento digno e acolhimento humano",
    title: (
      <>
        Cuidado humanizado e <br />
        esperança para famílias
      </>
    ),
    description: `Garantimos suporte especializado, orientação segura e acolhimento contínuo para quem busca qualidade de vida através da medicina canábica.`,
    bg: "url(/img/home-1/hero/hero-bg-2.jpg)",
  },
  {
    subTitle: "Ciência, informação e cuidado contínuo",
    title: (
      <>
        Acesso democrático à <br />
        medicina canábica
      </>
    ),
    description: `Atuamos com ética e dedicação para viabilizar tratamentos eficazes e defender o direito de cada associado a viver com plena dignidade.`,
    bg: "url(/img/home-1/hero/hero-bg-3.jpg)",
  },
];

const HeroSlider = () => {
  return (
    <section className="hero-section-1">
      <div className="arrow-button">
        <button className="array-prev">
          <i className="fa-light fa-chevron-left" />
        </button>
        <button className="array-next">
          <i className="fa-light fa-chevron-right" />
        </button>
      </div>
      <Swiper
        navigation={{
          nextEl: ".array-next",
          prevEl: ".array-prev",
        }}
        loop
        effect="fade"
        speed={3000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, EffectFade, Autoplay]}
        className="hero-slider"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            {({ isVisible }) => (
              <div className="hero-1">
                <div className="shape">
                  <img src="/img/home-1/hero/shape.png" alt="img" />
                </div>
                <div
                  className="hero-bg bg-cover"
                  style={{
                    backgroundImage: slide.bg,
                  }}
                ></div>
                <motion.div
                  initial={{ opacity: 0, visibility: "hidden" }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    visibility: isVisible ? "visible" : "hidden",
                  }}
                  transition={{
                    delay: 0.5,
                  }}
                  className="container"
                >
                  <div className="row g-4 justify-content-center">
                    <div className="col-lg-10">
                      <div className="hero-content">
                        <motion.h6
                          initial={{
                            opacity: 0,
                            y: "50px",
                            visibility: "hidden",
                          }}
                          animate={{
                            opacity: isVisible ? 1 : 0,
                            visibility: isVisible ? "visible" : "hidden",
                            y: isVisible ? 0 : "50px",
                          }}
                          transition={{
                            duration: 0.7,
                            delay: 0.5,
                          }}
                        >
                          {slide.subTitle}
                        </motion.h6>
                        <motion.h1
                          initial={{
                            opacity: 0,
                            y: "50px",
                            visibility: "hidden",
                          }}
                          animate={{
                            opacity: isVisible ? 1 : 0,
                            visibility: isVisible ? "visible" : "hidden",
                            y: isVisible ? 0 : "50px",
                          }}
                          transition={{
                            duration: 0.7,
                            delay: 0.7,
                          }}
                        >
                          {slide.title}
                        </motion.h1>
                        <motion.p
                          initial={{
                            opacity: 0,
                            y: "50px",
                            visibility: "hidden",
                          }}
                          animate={{
                            opacity: isVisible ? 1 : 0,
                            visibility: isVisible ? "visible" : "hidden",
                            y: isVisible ? 0 : "50px",
                          }}
                          transition={{
                            duration: 0.7,
                            delay: 0.9,
                          }}
                        >
                          {slide.description}
                        </motion.p>
                        <motion.div
                          className="hero-button"
                          initial={{
                            opacity: 0,
                            y: "50px",
                            visibility: "hidden",
                          }}
                          animate={{
                            opacity: isVisible ? 1 : 0,
                            visibility: isVisible ? "visible" : "hidden",
                            y: isVisible ? 0 : "50px",
                          }}
                          transition={{
                            duration: 0.7,
                            delay: 1.5,
                          }}
                        >
                          <a
                            href="https://abrario.cplylegacy.com.br/AreaAssociados/MinhaConta/CadastroAssociadoPF"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="theme-btn"
                            style={{ textTransform: "none" }}
                          >
                            Associe-se{" "}
                            <i className="fa-solid fa-arrow-right-long" />
                          </a>
                          <a
                            href="https://api.whatsapp.com/send/?phone=5521982043786&text=Ol%C3%A1+Abrario+estou+precisando+de+atendimento%21&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="theme-btn border-btn"
                          >
                            Fale Conosco{" "}
                            <i className="fa-solid fa-arrow-right-long" />
                          </a>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
