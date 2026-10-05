const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=5521982043786&text=" +
  encodeURIComponent("Olá! Gostaria de falar com o atendimento da Abrario.") +
  "&type=phone_number&app_absent=0";

const FloatingWhatsapp = () => {
  return (
    <>
      <style>{`
        .floating-whatsapp-btn {
          position: fixed;
          right: 28px;
          bottom: 95px;
          width: 54px;
          height: 54px;
          background-color: #25D366;
          color: #ffffff !important;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          z-index: 99999;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          animation: whatsappPulse 2s infinite;
        }

        .floating-whatsapp-btn i {
          color: #ffffff !important;
          line-height: 1;
        }

        .floating-whatsapp-btn:hover {
          color: #ffffff !important;
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
        }

        @keyframes whatsappPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 16px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        @media (max-width: 575px) {
          .floating-whatsapp-btn {
            right: 20px;
            bottom: 25px;
            width: 50px;
            height: 50px;
            font-size: 26px;
          }
        }
      `}</style>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        title="Fale conosco no WhatsApp da Abrario"
        aria-label="Fale conosco no WhatsApp da Abrario"
      >
        <i className="fa-brands fa-whatsapp" />
      </a>
    </>
  );
};

export default FloatingWhatsapp;
