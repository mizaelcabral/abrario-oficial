import type { NewsType } from "@/type/newsType";
import { useEffect, useState } from "react";
import Pagination from "../pagination";

const NewsOne = ({
  data,
  isTitleShow,
  isPaginationShow,
  className,
  cardClass,
  rowClass,
}: {
  data: NewsType[];
  isTitleShow?: boolean;
  isPaginationShow?: boolean;
  className?: string;
  cardClass?: string;
  rowClass?: string;
}) => {
  const [selectedNews, setSelectedNews] = useState<NewsType | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedNews(null);
    };
    if (selectedNews) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedNews]);

  return (
    <>
      <section
        id="noticias"
        style={{ scrollMarginTop: "110px" }}
        className={`news-section section-padding fix ${className}`}
      >
        <div className="container">
          {isTitleShow ?? (
            <div className="section-title text-center">
              <span className="sub-title wow fadeInUp">Notícias</span>
              <h2 className="wow fadeInUp" data-delay=".3s">
                <span>Ú</span>ltimas novidades da Abrario
              </h2>
            </div>
          )}
          <div className={`row ${rowClass}`}>
            {data.map((item, index) => (
              <div
                key={item.id}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-delay={index * 0.2}
              >
                <div className={`news-card-items ${cardClass}`}>
                  <div
                    className="news-image"
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectedNews(item)}
                  >
                    <img src={item.img} alt="img" />
                    <div className="news-layer-wrapper">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="news-layer-image"
                          style={{ backgroundImage: `url(${item.img})` }}
                        />
                      ))}
                    </div>
                    <div className="bottom-shape">
                      <img src="/img/home-1/news/shape.png" alt="img" />
                    </div>
                  </div>
                  <div className="news-content">
                    <ul className="news-meta">
                      <li>
                        <i className="fa-regular fa-user" /> {item.author}
                      </li>
                      <li>
                        <i className="fa-regular fa-folder-open" />
                        {item.comment}
                      </li>
                    </ul>
                    <h4>
                      <a
                        href="#ler-materia"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedNews(item);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        {item.title}
                      </a>
                    </h4>
                    <a
                      href="#ler-materia"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedNews(item);
                      }}
                      className="link-btn"
                      style={{ cursor: "pointer" }}
                    >
                      Ler matéria <i className="fa-solid fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {isPaginationShow ?? <Pagination />}
        </div>
      </section>

      {/* Reading Popup Modal */}
      {selectedNews && (
        <div
          className="news-modal-overlay"
          onClick={() => setSelectedNews(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(12, 3, 25, 0.85)",
            backdropFilter: "blur(6px)",
            zIndex: 999999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            className="news-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              maxWidth: "850px",
              width: "100%",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              overflow: "hidden",
            }}
          >
            {/* Header bar with close button */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 24px",
                borderBottom: "1px solid #f0edf7",
                backgroundColor: "#faf8ff",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#8833FF",
                  letterSpacing: "1.5px",
                }}
              >
                Notícia Abrario
              </span>
              <button
                onClick={() => setSelectedNews(null)}
                aria-label="Fechar"
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "22px",
                  color: "#6c607a",
                  cursor: "pointer",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ede5ff";
                  e.currentTarget.style.color = "#160233";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#6c607a";
                }}
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div
              style={{
                padding: "28px",
                overflowY: "auto",
              }}
            >
              {/* Featured Image */}
              {selectedNews.img && (
                <div
                  style={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    marginBottom: "24px",
                    maxHeight: "380px",
                  }}
                >
                  <img
                    src={selectedNews.img}
                    alt={selectedNews.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              )}

              {/* Meta Header */}
              <div
                style={{
                  fontSize: "14px",
                  color: "#747080",
                  marginBottom: "16px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "14px",
                  alignItems: "center",
                }}
              >
                {selectedNews.author && (
                  <span>
                    por{" "}
                    {selectedNews.authorUrl ? (
                      <a
                        href={selectedNews.authorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#8833FF", fontWeight: 600, textDecoration: "none" }}
                      >
                        {selectedNews.author}
                      </a>
                    ) : (
                      <strong style={{ color: "#160233" }}>{selectedNews.author}</strong>
                    )}
                  </span>
                )}
                {selectedNews.category && (
                  <span>
                    em{" "}
                    <a
                      href={selectedNews.categoryUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#8833FF", fontWeight: 600, textDecoration: "none" }}
                    >
                      {selectedNews.category}
                    </a>
                  </span>
                )}
                {selectedNews.date && (
                  <span>
                    <i className="fa-regular fa-calendar-days" style={{ marginRight: "6px" }} />
                    Postado em {selectedNews.date}
                  </span>
                )}
              </div>

              {/* Title */}
              <h2
                style={{
                  fontSize: "26px",
                  lineHeight: 1.35,
                  color: "#160233",
                  marginBottom: "24px",
                  fontFamily: "'DM Serif Text', serif",
                  fontWeight: 400,
                }}
              >
                {selectedNews.title}
              </h2>

              {/* Content Paragraphs */}
              <div
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "#4a4556",
                }}
              >
                {selectedNews.content ? (
                  selectedNews.content.split("\n\n").map((para, i) => {
                    if (para.startsWith("“") || para.startsWith('"')) {
                      return (
                        <blockquote
                          key={i}
                          style={{
                            borderLeft: "4px solid #8833FF",
                            backgroundColor: "#f7f4fc",
                            padding: "16px 20px",
                            margin: "20px 0",
                            borderRadius: "0 12px 12px 0",
                            fontStyle: "italic",
                            color: "#160233",
                            fontSize: "16px",
                            lineHeight: "1.7",
                          }}
                        >
                          {para}
                        </blockquote>
                      );
                    }
                    if (para === "Uma imersão entre ciência, cuidado e natureza" || para === "Uma semente de transformação") {
                      return (
                        <h3
                          key={i}
                          style={{
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "#160233",
                            margin: "28px 0 14px 0",
                            fontFamily: "'DM Serif Text', serif",
                          }}
                        >
                          {para}
                        </h3>
                      );
                    }
                    const linkMatch = para.match(/^\[(.*?)\]\((.*?)\)$/);
                    if (linkMatch) {
                      const [, linkText, linkUrl] = linkMatch;
                      return (
                        <div key={i} style={{ margin: "24px 0", textAlign: "center" }}>
                          <a
                            href={linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "10px",
                              backgroundColor: "#8833FF",
                              color: "#ffffff",
                              padding: "12px 26px",
                              borderRadius: "50px",
                              fontWeight: 600,
                              textDecoration: "none",
                              fontSize: "15px",
                              boxShadow: "0 4px 14px rgba(136, 51, 255, 0.25)",
                            }}
                          >
                            <i className="fa-brands fa-instagram" style={{ fontSize: "18px" }} />
                            <span>{linkText}</span>
                            <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: "12px" }} />
                          </a>
                        </div>
                      );
                    }
                    if (para.startsWith("FOTOS:")) {
                      return (
                        <p
                          key={i}
                          style={{
                            fontSize: "13px",
                            color: "#8c8599",
                            fontStyle: "italic",
                            marginTop: "16px",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <i className="fa-regular fa-camera" />
                          <span>{para}</span>
                        </p>
                      );
                    }
                    if (para.includes("•")) {
                      const lines = para.split("\n");
                      return (
                        <div
                          key={i}
                          style={{
                            backgroundColor: "#faf8ff",
                            border: "1px solid #ede5ff",
                            borderRadius: "14px",
                            padding: "18px 22px",
                            margin: "20px 0",
                          }}
                        >
                          {lines.map((line, lIdx) => {
                            if (line.startsWith("•")) {
                              return (
                                <div
                                  key={lIdx}
                                  style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "10px",
                                    marginBottom: "10px",
                                    color: "#2e2538",
                                    fontSize: "15px",
                                    lineHeight: "1.6",
                                  }}
                                >
                                  <span style={{ color: "#8833FF", fontWeight: "bold", fontSize: "18px", lineHeight: "1" }}>•</span>
                                  <span>{line.replace(/^•\s*/, "")}</span>
                                </div>
                              );
                            }
                            return (
                              <p
                                key={lIdx}
                                style={{
                                  marginBottom: "12px",
                                  fontWeight: 600,
                                  color: "#160233",
                                }}
                              >
                                {line}
                              </p>
                            );
                          })}
                        </div>
                      );
                    }
                    return (
                      <p key={i} style={{ marginBottom: "16px", textAlign: "justify" }}>
                        {para}
                      </p>
                    );
                  })
                ) : (
                  <p>{selectedNews.description || "Em breve mais informações sobre esta matéria."}</p>
                )}
              </div>

              {/* Modal Footer Close Button */}
              <div
                style={{
                  marginTop: "32px",
                  textAlign: "right",
                  borderTop: "1px solid #f0edf7",
                  paddingTop: "20px",
                }}
              >
                <button
                  onClick={() => setSelectedNews(null)}
                  className="theme-btn"
                  style={{ padding: "12px 28px", cursor: "pointer" }}
                >
                  Fechar matéria
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsOne;
