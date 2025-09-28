"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import PostForm, { PostFormData } from "@/components/post-form";
import { Post } from "@/types/post";
import { postsService } from "@/lib/postService";

export default function EditPost() {
  const params = useParams();
  const id = params?.id;
  const router = useRouter();
  
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

  const handleUpdate = (data: PostFormData) => {
    postsService.updatePost(id, data);
    router.push(`/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white border rounded-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-medium mb-6">Edit Post</h2>
        <PostForm
          defaultValues={post}
          onSubmit={handleUpdate}
          submitLabel="Update"
        />
      </div>
    </div>
  );
}
