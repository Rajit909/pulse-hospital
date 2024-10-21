// Spinner.jsx
const Spinner = () => {
  return (
    <div className=" fixed top-0 left-0 bg-[rgba(255, 255, 255, 0.7)] flex justify-center items-center w-full h-full z-9999">
      <div className="w-16 h-16 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin bg-transparent"></div>
    </div>
  );
};

export default Spinner;
