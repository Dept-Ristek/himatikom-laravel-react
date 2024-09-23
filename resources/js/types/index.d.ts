export interface User {
    id?: string;
    name: string;
    email: string;
    nim: string;
    roles?: string;
    avatar?: File | string | null;
    email_verified_at?: string;
    password?: string;
    repeat_password?: string;
}

export interface Kepengurusan {
    id?: string;
    name: string;
    description: string;
    poster: File | string | null;
    periode: string;
    _method?: string;
}

export interface Prodi {
    id?: string;
    name: string;
    slug?: string;
}

export interface Proker {
    id?: string;
    name: string;
    slug?: string;
    is_proker: boolean;
    schedule: Date;
    need_to_register?: boolean;
    start_register?: Date | undefined;
    end_register?: Date | undefined;
    kepengurusan_id?: string;
    kepengurusan?: Kepengurusan;
}

export interface Pengurus {
    id?: string;
    user_id?: string;
    kepengurusan_id?: string;
    user?: User | null;
    kepengurusan?: Kepengurusan | null;
    level: string;
    is_active?: boolean;
    _method?: string;
}

export interface Kepanitiaan {
    id?: string;
    name: string;
    slug?: string;
    description: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};
