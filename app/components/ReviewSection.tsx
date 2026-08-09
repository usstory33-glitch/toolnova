"use client";

import { useState } from "react";

type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
};

export default function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: "Ali",
      rating: 5,
      comment: "Excellent AI tool. Highly recommended!",
    },
    {
      id: 2,
      name: "Ahmed",
      rating: 4,
      comment: "Very useful and easy to use.",
    },
  ]);

  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
const averageRating =
  reviews.reduce((sum, review) => sum + review.rating, 0) /
  reviews.length;
  const addReview = () => {
    if (!name.trim() || !comment.trim()) return;

    setReviews([
      ...reviews,
      {
        id: Date.now(),
        name,
        rating,
        comment,
      },
    ]);

    setName("");
    setRating(5);
    setComment("");
  };

  return (
    <section className="mt-12">
<div className="mb-6 flex items-center justify-between">
  <h2 className="text-3xl font-bold">
    ⭐ User Reviews
  </h2>

  <div className="text-right">
    <p className="text-xl font-bold text-yellow-400">
      ⭐ {averageRating.toFixed(1)} / 5
    </p>

    <p className="text-sm text-slate-400">
      {reviews.length} Reviews
    </p>
  </div>
</div>

      <div className="mb-8 rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4 w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
        />

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="mb-4 w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
        >
          <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
          <option value={4}>⭐⭐⭐⭐ (4)</option>
          <option value={3}>⭐⭐⭐ (3)</option>
          <option value={2}>⭐⭐ (2)</option>
          <option value={1}>⭐ (1)</option>
        </select>

        <textarea
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mb-4 w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
          rows={4}
        />

        <button
          onClick={addReview}
          className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
        >
          Submit Review
        </button>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-xl border border-slate-700 bg-slate-900 p-5"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-bold">{review.name}</h3>

              <span>
                {"⭐".repeat(review.rating)}
              </span>
            </div>

            <p className="mt-3 text-slate-400">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}