function Main({ children }) {
  return (
    <div className="min-h-[66vh] flex items-center justify-center md:pt-16 pt-28 dark:bg-gray-900 dark:text-light transition duration-300">
      <div className="grid lg:grid-cols-[34rem_44rem] gap-16 items-center justify-center md:grid-cols-[44rem] sm:grid-cols-[30rem] grid-cols-[28rem]  ">
        {children}
      </div>
    </div>
  );
}

export default Main;
