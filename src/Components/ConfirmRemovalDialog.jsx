import Button from "./Button";

const ConfirmRemovalDialog = ({ onRemove, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-lightest dark:bg-gray-800 rounded-lg shadow-lg p-6 w-3/4 max-w-3xl">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4 dark:text-medium">
          Are you sure?
        </h2>
        <p className="text-gray-600 mb-6 text-2xl dark:text-light">
          Do you really want to remove this friend? This action cannot be
          undone.
        </p>
        <div className="flex justify-end space-x-4">
          <Button
            onClick={() => {
              onRemove();
              onClose();
            }}
            className="bg-red-500 dark:bg-red-500 text-white dark:text-slate-50 px-6 py-3  hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-slate-100 text-xl"
          >
            Yes, Remove
          </Button>
          <Button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 hover:bg-gray-400"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRemovalDialog;
