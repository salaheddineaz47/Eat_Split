import { useState } from "react";
import { useLocalStorageState } from "./Components/CustomHooks/useLocalStorageState";
import { useDarkMode } from "./Components/CustomHooks/useDarkMode";
import Button from "./Components/Button";
import FriendList from "./Components/FriendList";
import FormAddFriend from "./Components/FormAddFriend";
import FormSplitBill from "./Components/FormSplitBill";
import Footer from "./Components/Footer";
import TypingTitle from "./Components/TypingTitle";
import DarkModeBtn from "./Components/DarkModeBtn";
import ConfirmRemovalDialog from "./Components/ConfirmRemovalDialog";
import Main from "./Components/Main";
import Box from "./Components/Box";
import EmptyFriendList from "./Components/EmptyFriendList";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [friendList, setFriendList] = useLocalStorageState([], "friends");

  const isEmptyFriendList = friendList.length === 0;

  const handleShowAddfriend = () =>
    setShowAddForm((isop) => (isEmptyFriendList && isop ? isop : !isop));

  const handleAddfriend = (newFriend) => {
    setFriendList((friends) => [...friends, newFriend]);
    setShowAddForm(false);
  };
  const handleSelectedFriend = (friend) => {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddForm(false);
  };

  const handleRemoveFriend = (id) => {
    const onRemove = () => {
      setFriendList((friends) => friends.filter((friend) => friend.id !== id));
      setSelectedFriend(null);
    };
    confirmAlert({
      customUI: ({ onClose }) => (
        <ConfirmRemovalDialog onClose={onClose} onRemove={onRemove} />
      ),
    });
  };

  const handleSplitBill = (balance) => {
    setFriendList(
      friendList.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + balance }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  return (
    <div className="relative h-screen">
      <DarkModeBtn onToggleDarkMode={toggleDarkMode} />
      <Main>
        <Box type="sideBar">
          {!isEmptyFriendList && (
            <FriendList
              friends={friendList}
              onSelectedFriend={handleSelectedFriend}
              selectedFriend={selectedFriend}
              onRemoveFriend={handleRemoveFriend}
            />
          )}

          {isEmptyFriendList && !showAddForm && (
            <EmptyFriendList onShowAddfriend={handleShowAddfriend} />
          )}
          {showAddForm && <FormAddFriend onAddfriend={handleAddfriend} />}

          {!isEmptyFriendList && (
            <Button
              className={`float-right mr-3  ${
                isEmptyFriendList ? "text-2xl px-6 py-3" : "text-lg"
              }`}
              onClick={handleShowAddfriend}
            >
              {showAddForm ? "close" : "Add friend"}
            </Button>
          )}
        </Box>

        <Box type="simple" isEmptyFriendList={isEmptyFriendList}>
          {!selectedFriend && (
            <TypingTitle isEmptyFriendList={isEmptyFriendList} />
          )}

          {selectedFriend && (
            <FormSplitBill
              selectedFriend={selectedFriend}
              onSplitBill={handleSplitBill}
              key={selectedFriend.id}
            />
          )}
        </Box>
      </Main>
      <Footer />
    </div>
  );
}
