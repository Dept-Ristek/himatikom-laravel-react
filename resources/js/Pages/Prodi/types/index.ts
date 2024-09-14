export interface Prodi {
    id: string;
    name: string;
    slug: string;
}

export interface FlashMessage {
    variant?: "default" | "destructive" | null | undefined;
    title?: string;
    description?: string;
}
