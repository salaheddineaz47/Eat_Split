function Box({ type, children, isEmptyFriendList = null }) {
  const className =
    type === "sideBar"
      ? "sidebar mb-12"
      : type === "simple"
      ? !isEmptyFriendList
        ? "min-h-[66vh] content-center"
        : "min-h-[40vh] md:content-center"
      : "";
  return <div className={className}>{children}</div>;
}

export default Box;
