"use client";

import React from "react";
import { Post } from "@/types/post";
import Link from "next/link";

type Props = {
    post: Post;
    onDelete: (id: string) => void;
};

export default function PostCard({ post, onDelete }: Props) {
    return (
        <article className="bg-white border rounded p-4">
            <h2 className="font-medium mb-2 truncate">{post.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{new Date(post.date).toLocaleDateString('en-GB')} - {post.author}</p>
            <p className="text-sm text-gray-700 mb-4 line-clamp-2">{post.summary}</p>
            <div className="flex gap-3 text-sm">
                <Link href={`/${post.id}`} className="text-blue-600 hover:underline">
                    Read more
                </Link>
                <span className="text-gray-300">|</span>
                <Link href={`/${post.id}/edit`} className="text-gray-600 hover:underline">
                    Edit
                </Link>
                <span className="text-gray-300">|</span>
                <button
                    onClick={() => onDelete(post.id)}
                    className="text-gray-600 hover:underline"
                >
                    Delete
                </button>
            </div>
        </article>
    );
}
