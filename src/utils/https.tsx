export const popular = "/movie/popular";

export const isStatusValid = (status: number) => {
    return status >= 200 && status < 300;
}