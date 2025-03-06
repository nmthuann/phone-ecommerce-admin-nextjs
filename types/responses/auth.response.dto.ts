export interface AuthResponseDto {
    success: boolean;
    message: string
}

export interface AuthErrorResponseDto{
    success: boolean;
    error: string
}

export interface RegisterResponseDto{
    email: string;
    firstName: string;
    lastName: string;
    avatarUrl: string;
    address: string;
    accessToken: string;
    refreshToken: string;
} 

export interface LoginResponseDto{
    email: string;
    firstName: string;
    lastName: string;
    avatarUrl: string;
    address: string;
    accessToken: string;
    refreshToken: string;
} 