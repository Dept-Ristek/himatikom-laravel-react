interface TagTypes {
    id: string;
    label: string;
}

interface DocTypes {
    id: string;
    label: string;
}

export const tags: TagTypes[] = [
    {
        id: "sertifikat",
        label: "Sertifikat",
    },
    {
        id: "proposal",
        label: "Proposal",
    },
    {
        id: "surat",
        label: "Surat",
    },
];

export const docTypes: DocTypes[] = [
    {
        id: "surat-masuk",
        label: "Surat Masuk",
    },
    {
        id: "surat-keluar",
        label: "Surat Keluar",
    },
];
