"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Post, PostInput } from "@/types/post";
import { z } from "zod";
import { PostSchema } from "@/utils/zodSchema";

export type PostFormData = z.infer<typeof PostSchema>;

type Props = {
  defaultValues?: Partial<PostInput> | Partial<Post>;
  onSubmit: (data: PostFormData) => void;
  submitLabel?: string;
};

export default function PostForm({
  defaultValues,
  onSubmit,
  submitLabel = "Save",
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },

    trigger,
  } = useForm<PostFormData>({
    resolver: zodResolver(PostSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: defaultValues
      ? {
          title: defaultValues.title,
          summary: defaultValues.summary,
          content: defaultValues.content,
          author: defaultValues.author,
          email: defaultValues.email,
        }
      : undefined,
  });

  const handleFormSubmit = async (data: PostFormData) => {
    const isValid = await trigger();
    if (!isValid) {
      document
        .getElementById("form-error-summary")
        ?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    onSubmit(data);
  };

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="space-y-4"
      noValidate
    >
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Title <span className="text-red-500">*</span>
        </label>
        <input
          id="title"
          data-testid="title"
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 ${
            errors.title
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
          aria-invalid={errors.title ? "true" : "false"}
          aria-describedby={errors.title ? "title-error" : undefined}
          {...register("title")}
        />
        {errors.title && (
          <p
            id="title-error"
            role="alert"
            className="mt-1 text-sm text-red-600 flex items-center"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            {errors.title.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="summary"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Summary <span className="text-red-500">*</span>
        </label>
        <textarea
          id="summary"
          data-testid="summary"
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 ${
            errors.summary
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
          rows={3}
          aria-invalid={errors.summary ? "true" : "false"}
          aria-describedby={errors.summary ? "summary-error" : undefined}
          {...register("summary")}
        />
        {errors.summary && (
          <p
            id="summary-error"
            role="alert"
            className="mt-1 text-sm text-red-600 flex items-center"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            {errors.summary.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Content <span className="text-red-500">*</span>
        </label>
        <textarea
          id="content"
          data-testid="content"
          rows={8}
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 ${
            errors.content
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
          aria-invalid={errors.content ? "true" : "false"}
          aria-describedby={errors.content ? "content-error" : undefined}
          {...register("content")}
        />
        {errors.content && (
          <p
            id="content-error"
            role="alert"
            className="mt-1 text-sm text-red-600 flex items-center"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            {errors.content.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Author <span className="text-red-500">*</span>
          </label>
          <input
            id="author"
            data-testid="author"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 ${
              errors.author
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            aria-invalid={errors.author ? "true" : "false"}
            aria-describedby={errors.author ? "author-error" : undefined}
            {...register("author")}
          />
          {errors.author && (
            <p
              id="author-error"
              role="alert"
              className="mt-1 text-sm text-red-600 flex items-center"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              {errors.author.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            data-testid="email"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 ${
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p
              id="email-error"
              role="alert"
              className="mt-1 text-sm text-red-600 flex items-center"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <div className="pt-4 flex items-center justify-between">
        <button
          type="submit"
          data-testid="submit"
          className={`px-4 py-2 text-white rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            hasErrors
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gray-900 hover:bg-gray-800 focus:ring-gray-900"
          }`}
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
