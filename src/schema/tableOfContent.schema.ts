export interface TableOfContentItem {
    id: string;
    title: string;
    children?: TableOfContentItem[];
}
