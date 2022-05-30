import React, { CSSProperties } from "react";
import { Dialog } from "@headlessui/react";
import { createPortal } from "react-dom";
import { Modal } from "../../modal/modal";
//import "./menu-modal";

const uiContainer = document.getElementById("ui");

export interface MenuModalProps {
  close: () => void;
}

const style: CSSProperties = {
  cursor: "default",
  padding: "1rem",
  backgroundColor: "rgba(150, 150, 150, 0.8)",
  borderRadius: "0.5rem",
};

export function MenuModal(props: MenuModalProps) {
  return (
    <Modal close={props.close}>
      <div className="menu-modal" style={style}>
        test
      </div>
    </Modal>
  );
}
