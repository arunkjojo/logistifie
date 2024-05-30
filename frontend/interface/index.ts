export interface blogDataType {
    id: number,
    title: string,
    summary: string,
    body: string,
    author: string,
    publicationDate: string,
}
export interface blogsType {
    totalPost: number
    blogData: blogDataType[],
    errorMessage: string
}
export interface blogType {
    totalPost: number
    blogData: blogDataType,
    errorMessage: string
}