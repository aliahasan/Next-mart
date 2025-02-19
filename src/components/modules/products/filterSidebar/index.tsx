"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Star } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [price, setPrice] = useState([0]);

  return (
    <div className="w-full md:w-72 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Filter By Price */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Filter By Price
        </h3>
        <div className="flex items-center gap-3 mb-3">
          <input
            type="number"
            placeholder="Min"
            className="w-20 p-2 border rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Max"
            className="w-20 p-2 border rounded-md text-sm text-gray-700 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <span className="text-sm font-semibold text-gray-700">${price[0]}</span>
        <Slider value={price} onValueChange={setPrice} max={1000} step={10} />
      </div>

      {/* Product Types */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Product Types
        </h3>
        <RadioGroup className="space-y-3">
          {[
            "Laptop & Accessories",
            "Computers-PC",
            "Speakers & Headset",
            "Keyboards & Mouse",
            "Camera",
            "Video Recording",
            "Tablets",
            "Table Lights",
          ].map((type) => (
            <div key={type} className="flex items-center space-x-3">
              <RadioGroupItem value={type} id={type} />
              <Label
                htmlFor={type}
                className="text-sm text-gray-700 cursor-pointer"
              >
                {type}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Brands */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Brands</h3>
        <RadioGroup className="space-y-3">
          {["HP (15)", "Apple (58)", "Dell (44)", "Asus (11)", "Camera"].map(
            (brand) => (
              <div key={brand} className="flex items-center space-x-3">
                <RadioGroupItem value={brand} id={brand} />
                <Label
                  htmlFor={brand}
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  {brand}
                </Label>
              </div>
            )
          )}
        </RadioGroup>
      </div>

      {/* Rating */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Rating</h3>
        <RadioGroup className="space-y-3">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center space-x-3">
              <RadioGroupItem value={star.toString()} id={`rating-${star}`} />
              <Label
                htmlFor={`rating-${star}`}
                className="text-sm text-gray-700 flex items-center cursor-pointer"
              >
                {[...Array(star)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 w-5 h-5" />
                ))}
                {[...Array(5 - star)].map((_, i) => (
                  <Star key={i} className="text-gray-300 w-5 h-5" />
                ))}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Availability */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Availability
        </h3>
        <div className="flex flex-col space-y-3">
          {["In Stock", "Pre Order", "Upcoming"].map((status) => (
            <div key={status} className="flex items-center space-x-3">
              <Checkbox id={status} />
              <Label
                htmlFor={status}
                className="text-sm text-gray-700 cursor-pointer"
              >
                {status}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
