function WrapperComponent({ children }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="block flex-column m-3 w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 max-w-5xl p-10 bg-white rounded-lg shadow-xl/30">
        <div className="p-4 rounded-lg text-center bg-gray-200 text-lg sm:text-xl font-bold shadow-xl/50">
          {children}
        </div>
      </div>
    </div>
  );
}

export default WrapperComponent;
