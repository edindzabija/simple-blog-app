"use client";

import React, { useEffect, useState } from "react";
import { postsService } from "@/lib/postService";
import PostCard from "@/components/post-card";
import { Post } from "@/types/post";
import ConfirmDialog from "@/components/confirm-dialog";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);

  useEffect(() => {
    setPosts(postsService.getPosts());
  }, []);

  const handleDeleteRequest = (id: string) => {
    setPendingDeleteId(id);
  };

  const handleConfirmDelete = () => {
    if (!pendingDeleteId) return;
    postsService.deletePost(pendingDeleteId);
    setPosts(postsService.getPosts());
    setPendingDeleteId(null);
  };

  const handleCancelDelete = () => {
    setPendingDeleteId(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {posts.length === 0 ? (
        <p className="text-gray-600 text-center py-8">No posts yet. Create your first post!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <PostCard key={p.id} post={p} onDelete={handleDeleteRequest} />
          ))}
        </div>
      )}

      <ConfirmDialog
        open={pendingDeleteId !== null}
        title="Delete post"
        message="Are you sure you want to delete this post? This action cannot be undone."
        confirmLabel="Delete"
        cancelLabel="Cancel"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
}
