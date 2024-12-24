export default function Button({ className = "", children, onClick }) {
  return (
    <button
      className={`${className} bg-medium text-gray-700 px-4 py-2 rounded-lg font-bold border-none cursor-pointer transition duration-300 hover:bg-dark dark:text-slate-200 dark:bg-slate-600 dark:hover:bg-slate-200 dark:hover:text-slate-500`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
