"use client";

import React, { useEffect, useState } from "react";
import { postsService } from "@/lib/postService";
import PostCard from "@/components/post-card";
import { Post } from "@/types/post";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts(postsService.getPosts());
  }, []);

  const handleDelete = (id: string) => {
    postsService.deletePost(id);
    setPosts(postsService.getPosts());
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {posts.length === 0 ? (
        <p className="text-gray-600 text-center py-8">No posts yet. Create your first post!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <PostCard key={p.id} post={p} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}
