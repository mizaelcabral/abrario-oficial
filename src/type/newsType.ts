export interface NewsType {
    id: number;
    img: string;
    title: string;
    author: string;
    authorUrl?: string;
    date?: string;
    category?: string;
    categoryUrl?: string;
    comment: string;
    description?: string;
    content?: string;
}