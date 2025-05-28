function Item({ item, handleOnDelete }) {
  return (
    <div className="flex justify-between items-center px-4 py-2 rounded-lg mb-1 bg-gray-50 shadow-lg hover:bg-gray-100 transition-colors mx-2">
      <li className="list-none font-medium text-lg text-gray-800">{item}</li>
      <button
        onClick={() => handleOnDelete(item)}
        className="px-4 py-1 text-sm font-semibold text-white bg-red-500 rounded-md hover:bg-red-700 cursor-pointer transition-colors"
      >
        Delete
      </button>
    </div>
  );
}

export default Item;
