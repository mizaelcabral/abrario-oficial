export type MenuThumb = {
    img: string;
    title: string;
    btnPath: string;
};

export type MenuSubItem = {
    label: string;
    path: string;
    submenu?: MenuSubItem[];
};

export type MenuItem = {
    label: string;
    path: string;
    hasDropdown?: boolean;
    thumbMenu?: MenuThumb[];
    submenu?: MenuSubItem[];
    isExternal?: boolean;
};
export const menuData: MenuItem[] = [
    {
        label: "INICIO",
        path: "/",
    },
    {
        label: "QUEM SOMOS",
        path: "/#quem-somos",
    },
    {
        label: "SERVIÇOS",
        path: "/#servicos",
    },
    {
        label: "NOTÍCIAS",
        path: "/#noticias",
    },
    {
        label: "NOSSO TIME",
        path: "/#nosso-time",
    },
    {
        label: "DOE",
        path: "/#doe",
    },
    {
        label: "CADASTRO DE PACIENTE",
        path: "https://abrario.cplylegacy.com.br/AreaAssociados/MinhaConta/CadastroAssociadoPF",
        isExternal: true,
    },
    {
        label: "CONTATOS",
        path: "/contact",
    },
];