import { useState, useEffect } from "react";
import initialFriends from "./assets/FriendsData";

import Button from "./Componnents/Button";
import FriendList from "./Componnents/FriendList";
import FormAddFriend from "./Componnents/FormAddFriend";
import FormSplitBill from "./Componnents/FormSplitBill";
import Footer from "./Componnents/Footer";
import TypingTitle from "./Componnents/TypingTitle";
import DarkModeBtn from "./Componnents/DarkModeBtn";

export default function App() {
  const [friendList, setFriendList] = useState(initialFriends);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleShowAddfriend = () => setShowAddForm((isop) => !isop);

  const handleAddfriend = (newFriend) => {
    setFriendList((friends) => [...friends, newFriend]);
    setShowAddForm(false);
  };
  const handleSelectedFriend = (friend) => {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddForm(false);
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

  function toggleDarkMode() {
    setDarkMode((prevState) => !prevState);
  }
  useEffect(() => {
    const mode = JSON.parse(localStorage.getItem("mode"));

    if (mode?.darkMode) {
      setDarkMode(mode.darkMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify({ darkMode }));
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="relative">
      <DarkModeBtn onToggleDarkMode={toggleDarkMode} />
      <div className="min-h-[66vh] flex items-center justify-center pt-16 dark:bg-gray-900 dark:text-light">
        <div className="grid md:grid-cols-[34rem_44rem] gap-16 items-start grid-cols-[44rem]">
          <div className="sidebar mb-12">
            <FriendList
              friends={friendList}
              onSelectedFriend={handleSelectedFriend}
              selectedFriend={selectedFriend}
            />
            {showAddForm && <FormAddFriend onAddfriend={handleAddfriend} />}
            <Button
              className="float-right mr-3 text-md"
              onClick={handleShowAddfriend}
            >
              {showAddForm ? "close" : "Add friend"}
            </Button>
          </div>

          {!selectedFriend && <TypingTitle />}

          {selectedFriend && (
            <FormSplitBill
              selectedFriend={selectedFriend}
              onSplitBill={handleSplitBill}
              key={selectedFriend.id}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
