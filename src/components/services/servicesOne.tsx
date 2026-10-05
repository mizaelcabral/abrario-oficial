import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const serviceSlides = [
  {
    icon: "/img/home-1/icon/04.svg",
    title: "Apoio Jurídico",
    description:
      "Auxiliamos nossos associados com suporte legal seguro e dedicado para garantir o pleno direito ao tratamento com saúde.",
  },
  {
    icon: "/img/home-1/icon/05.svg",
    title: "Orientação Médica",
    description:
      "Conectamos você a médicos capacitados para orientar condutas e terapias canábicas com total responsabilidade e carinho.",
  },
  {
    icon: "/img/home-1/icon/03.svg",
    title: "Atendimento Ágil",
    description:
      "Nossa equipe acolhe suas dúvidas com rapidez e atenção, facilitando cada etapa da sua jornada de cuidado com a Abrario.",
  },
  {
    icon: "/img/home-1/icon/04.svg",
    title: "Apoio Jurídico",
    description:
      "Auxiliamos nossos associados com suporte legal seguro e dedicado para garantir o pleno direito ao tratamento com saúde.",
  },
  {
    icon: "/img/home-1/icon/05.svg",
    title: "Orientação Médica",
    description:
      "Conectamos você a médicos capacitados para orientar condutas e terapias canábicas com total responsabilidade e carinho.",
  },
  {
    icon: "/img/home-1/icon/03.svg",
    title: "Atendimento Ágil",
    description:
      "Nossa equipe acolhe suas dúvidas com rapidez e atenção, facilitando cada etapa da sua jornada de cuidado com a Abrario.",
  },
];
const ServicesOne = () => {
  return (
    <section
      id="servicos"
      className="causes-section section-padding fix bg-cover"
      style={{
        backgroundImage: "url(/img/home-1/service/bg.jpg)",
        scrollMarginTop: "110px",
      }}
    >
      <div className="shape">
        <img src="/img/home-1/service/shape.png" alt="img" />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title wow fadeInUp">Nossos serviços</span>
          <h2 className="wow fadeInUp" data-delay=".3s">
            <span>O</span>ferecemos apoio integral e cuidado para <br /> quem mais
            precisa
          </h2>
        </div>
        <Swiper
          spaceBetween={30}
          speed={1300}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".dot",
            clickable: true,
          }}
          breakpoints={{
            1199: {
              slidesPerView: 3,
            },
            991: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="service-slider"
        >
          {serviceSlides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="causes-box-item">
                <div className="icon">
                  <img src={slide.icon} alt="img" />
                </div>
                <div className="content">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                  <a
                    href="https://api.whatsapp.com/send/?phone=5521982043786&text=Ol%C3%A1+Abrario+estou+precisando+de+atendimento%21&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn"
                  >
                    Saiba mais <i className="fa-solid fa-arrow-right-long" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-dot">
          <div className="dot" />
        </div>
      </div>
    </section>
  );
};

export default ServicesOne;
