"use client";

import { Post, PostInput } from "@/types/post";
import { loadPosts, savePosts } from "@/lib/storage";
import { v4 as uuidv4 } from "uuid";

export const postsService = {
    getPosts(): Post[] {
        return loadPosts();
    },

    getPost(id: string): Post | undefined {
        const posts = loadPosts();
        return posts.find(post => post.id === id);
    },

    createPost(data: PostInput): Post {
        const posts = loadPosts();
        const newPost: Post = {
            id: uuidv4(),
            date: new Date().toISOString(),
            ...data,
        };

        const updatedPosts = [newPost, ...posts];
        savePosts(updatedPosts);
        return newPost;
    },

    updatePost(id: string, data: Partial<PostInput>): Post | undefined {
        const posts = loadPosts();
        const updatedPosts = posts.map(post =>
            post.id === id ? { ...post, ...data } : post
        );

        savePosts(updatedPosts);
        return updatedPosts.find(post => post.id === id);
    },

    deletePost(id: string): void {
        const posts = loadPosts();
        const updatedPosts = posts.filter(post => post.id !== id);
        savePosts(updatedPosts);
    }
};