import { Kepengurusans } from "@/Pages/Kepengurusan/types";

export interface Prokers {
    id?: string;
    name: string;
    slug?: string;
    is_proker: boolean;
    schedule: Date;
    need_to_register?: boolean;
    start_register?: Date;
    end_register?: Date;
    kepengurusan: Kepengurusans;
}
