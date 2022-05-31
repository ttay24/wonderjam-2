import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import { useStore } from "../../state";
import { MenuModal } from "./menu-modal/menu-modal";
import { Dialog } from "@headlessui/react";

export function InGame() {
  const state = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // create callback
  const closeMenu = useCallback(() => setIsMenuOpen(false), [setIsMenuOpen]);

  return (
    <div>
      <div>
        <button onClick={() => setIsMenuOpen(true)}>
          Menu {isMenuOpen ? "open" : "closed"}
        </button>
      </div>
      <div>CASH: {state.cash}</div>

      {/* <Dialog
        open={isMenuOpen}
        onClose={toggleMenuModal}
        className="relative z-50"
      >
        <MenuModal close={closeMenu}></MenuModal>
      </Dialog> */}

      <MenuModal isOpen={isMenuOpen} close={closeMenu}></MenuModal>
    </div>
  );

  function test() {
    console.log("clicked test");
  }

  function toggleMenuModal() {
    setIsMenuOpen(!isMenuOpen);
  }
}
