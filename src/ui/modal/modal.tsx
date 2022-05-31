import React, { CSSProperties } from "react";
import { Dialog } from "@headlessui/react";
import { createPortal } from "react-dom";

const uiContainer = document.getElementById("ui");

export interface BaseModalProps {
  isOpen: boolean;
  close: () => void;
}

export interface ModalProps extends BaseModalProps {
  children: any;
}

const style: CSSProperties = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%);",
  cursor: "default",
};

export function Modal(props: ModalProps) {
  return props.isOpen ? (
    createPortal(<div style={style}>{props.children}</div>, uiContainer)
  ) : (
    <></>
  );
}
