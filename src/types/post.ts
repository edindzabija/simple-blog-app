export type Post = {
    id: string;
    title: string;
    summary: string;
    content: string;
    author: string;
    email: string;
    date: string; // ISO string
};

// Input data used to create/update posts (everything except id/date)
export type PostInput = Omit<Post, "id" | "date">;
