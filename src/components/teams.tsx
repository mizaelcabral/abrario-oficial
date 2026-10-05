
const teamData = [
  {
    image: "/img/home-1/team/01.jpg",
    name: "Marilene Oliveira",
    role: "Presidente Abrario",
    delay: ".2s",
    socialLinks: [
      { icon: "fa-brands fa-facebook-f", url: "https://www.facebook.com/Abrariooficial" },
      {
        icon: "fa-brands fa-whatsapp",
        url: "https://api.whatsapp.com/send/?phone=5521982043786&text=Ol%C3%A1+Abrario+estou+precisando+de+atendimento%21&type=phone_number&app_absent=0",
      },
      { icon: "fa-brands fa-instagram", url: "https://www.instagram.com/abrariooficial/" },
      { icon: "fas fa-paper-plane", url: "#" },
    ],
  },
  {
    image: "/img/home-1/team/02.jpg",
    name: "Filipe Cunha",
    role: "Diretor de Cultivo",
    delay: ".4s",
    socialLinks: [
      { icon: "fa-brands fa-facebook-f", url: "https://www.facebook.com/Abrariooficial" },
      {
        icon: "fa-brands fa-whatsapp",
        url: "https://api.whatsapp.com/send/?phone=5521982043786&text=Ol%C3%A1+Abrario+estou+precisando+de+atendimento%21&type=phone_number&app_absent=0",
      },
      { icon: "fa-brands fa-instagram", url: "https://www.instagram.com/abrariooficial/" },
      { icon: "fas fa-paper-plane", url: "#" },
    ],
  },
  {
    image: "/img/home-1/team/03.jpg",
    name: "Diogo da Silva",
    role: "Diretor Administrativo",
    delay: ".6s",
    socialLinks: [
      { icon: "fa-brands fa-facebook-f", url: "https://www.facebook.com/Abrariooficial" },
      {
        icon: "fa-brands fa-whatsapp",
        url: "https://api.whatsapp.com/send/?phone=5521982043786&text=Ol%C3%A1+Abrario+estou+precisando+de+atendimento%21&type=phone_number&app_absent=0",
      },
      { icon: "fa-brands fa-instagram", url: "https://www.instagram.com/abrariooficial/" },
      { icon: "fas fa-paper-plane", url: "#" },
    ],
  },
  {
    image: "/img/home-1/team/04.jpg",
    name: "Rodolfo da Silva",
    role: "Gestão de Gente",
    delay: ".8s",
    socialLinks: [
      { icon: "fa-brands fa-facebook-f", url: "https://www.facebook.com/Abrariooficial" },
      {
        icon: "fa-brands fa-whatsapp",
        url: "https://api.whatsapp.com/send/?phone=5521982043786&text=Ol%C3%A1+Abrario+estou+precisando+de+atendimento%21&type=phone_number&app_absent=0",
      },
      { icon: "fa-brands fa-instagram", url: "https://www.instagram.com/abrariooficial/" },
      { icon: "fas fa-paper-plane", url: "#" },
    ],
  },
];

const Teams = () => {
  return (
    <section
      id="nosso-time"
      style={{ scrollMarginTop: "110px" }}
      className="team-section section-padding fix pb-0"
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-title wow fadeInUp">Nosso time</span>
          <h2 className="wow fadeInUp" data-delay=".3s">
            <span>C</span>onheça nossa diretoria e equipe
          </h2>
        </div>
        <div className="row">
          {teamData.map((member, index) => (
            <div
              key={index}
              className={`col-xl-3 col-lg-6 col-md-6 wow fadeInUp`}
              data-delay={member.delay}
            >
              <div className="team-card-items">
                <div className="team-image">
                  <img src={member.image} alt="img" />
                </div>
                <div className="team-content">
                  <h5>{member.name}</h5>
                  <p>{member.role}</p>
                  <div className="social-icon">
                    {member.socialLinks.map((link, i) => (
                      <a
                        href={link.url}
                        key={i}
                        target={link.url !== "#" ? "_blank" : undefined}
                        rel={link.url !== "#" ? "noopener noreferrer" : undefined}
                        title={link.icon.includes("instagram") ? "Instagram AbraRio" : undefined}
                      >
                        <i className={link.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
