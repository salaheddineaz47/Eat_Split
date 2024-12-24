import Button from "./Button";
import ButtonRemove from "./ButtonRemove";

export default function FriendListItem({
  friend,
  onSelectedFriend,
  selectedFriend,
  onRemoveFriend,
}) {
  const messageColor =
    friend.balance < 0 ? `red` : friend.balance > 0 ? "green" : "";

  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li
      className={`grid md:grid-cols-[4.8rem_1.8fr_1fr] grid-cols-[4.8rem_1fr] items-center gap-x-4 gap-y-0 p-3  rounded-lg transition duration-500 hover:bg-lightest hover:cursor-pointer hover:dark:bg-gray-800 ${
        isSelected ? "selected" : ""
      }`}
    >
      <img
        className="rounded-full w-full row-span-2"
        src={friend.image}
        alt={friend.name}
      />
      <h3 className="row-start-1 col-start-2 ">{friend.name}</h3>
      <ButtonRemove
        className="row-start-1 col-start-3"
        onClick={() => onRemoveFriend(friend.id)}
      />

      <p className="row-start-2 col-start-2" style={{ color: messageColor }}>
        {friend.balance < 0
          ? `You owe ${friend.name} ${Math.abs(friend.balance)}$`
          : friend.balance > 0
          ? `${friend.name} owes you ${Math.abs(friend.balance)}$`
          : `You and ${friend.name} are even`}
      </p>

      <Button
        className="row-start-3 col-start-2 md:row-span-2 md:col-start-3 md:mt-10  border-2 border-slate-500 dark:border-lightest w-1/3 md:w-auto mt-8 "
        onClick={() => onSelectedFriend(friend)}
      >
        {isSelected ? "close" : "Select"}
      </Button>
    </li>
  );
}
