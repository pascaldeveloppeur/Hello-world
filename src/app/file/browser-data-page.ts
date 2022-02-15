import { File } from "./file";
export interface BrowserDataPage {
    totalPage: number;
    pageSize: number;
    page: number;
    totalItems: number;
    items: File[];
}
