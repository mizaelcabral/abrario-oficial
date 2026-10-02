const ContactFormTwo = () => {
  return (
    <div className="contact-us-section-2 section-padding fix">
      <div className="container">
        <div className="contact-us-wrapper-2">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="contact-us-box">
                <div className="icon">
                  <i className="fa-solid fa-phone" />
                </div>
                <div className="contact-us-content">
                  <span>Telefone e WhatsApp</span>
                  <h5>
                    <a href="tel:+5521982043786">(21) 98204-3786</a> <br />
                    <a
                      href="https://api.whatsapp.com/send/?phone=5521982043786&text=Ol%C3%A1+Abrario+estou+precisando+de+atendimento%21&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: "14px", color: "#8833FF", fontWeight: 600 }}
                    >
                      Atendimento via WhatsApp
                    </a>
                  </h5>
                </div>
              </div>
              <div className="contact-us-box">
                <div className="icon">
                  <i className="fa-solid fa-location-dot" />
                </div>
                <div className="contact-us-content">
                  <span>Endereço</span>
                  <h5>
                    Centro, Niterói - RJ <br /> Brasil
                  </h5>
                </div>
              </div>
              <div className="contact-us-box mb-0">
                <div className="icon">
                  <i className="fa-solid fa-envelope" />
                </div>
                <div className="contact-us-content">
                  <span>E-mail</span>
                  <h5>
                    <a href="mailto:contato@abrario.org">contato@abrario.org</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="from-fill-up-box">
                <h4>Envie sua mensagem</h4>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
                    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";
                    const text = `Olá Abrario! Meu nome é ${name}. Mensagem: ${message}`;
                    window.open(
                      `https://api.whatsapp.com/send/?phone=5521982043786&text=${encodeURIComponent(text)}`,
                      "_blank"
                    );
                  }}
                  id="contact-form"
                >
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          id="name2"
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Seu e-mail"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="number"
                          id="number"
                          placeholder="Telefone / WhatsApp"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="address"
                          id="address"
                          placeholder="Sua cidade / estado"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-clt">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Escreva sua mensagem aqui..."
                          rows={4}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <button
                        type="submit"
                        className="theme-btn"
                        style={{ textTransform: "none", cursor: "pointer" }}
                      >
                        Enviar mensagem{" "}
                        <i className="fa-solid fa-arrow-right-long" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormTwo;
