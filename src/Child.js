import { useToastr } from "./Toastr";

export default () => {
  const toastr = useToastr();
  const clickHandler = () => {
    toastr.add("this is a lame msg - " + Date.now(), false, 2000);
  };
  return (
    <div>
      <button onClick={clickHandler}>Toast me</button>
    </div>
  );
};
