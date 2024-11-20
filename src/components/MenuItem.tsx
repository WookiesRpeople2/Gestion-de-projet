import { MenuItem as MenuItemType } from "../types";

interface Props {
  item: MenuItemType;
}

export default function MenuItem({ item }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
          <span className="text-lg font-bold text-amber-600">
            ${item.price}
          </span>
        </div>
        <p className="mt-2 text-gray-600">{item.description}</p>
        <button className="mt-4 w-full px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition">
          {item.inStock ? "In Stock" : "Out of stock"}
        </button>
      </div>
    </div>
  );
}
