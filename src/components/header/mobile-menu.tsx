import { menuData } from "@/data/menuData";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { Link, useLocation } from "react-router-dom";

const MobileMenu = ({
  offcanvaseOpen,
  setOffcanvaseOpen,
}: {
  offcanvaseOpen: boolean;
  setOffcanvaseOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const pathName = useLocation().pathname;

  return (
    <>
      <div>
        <div className="fix-area">
          <div
            className={`offcanvas__info ${offcanvaseOpen ? "info-open" : ""}`}
          >
            <div className="offcanvas__wrapper">
              <div className="offcanvas__content">
                <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                  <div className="offcanvas__logo">
                    <Link to="/">
                      <img src="/img/logo/abrario-logo.png" alt="logo-img" />
                    </Link>
                  </div>
                  <div
                    onClick={() => setOffcanvaseOpen(false)}
                    className="offcanvas__close"
                  >
                    <button>
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                <p className="text d-none d-xl-block">
                  Nullam dignissim, ante scelerisque the is euismod fermentum
                  odio sem semper the is erat, a feugiat leo urna eget eros.
                  Duis Aenean a imperdiet risus.
                </p>
                <div className="mobile-menu fix mb-3 mean-container">
                  <div className="mean-bar d-xl-none">
                    <div className="mean-nav">
                      <ul>
                        {menuData.map((menu) => (
                          <li
                            key={menu.label}
                            className={
                              menu.hasDropdown
                                ? "has-dropdown active"
                                : undefined
                            }
                          >
                            {menu.isExternal || menu.path.startsWith("http") ? (
                              <a
                                href={menu.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="d-flex justify-content-between align-items-center"
                                onClick={() => setOffcanvaseOpen(false)}
                              >
                                {menu.label}
                              </a>
                            ) : (
                              <Link
                                to={menu.path}
                                className="d-flex justify-content-between align-items-center"
                                onClick={(e) => {
                                  if (menu.path.includes("#")) {
                                    const hash = menu.path.split("#")[1];
                                    setOffcanvaseOpen(false);
                                    if (pathName === "/" || pathName === "/home-1") {
                                      e.preventDefault();
                                      const element = document.getElementById(hash);
                                      if (element) {
                                        element.scrollIntoView({ behavior: "smooth" });
                                      }
                                    }
                                  }
                                }}
                              >
                                {menu.label}
                                {menu.submenu && (
                                  <button
                                    className="menu-expand-icon"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setOpenMenu(
                                        openMenu === menu.label
                                          ? null
                                          : menu.label
                                      );
                                    }}
                                  >
                                    <i
                                      className={`far fa-plus${
                                        openMenu === menu.label ? " open" : ""
                                      }`}
                                    />
                                  </button>
                                )}
                              </Link>
                            )}

                            {/* Submenu with AnimateHeight */}
                            {menu.submenu && (
                              <AnimateHeight
                                height={openMenu === menu.label ? "auto" : 0}
                                duration={300}
                              >
                                <ul className="submenu">
                                  {menu.submenu.map((sub) => (
                                    <li
                                      key={sub.label}
                                      className={
                                        sub.submenu ? "has-dropdown" : undefined
                                      }
                                    >
                                      <Link
                                        to={sub.path}
                                        className="d-flex justify-content-between align-items-center"
                                      >
                                        {sub.label}
                                        {sub.submenu && (
                                          <button
                                            className="menu-expand-icon"
                                            onClick={(e) => {
                                              e.preventDefault();
                                              setOpenSubMenu(
                                                openSubMenu === sub.label
                                                  ? null
                                                  : sub.label
                                              );
                                            }}
                                          >
                                            <i
                                              className={`far fa-plus${
                                                openSubMenu === sub.label
                                                  ? " open"
                                                  : ""
                                              }`}
                                            />
                                          </button>
                                        )}
                                      </Link>

                                      {/* Second level submenu with AnimateHeight */}
                                      {sub.submenu && (
                                        <AnimateHeight
                                          height={
                                            openSubMenu === sub.label
                                              ? "auto"
                                              : 0
                                          }
                                          duration={300}
                                        >
                                          <ul className="submenu">
                                            {sub.submenu.map((item) => (
                                              <li key={item.label}>
                                                <Link to={item.path}>
                                                  {item.label}
                                                </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </AnimateHeight>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              </AnimateHeight>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="offcanvas__button mt-3 mb-4">
                  <a
                    href="https://abrario.cplylegacy.com.br/AreaAssociados"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn w-100 text-center"
                    style={{ textTransform: "none", display: "block" }}
                    onClick={() => setOffcanvaseOpen(false)}
                  >
                    Área do Associado <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
                <div className="offcanvas__contact d-xl-block">
                  <h4 className="d-xl-block">Contact Info</h4>
                  <ul className="d-xl-block">
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon">
                        <i className="fal fa-map-marker-alt" />
                      </div>
                      <div className="offcanvas__contact-text">
                        <Link target="_blank" to="#">
                          Centro, Niterói - RJ
                        </Link>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15">
                        <i className="fal fa-envelope" />
                      </div>
                      <div className="offcanvas__contact-text">
                        <Link to="mailto:contato@abrario.org">
                          <span className="mailto:contato@abrario.org">
                            contato@abrario.org
                          </span>
                        </Link>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15">
                        <i className="fal fa-clock" />
                      </div>
                      <div className="offcanvas__contact-text">
                        <Link target="_blank" to="#">
                          Segunda a Sexta, 09h às 18h
                        </Link>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15">
                        <i className="far fa-phone" />
                      </div>
                      <div className="offcanvas__contact-text">
                        <Link to="tel:+5521982043786">(21) 98204-3786</Link>
                      </div>
                    </li>
                  </ul>
                  <div className="social-icon d-flex align-items-center">
                    <Link to="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="#">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="#">
                      <i className="fab fa-youtube" />
                    </Link>
                    <Link to="#">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => setOffcanvaseOpen(false)}
          className={`offcanvas__overlay ${
            offcanvaseOpen ? "overlay-open" : ""
          }`}
        />
      </div>
    </>
  );
};

export default MobileMenu;
