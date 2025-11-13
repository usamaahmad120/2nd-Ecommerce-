import React, { useState } from "react";

function DescriptionBox({ reviews = [] }) {
  const [activeTab, setActiveTab] = useState("description");

  // Hardcoded description
  const description = [
    "An e-commerce website is a platform that allows businesses and individuals to buy and sell goods or services online. However, it wasn't until the 1960s that the passage became common when Letraset revolutionized the advertising industry with its transfer sheets. These innovative sheets allowed designers to apply pre-printed text in various fonts and formats directly onto their mockups and prototypes.",
    "The concept has since evolved into the dynamic digital marketplaces we use today, making shopping faster, easier, and more accessible. Users can browse thousands of products, compare prices, and have items delivered right to their doorstep with just a few clicks.",
    "Whether for physical products or digital downloads, e-commerce continues to transform the way businesses connect with customers globally, providing endless opportunities for growth and convenience."
  ];

  return (
    <div className="w-[90%] md:w-[80%] mx-auto my-10">
      {/* ===== Tabs ===== */}
      <div className="flex justify-center md:justify-start gap-6 border-b border-gray-200 pb-2 mb-6">
        <button
          className={`font-semibold pb-1 transition ${
            activeTab === "description"
              ? "text-gray-900 border-b-2 border-black"
              : "text-gray-500 hover:text-gray-800"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`font-semibold pb-1 transition ${
            activeTab === "reviews"
              ? "text-gray-900 border-b-2 border-black"
              : "text-gray-500 hover:text-gray-800"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews ({reviews.length})
        </button>
      </div>

      {/* ===== Content ===== */}
      {activeTab === "description" && (
        <div className="text-gray-700 leading-relaxed text-sm md:text-base space-y-4">
          {description.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      )}

      {activeTab === "reviews" && (
  <div className="flex flex-col gap-3 max-h-80 overflow-y-auto">
    {reviews.length === 0 ? (
      <p className="text-gray-500">No reviews yet.</p>
    ) : (
      reviews.map((rev, idx) => (
        <div
          key={idx}
          className="p-3 rounded-md bg-gray-50 border border-gray-200 flex flex-col md:flex-row md:items-center gap-2"
        >
          {/* Name and Stars */}
          <div className="flex items-center gap-2 md:w-1/4">
            <span className="font-medium text-gray-800">{rev.user || "Anonymous"}</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i <= rev.rating ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.157c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.447a1 1 0 00-1.176 0l-3.37 2.447c-.784.57-1.838-.197-1.539-1.118l1.285-3.957a1 1 0 00-.364-1.118L2.018 9.384c-.783-.57-.38-1.81.588-1.81h4.157a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Comment */}
          <p className="text-gray-700 text-sm md:w-3/4">{rev.comment}</p>
        </div>
      ))
    )}
  </div>
)}

    </div>
  );
}

export default DescriptionBox;
