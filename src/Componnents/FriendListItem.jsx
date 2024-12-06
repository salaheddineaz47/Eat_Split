import Button from "./Button";

export default function FriendListItem({
  friend,
  onSelectedFriend,
  selectedFriend,
}) {
  const messageColor =
    friend.balance < 0 ? `red` : friend.balance > 0 ? "green" : "";

  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li
      className={`grid grid-cols-[4.8rem_1fr_auto] items-center gap-x-4 p-3 rounded-lg transition duration-500 hover:bg-lightest hover:cursor-pointer hover:dark:bg-gray-800 ${
        isSelected ? "selected" : ""
      }`}
    >
      <img
        className="rounded-full w-full row-span-2"
        src={friend.image}
        alt={friend.name}
      />
      <h3 className="row-start-1 col-start-2">{friend.name}</h3>

      <p className="row-start-2 col-start-2" style={{ color: messageColor }}>
        {friend.balance < 0
          ? `You owe ${friend.name} ${Math.abs(friend.balance)}£`
          : friend.balance > 0
          ? `${friend.name} owes you ${Math.abs(friend.balance)}£`
          : `You and ${friend.name} are even`}
      </p>

      <Button
        className="row-span-2 col-start-3"
        onClick={() => onSelectedFriend(friend)}
      >
        {isSelected ? "close" : "Select"}
      </Button>
    </li>
  );
}
