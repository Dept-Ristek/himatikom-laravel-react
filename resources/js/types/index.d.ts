export interface User {
    id: number;
    name: string;
    email: string;
    nim: number;
    roles: string;
    avatar: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};
