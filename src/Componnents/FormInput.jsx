export default function FormInput({
  children,
  value,
  onChange,
  onRead = false,
}) {
  return (
    <>
      <label className="font-medium first-letter-custom">{children}</label>
      <input
        className="custom-imput dark:focus:border-bg-gray-300"
        type="text"
        value={value}
        onChange={onChange}
        readOnly={onRead}
      />
    </>
  );
}
