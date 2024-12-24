import FriendListItem from "./FriendListItem";

export default function FriendList({
  friends,
  onSelectedFriend,
  selectedFriend,
  onRemoveFriend,
}) {
  return (
    <ul className="list-none flex flex-col md:gap-1 gap-4 text-[1.4rem] mb-8  ">
      {friends.map((fiendData) => (
        <FriendListItem
          key={fiendData.id}
          friend={fiendData}
          onSelectedFriend={onSelectedFriend}
          selectedFriend={selectedFriend}
          onRemoveFriend={onRemoveFriend}
        />
      ))}
    </ul>
  );
}
