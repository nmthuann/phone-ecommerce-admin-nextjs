export interface RestErrorResponse {
    statusCode: number;
    message: string;
    description: string;
    timestamp: string;
    path: string;
}