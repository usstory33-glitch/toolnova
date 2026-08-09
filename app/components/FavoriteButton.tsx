"use client";

type FavoriteButtonProps = {
    isFavorite: boolean;
    onToggle: () => void;
};

export default function FavoriteButton({
    isFavorite,
    onToggle,
}: FavoriteButtonProps) {
    return (
        <button
            onClick={onToggle}
            className="text-2xl transition-transform duration-300 hover:scale-125"
            title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        >
            {isFavorite ? "❤️" : "🤍"}
        </button>
    );
}