import "@/styles/Button.module.css";

export function Button({ folderName, onClick }) {
  return (
    <button className="folderButton" onClick={onClick}>
      {folderName}
    </button>
  );
}
