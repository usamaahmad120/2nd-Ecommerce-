import React from "react";

function DescriptionBox() {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto my-10">
      {/* ===== Tabs (Description / Reviews) ===== */}
      <div className="flex justify-center md:justify-start gap-6 border-b border-gray-200 pb-2 mb-6">
        <button className="text-gray-900 font-semibold border-b-2 border-black pb-1">
          Description
        </button>
        <button className="text-gray-500 hover:text-gray-800 transition">
          Reviews (122)
        </button>
      </div>

      {/* ===== Description Text ===== */}
      <div className="text-gray-700 leading-relaxed text-sm md:text-base space-y-4">
        <p>
          An e-commerce website is a platform that allows businesses and
          individuals to buy and sell goods or services online. However, it
          wasn't until the 1960s that the passage became common when Letraset
          revolutionized the advertising industry with its transfer sheets.
          These innovative sheets allowed designers to apply pre-printed text in
          various fonts and formats directly onto their mockups and prototypes.
        </p>

        <p>
          The concept has since evolved into the dynamic digital marketplaces we
          use today, making shopping faster, easier, and more accessible. Users
          can browse thousands of products, compare prices, and have items
          delivered right to their doorstep with just a few clicks.
        </p>

        <p>
          Whether for physical products or digital downloads, e-commerce
          continues to transform the way businesses connect with customers
          globally, providing endless opportunities for growth and convenience.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
