import { useState } from "react";
import FormInput from "./FormInput";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoPay, setWhoPay] = useState("user");

  const handleBill = (e) => setBill(Number(e.target.value));
  const handlepaidByUser = (e) =>
    setPaidByUser(
      Number(e.target.value) < bill ? Number(e.target.value) : paidByUser
    );
  const handleWhoPay = (e) => setWhoPay(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoPay === "user" ? -paidByFriend : paidByFriend);
  }

  return (
    <form
      className="custom-form grid-cols-1 sm:grid-cols-[1fr_12rem] mb-4 py-[3.2rem] px-[4rem]"
      onSubmit={handleSubmit}
    >
      <h2 className="col-span-full text-[2.2rem] uppercase tracking-[-0.5px] mb-4">
        Split a bill with {selectedFriend.name}
      </h2>
      <FormInput value={bill} onChange={handleBill}>
        <span>💸</span>Bill value
      </FormInput>

      <FormInput value={paidByUser} onChange={handlepaidByUser}>
        <span>🧍</span>Your expense
      </FormInput>

      <FormInput value={paidByFriend} onRead={true}>
        <span>🧑‍🤝‍🧑</span>
        {selectedFriend.name}'s expense:
      </FormInput>

      <label>🤑Who is paying the bill ?</label>
      <select className="custom-imput" value={whoPay} onChange={handleWhoPay}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button className="mt-2 col-start-1 md:col-start-2">Split bill</Button>
    </form>
  );
}
