function InputBox({ handleOnKeyDown }) {
  return (
    <>
      <input
        type="text"
        placeholder="Enter your item"
        className="my-3 bg-white text-sm font-medium text-white-900 rounded-sm shadow-md p-2 w-4/5"
        onKeyDown={handleOnKeyDown}
      />
    </>
  );
}
export default InputBox;
