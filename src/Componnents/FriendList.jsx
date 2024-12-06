import FriendListItem from "./FriendListItem";

export default function FriendList({
  friends,
  onSelectedFriend,
  selectedFriend,
}) {
  return (
    <ul className="list-none flex flex-col gap-1 text-[1.4rem] mb-8">
      {friends.map((fiendData) => (
        <FriendListItem
          key={fiendData.id}
          friend={fiendData}
          onSelectedFriend={onSelectedFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
