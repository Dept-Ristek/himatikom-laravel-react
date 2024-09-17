import { Users } from "@/Pages/Users/types";
import { Kepengurusans } from "@/Pages/Kepengurusan/types";

export interface Pengurus {
    id: string;
    user: Users;
    kepengurusan: Kepengurusans;
    level: string;
    is_active: boolean;
}
