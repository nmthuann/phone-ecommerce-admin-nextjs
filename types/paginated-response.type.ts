// Define an interface for paginated responses if needed
export type PaginatedResponse<T> = {
    content: T[];
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
}