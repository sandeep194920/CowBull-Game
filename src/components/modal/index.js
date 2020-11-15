import React from "react";
import { createPortal } from "react-dom";
import { Container, Overlay, Content } from "./styles/modal";

export default function Modal({ children, ...restProps }) {
  return createPortal(
    <Container {...restProps}>{children}</Container>,
    document.body
  );
}

// overlay - black screen that covers the main content and acts as a separator bw main content and the modal
Modal.Overlay = function ModalOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

Modal.Content = function ModalContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};
