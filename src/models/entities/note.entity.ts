export interface ICreateNote {
    title: string;
    content: string;
    userId?: string;
}

export interface IUpdateNote {
    title?: string;
    content?: string;
}

export interface Note {
    id: string;
    title: string;
    content: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    active: boolean;
}

export interface INotesByUserResponse {
    totalRecords: number;
    totalPages: number;
    currentPage: string;
    limit: string;
    notes: Note[];

}

export interface INoteDeleteResponse {
    message: string;
    notes: Note[];
}

export interface INoteUpdateResponse {
    message: string;
    note: Note;
}
