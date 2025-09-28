import { Post } from "@/types/post";

const KEY = "simple-blog-posts";

export function loadPosts(): Post[] {
    if (typeof window === "undefined") return [];
    try {
        const raw = localStorage.getItem(KEY);
        if (!raw) return [];
        return JSON.parse(raw) as Post[];
    } catch (e) {
        console.error("Failed to load posts", e);
        return [];
    }
}

export function savePosts(posts: Post[]) {
    if (typeof window === "undefined") return;
    try {
        localStorage.setItem(KEY, JSON.stringify(posts));
    } catch (e) {
        console.error("Failed to save posts", e);
    }
}
