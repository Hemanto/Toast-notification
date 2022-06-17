import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import Toast from "./toast";

const ToastrContext = React.createContext(null);

function withToastrProvider(Component) {
  function AnotherToastrFn(props) {
    const [toasts, setToasts] = useState([]);
    const add = (msg, auto, delay) => {
      const id = Date.now();
      setToasts([...toasts, { id, msg, auto, delay }]);
    };
    const remove = (id) => {
      setToasts(toasts.filter((t) => t.id !== id));
    };

    return (
      <ToastrContext.Provider value={{ add, remove }}>
        <Component {...props} />
        {createPortal(
          <div className="toastContainer">
            {toasts.map((t) => (
              <Toast
                auto={t.auto}
                delay={t.delay}
                id={t.id}
                key={t.id}
                msg={t.msg}
                remove={() => remove(t.id)}
              />
            ))}
          </div>,
          document.body
        )}
      </ToastrContext.Provider>
    );
  }
  return AnotherToastrFn;
}

function useToastr() {
  const toastrCtx = useContext(ToastrContext);
  return {
    add: toastrCtx.add,
    remove: toastrCtx.remove
  };
}

export { withToastrProvider, useToastr };
