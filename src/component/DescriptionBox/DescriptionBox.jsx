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
        <div className="flex flex-col gap-3 max-h-64 overflow-y-auto">
          {reviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet.</p>
          ) : (
            reviews.map((rev, idx) => (
              <div
                key={idx}
                className="border p-3 rounded-md bg-gray-50 shadow-sm"
              >
                <p className="text-gray-700">{rev.comment}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default DescriptionBox;
