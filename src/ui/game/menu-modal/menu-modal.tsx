import React, { CSSProperties } from "react";
import { Dialog } from "@headlessui/react";
import { createPortal } from "react-dom";
import { BaseModalProps, Modal } from "../../modal/modal";
//import "./menu-modal";

const uiContainer = document.getElementById("ui");

export interface MenuModalProps extends BaseModalProps {}

const style: CSSProperties = {
  cursor: "default",
  padding: "1rem",
  backgroundColor: "rgba(150, 150, 150, 0.8)",
  borderRadius: "0.5rem",
};

export function MenuModal(props: MenuModalProps) {
  return (
    <Modal isOpen={props.isOpen} close={props.close}>
      <div className="menu-modal" style={style}>
        <div style={{ marginBottom: "0.5rem" }}>
          <b>MENU</b>
          <button style={{ marginLeft: "1rem" }} onClick={props.close}>
            X
          </button>
        </div>
        <div>Buy stuff</div>
      </div>
    </Modal>
  );
}
