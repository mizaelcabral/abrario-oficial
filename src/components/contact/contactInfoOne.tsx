import { motion } from "motion/react";
import { Link } from "react-router-dom";
const ContactInfoOne = () => {
  return (
    <section className="contact-section section-padding pb-0">
      <div className="container-fluid">
        <div className="contact-wrapper">
          <div className="row g-4 align-items-end">
            <div className="col-lg-6">
              <motion.div
                className="contact-image"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1.3,
                  ease: [0.645, 0.045, 0.355, 1],
                  delay: 0.3,
                }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <img src="/img/home-1/contact.jpg" alt="img" />
              </motion.div>
            </div>
            <div className="col-lg-6">
              <div className="contact-content">
                <div className="logo-image">
                  <Link to="/">
                    <img src="/img/logo/abrario-logo.png" alt="img" />
                  </Link>
                </div>
                <div className="section-title mb-0">
                  <h2 className="sec-title text-white">
                    <span>S</span>empre de portas abertas para <br /> quem busca
                    apoio e cuidados
                  </h2>
                </div>
                <p className="text wow fadeInUp" data-delay=".3s">
                  A AbraRio acolhe associados e familiares com afeto e
                  responsabilidade, promovendo o acesso seguro e humanizado ao
                  tratamento com cannabis medicinal.
                </p>
                <div className="contact-item wow fadeInUp" data-delay=".5s">
                  <a
                    href="https://abrario.cplylegacy.com.br/AreaAssociados/MinhaConta/CadastroAssociadoPF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn"
                  >
                    Seja um associado <i className="fa-solid fa-arrow-right-long" />
                  </a>
                  <h6>
                    <span>Ligue:</span>
                    <a href="tel:+5521982043786">(21) 98204-3786</a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoOne;
