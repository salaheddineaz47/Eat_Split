import { MdOutlinePersonOff } from "react-icons/md";
import Button from "./Button";

const EmptyFriendList = ({ onShowAddfriend }) => {
  return (
    <div className="flex flex-col  items-center justify-center text-center py-10 px-4 bg-lightest rounded-lg dark:bg-gray-800   shadow-md">
      <MdOutlinePersonOff className="text-[4rem] text-dark dark:text-lightest mb-4" />
      {/* Empty list icon */}
      <h2 className="text-3xl font-semibold text-gray-600 dark:text-light mb-4 ">
        Your friend list is empty!
      </h2>
      <p className="text-gray-700 dark:text-light mb-6 text-2xl">
        Add a friend to start splitting the bill effortlessly. 😊
      </p>
      <Button className=" text-2xl px-6 py-3" onClick={onShowAddfriend}>
        Add friend
      </Button>
    </div>
  );
};

export default EmptyFriendList;
