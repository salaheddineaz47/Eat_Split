export default function Button({ className = "", children, onClick }) {
  return (
    <button
      className=" bg-medium text-gray-700 px-4 py-2 rounded-lg font-bold border-none cursor-pointer transition duration-300 hover:bg-dark ${className} dark:text-light dark:bg-slate-600 dark:hover:bg-slate-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
