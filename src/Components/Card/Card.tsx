import React from "react";

type CardProps = {
  title: string;
  content: string;
  imageUrl?: string;
};

const Card: React.FC<CardProps> = ({ title, content, imageUrl }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {imageUrl && <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default Card;
