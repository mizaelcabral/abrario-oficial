import { Link, useLocation } from "react-router-dom";

interface FooterLink {
  name: string;
  path: string;
  isExternal?: boolean;
}

const quickLinks: FooterLink[] = [
  { name: "Início", path: "/" },
  { name: "Quem Somos", path: "/#quem-somos" },
  { name: "Nossos Serviços", path: "/#servicos" },
  { name: "Notícias & Artigos", path: "/#noticias" },
  { name: "Fale Conosco", path: "/contact" },
];

const exploreNow: FooterLink[] = [
  { name: "Nosso Time", path: "/#nosso-time" },
  { name: "Faça sua Doação", path: "/#doe" },
  { name: "Perguntas Frequentes", path: "/faq" },
  { name: "Projetos & Ações", path: "/project" },
];

const supports: FooterLink[] = [
  {
    name: "Cadastro de Paciente",
    path: "https://abrario.cplylegacy.com.br/AreaAssociados/MinhaConta/CadastroAssociadoPF",
    isExternal: true,
  },
  {
    name: "Área do Associado",
    path: "https://abrario.cplylegacy.com.br/AreaAssociados/",
    isExternal: true,
  },
  { name: "Como se Associar", path: "/#quem-somos" },
  { name: "Canais de Atendimento", path: "/contact" },
];

const FooterOne = () => {
  const pathName = useLocation().pathname;

  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    if (path.includes("#")) {
      const hash = path.split("#")[1];
      if (pathName === "/" || pathName === "/home-1") {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const renderLink = (item: FooterLink) => {
    if (item.isExternal || item.path.startsWith("http")) {
      return (
        <a href={item.path} target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-chevrons-right" /> {item.name}
        </a>
      );
    }
    return (
      <Link to={item.path} onClick={(e) => handleLinkClick(item.path, e)}>
        <i className="fa-solid fa-chevrons-right" /> {item.name}
      </Link>
    );
  };

  return (
    <footer className="footer-section header-bg fix">
      <div className="container">
        <div className="footer-widget-wrapper">
          <div className="row g-4 justify-content-between">
            <div
              className="col-xl-2 col-md-6 col-lg-2 wow fadeInUp"
              data-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h3>Links Rápidos</h3>
                </div>
                <ul className="list-area">
                  {quickLinks.map((item) => (
                    <li key={item.name}>{renderLink(item)}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 col-lg-3 ps-lg-5 wow fadeInUp"
              data-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h3>Explorar</h3>
                </div>
                <ul className="list-area">
                  {exploreNow.map((item) => (
                    <li key={item.name}>{renderLink(item)}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-md-6 col-lg-2 wow fadeInUp"
              data-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h3>Suporte</h3>
                </div>
                <ul className="list-area">
                  {supports.map((item) => (
                    <li key={item.name}>{renderLink(item)}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-xl-5 col-md-6 col-lg-5 ps-lg-5 wow fadeInUp"
              data-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h3>Novidades</h3>
                </div>
                <div className="footer-newsletter">
                  <p>
                    Acompanhe as ações, notícias científicas e conquistas da
                    AbraRio na luta pelo acesso à saúde e cannabis medicinal.
                  </p>
                  <form action="#" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-clt">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Digite seu e-mail"
                      />
                      <button type="submit" className="theme-btn">
                        Inscrever-se
                      </button>
                    </div>
                  </form>
                  <div className="social-icon">
                    <a
                      href="https://wa.me/5521982043786"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="WhatsApp AbraRio"
                    >
                      <i className="fa-brands fa-whatsapp" />
                    </a>
                    <a
                      href="https://www.instagram.com/abrario_"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Instagram AbraRio"
                    >
                      <i className="fa-brands fa-instagram" />
                    </a>
                    <a
                      href="https://www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="YouTube AbraRio"
                    >
                      <i className="fa-brands fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-wrapper">
            <p>
              Copyright &copy; {new Date().getFullYear()} AbraRio. Todos os direitos reservados.
            </p>
            <ul className="footer-bottom-list">
              <li>
                <Link to="/faq">Perguntas Frequentes</Link>
              </li>
              <li>
                <Link
                  to="/#quem-somos"
                  onClick={(e) => handleLinkClick("/#quem-somos", e)}
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/contact">Fale Conosco</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
