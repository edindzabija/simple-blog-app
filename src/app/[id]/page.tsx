"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { postsService } from "@/lib/postService";

export default function ViewPost() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;
  
  if (!id || typeof id !== 'string') {
    return (
      <div className="container mx-auto px-4 py-8 text-4xl font-bold flex items-center justify-center min-h-screen">
        Invalid post ID!
      </div>
    );
  }

  const post = postsService.getPost(id);
  if (!post)
    return (
      <div className="container mx-auto px-4 py-8 text-4xl font-bold flex items-center justify-center min-h-screen">
        Post not found!
      </div>
    );

  const handleDelete = () => {
    postsService.deletePost(id);
    router.push("/");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="bg-white border rounded-lg p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-medium mb-2">{post.title}</h1>
        <p className="text-sm text-gray-600 mb-6">
          {new Date(post.date).toLocaleDateString()} - {post.author}
        </p>
        <div className="prose max-w-none mb-6 text-gray-700">
          {post.content}
        </div>
        <div className="flex gap-3 text-sm border-t pt-4">
          <button
            onClick={() => router.push(`/${id}/edit`)}
            className="text-gray-600 hover:underline"
          >
            Edit
          </button>
          <span className="text-gray-300">|</span>
          <button
            onClick={handleDelete}
            className="text-gray-600 hover:underline"
          >
            Delete
          </button>
        </div>
      </article>
    </div>
  );
}
