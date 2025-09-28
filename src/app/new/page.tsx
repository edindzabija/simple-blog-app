"use client";

import React from "react";
import PostForm, { PostFormData } from "@/components/post-form";
import { useRouter } from "next/navigation";
import { postsService } from "@/lib/postService";

export default function NewPage() {
    const router = useRouter();

    const handleCreate = (data: PostFormData) => {
        const post = postsService.createPost(data);
        router.push(`/${post.id}`);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white border rounded-lg p-6 max-w-2xl mx-auto">
                <h2 className="text-2xl font-medium mb-6">Create New Post</h2>
                <PostForm onSubmit={handleCreate} />
            </div>
        </div>
    );
}
