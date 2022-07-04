import React from "react";
import { CSSTransition } from "react-transition-group";
import { classNames } from "utils";

export interface DrawerProps {
  placement?: "left" | "right";
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  allowBackdropClose?: boolean;
  allowEscClose?: boolean;
  unmountOnExit?: boolean;
  children: JSX.Element | JSX.Element[];
}

export const Drawer: React.FC<DrawerProps> = (props) => {
  const {
    placement = "left",
    className,
    allowEscClose = true,
    allowBackdropClose = true,
    unmountOnExit,
    isOpen,
    onClose,
    children,
  } = props;

  const drawerRef = React.useRef<HTMLDivElement | null>(null);

  const backdorpCloseHandler = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    ev.preventDefault();
    ev.stopPropagation();

    if (allowBackdropClose) onClose();
  };

  React.useEffect(() => {
    const escCloseHandler = (ev: KeyboardEvent) => {
      if (allowEscClose) {
        if (ev.key === "Escape") onClose();
      }
    };

    window.addEventListener("keydown", escCloseHandler);

    return () => {
      window.removeEventListener("keydown", escCloseHandler);
    };
  }, [onClose, allowEscClose]);

  return (
    <CSSTransition
      timeout={200}
      in={isOpen}
      nodeRef={drawerRef}
      unmountOnExit={unmountOnExit}
      mountOnEnter={!unmountOnExit}
    >
      <div ref={drawerRef} className={classNames("drawer", placement, className)}>
        <div className="drawer__backdrop" onClick={backdorpCloseHandler} />
        <div className="drawer__body">{children}</div>
      </div>
    </CSSTransition>
  );
};
