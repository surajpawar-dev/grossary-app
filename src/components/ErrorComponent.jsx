function ErrorComponent({ list }) {
  return (
    <>
      {list.length === 0 && (
        <div className="text-center text-gray-500 py-4 text-lg font-medium">
          No Item Found
        </div>
      )}
    </>
  );
}

export default ErrorComponent;
