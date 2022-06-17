import { useEffect } from "react";

const Toast = ({ msg, id, remove, auto, delay }) => {
  useEffect(() => {
    if (auto) {
      setTimeout(() => {
        remove(id);
      }, delay);
    }
  }, []);
  return (
    <div id={id} className="toastBox">
      <span>{msg}</span>
      <span onClick={() => remove(id)}>&#10007;</span>
    </div>
  );
};
export default Toast;
