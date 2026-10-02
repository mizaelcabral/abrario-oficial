import ModalVideo from "./modalVideo";

const faqItems = [
  {
    id: "collapseTwo",
    headingId: "headingTwo",
    question: "O que é a Abrario e como ela apoia famílias?",
    answer:
      "Somos uma associação sem fins lucrativos que viabiliza o acesso seguro a terapias canábicas com pleno acolhimento.",
    expanded: false,
  },
  {
    id: "collapseOne",
    headingId: "headingOne",
    question: "Como posso me associar e ter acolhimento?",
    answer:
      "Basta entrar em contato pelo nosso atendimento para receber as orientações necessárias e já iniciar o seu cadastro.",
    expanded: true,
  },
  {
    id: "collapsethree",
    headingId: "headingthree",
    question: "O uso canábico é autorizado no Brasil?",
    answer:
      "Sim, mediante prescrição médica legal e aval da Anvisa ou por meio de associações que atuam com amparo da justiça.",
    expanded: false,
  },
  {
    id: "collapsefour",
    headingId: "headingfour",
    question: "A Abrario presta orientação jurídica?",
    answer:
      "Sim, apoiamos nossos associados prestando esclarecimentos sobre direitos e procedimentos de custeio terapêutico.",
    expanded: false,
  },
  {
    id: "collapsefive",
    headingId: "headingfive",
    question: "Como posso doar ou contribuir com a causa?",
    answer:
      "Você pode contribuir com doações financeiras ou voluntárias, mantendo viva a nossa missão de cuidar com dignidade.",
    expanded: false,
  },
];

const FaqList = ({ className }: { className?: string }) => {
  return (
    <section className={`faq-section section-padding fix ${className}`}>
      <div className="container">
        <div className="faq-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="faq-items">
                <div className="accordion" id="accordionExample">
                  {faqItems.map((item, idx) => (
                    <div
                      className={`accordion-item${
                        idx === faqItems.length - 1 ? " mb-0" : ""
                      } wow fadeInUp`}
                      data-delay={`${0.3 + idx * 0.2}s`}
                      key={item.id}
                    >
                      <h2 className="accordion-header" id={item.headingId}>
                        <button
                          className={`accordion-button${
                            item.expanded ? "" : " collapsed"
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${item.id}`}
                          aria-expanded={item.expanded ? "true" : "false"}
                          aria-controls={item.id}
                        >
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id={item.id}
                        className={`accordion-collapse collapse${
                          item.expanded ? " show" : ""
                        }`}
                        aria-labelledby={item.headingId}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-content">
                <div className="section-title mb-0">
                  <span className="sub-title wow fadeInUp">Dúvidas</span>
                  <h2 className="wow fadeInUp" data-delay=".3s">
                    <span>T</span>ire todas as dúvidas sobre o nosso tratamento
                  </h2>
                </div>
                <p className="text wow fadeInUp" data-delay=".5s">
                  Apoiamos você com orientações claras sobre o acesso à cannabis
                  medicinal no Brasil. Reunimos as respostas para as maiores
                  dúvidas de pacientes e familiares sobre nosso suporte.
                </p>
                <div
                  className="faq-image wow fadeInRight"
                  data-delay="0.1"
                  data-wow-duration="2500ms"
                >
                  <img src="/img/home-1/faq.jpg" alt="img" />
                  <ModalVideo>
                    <a
                      href="#"
                      className="video-btn ripple video-popup"
                      style={{ zIndex: "99" }}
                    >
                      <i className="fa-solid fa-play" />
                    </a>
                  </ModalVideo>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqList;
