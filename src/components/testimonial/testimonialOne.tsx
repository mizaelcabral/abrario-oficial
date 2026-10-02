import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    stars: 5,
    text: "O acolhimento da Abrario transformou a qualidade de vida do meu filho com epilepsia. Encontramos orientação médica segura, apoio jurídico e um suporte humano que nos devolveu a esperança e a paz. Sou imensamente grata por todo o carinho e dedicação dessa associação.”",
    name: "Maria Helena Costa",
    role: "Associada Abrario",
  },
  {
    stars: 5,
    text: "Após anos convivendo com dores crônicas intensas, o tratamento com a cannabis medicinal pela Abrario me devolveu a disposição e a alegria de viver. Toda a equipe nos guia com seriedade, ética e atenção permanente. Recomendo essa causa com todo meu coração e gratidão.”",
    name: "Carlos Eduardo Ramos",
    role: "Associado Abrario",
  },
  {
    stars: 5,
    text: "A Abrario nos acolheu no momento mais difícil, trazendo informação clara, suporte legal e esperança real para a saúde da minha mãe com Alzheimer. Hoje ela tem noites tranquilas e um convívio familiar muito mais sereno. Essa associação faz um bem inestimável a todos.”",
    name: "Patrícia Siqueira",
    role: "Familiar de associada",
  },
];

const TestimonialOne = () => {
  return (
    <section className="testimonial-section section-padding fix">
      <div className="container">
        <div className="section-title">
          <span className="sub-title wow fadeInUp">Depoimentos</span>
          <h2 className="wow fadeInUp" data-delay=".3s">
            <span>O</span> que dizem sobre nosso acolhimento.
          </h2>
        </div>
        <div className="testimonial-wrapper">
          <div className="row g-4">
            <div
              className="col-lg-5 wow fadeInLeft"
              data-delay="0.1"
              data-wow-duration="2500ms"
            >
              <div className="testimonial-image">
                <img src="/img/home-1/testimonial/01.jpg" alt="img" />
                <div className="shape">
                  <img src="/img/home-1/testimonial/shape.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="testimonial-content">
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
                  className="testimonial-slider"
                  modules={[Pagination, Autoplay]}
                >
                  {testimonials.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="content">
                        <div className="star">
                          {[...Array(item.stars)].map((_, i) => (
                            <i key={i} className="fa-solid fa-star" />
                          ))}
                        </div>
                        <p>{item.text}</p>
                        <h3>{item.name}</h3>
                        <span>{item.role}</span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <h6>
                  Total de famílias acolhidas este ano &gt; <span>+1.500</span>
                </h6>
                <Swiper
                  spaceBetween={30}
                  speed={1300}
                  loop={true}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    1199: {
                      slidesPerView: 4,
                    },
                    991: {
                      slidesPerView: 3,
                    },
                    767: {
                      slidesPerView: 3,
                    },
                    575: {
                      slidesPerView: 1,
                    },
                    0: {
                      slidesPerView: 1,
                    },
                  }}
                  modules={[Autoplay]}
                  className="brand-slider"
                >
                  {[
                    "01.png",
                    "02.png",
                    "03.png",
                    "04.png",
                    "01.png",
                    "02.png",
                    "03.png",
                    "04.png",
                  ].map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="brand-image text-center">
                        <img src={`/img/home-1/brand/${img}`} alt="img" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialOne;
