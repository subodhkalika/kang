export interface User {
    users: [];
}

export interface UserData {
    access_token: string;
    expires_in: number;
    token_type: string;
    user: UserObj;
}

export interface UserObj {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    role: string;
}