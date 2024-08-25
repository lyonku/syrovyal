import { FC, useRef } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";
import MemoCross from "components/Assets/Cross";
import { useClickAway, useKey } from "react-use";
import { removeInert } from "helpers";
import { LinksType } from "types";
import MemoOzon from "components/Assets/Ozon";
import MemoWildberries from "components/Assets/Wildberries";

interface ModalProps {
  isModalOpen: boolean;
  setModalOpen: (state: boolean) => void;
  modalLinks: LinksType;
}

const Modal: FC<ModalProps> = ({ isModalOpen, setModalOpen, modalLinks }) => {
  const modalRef = useRef(null);
  const closeModalHandler = () => {
    setModalOpen(false);
    removeInert();
  };

  useKey("Escape", closeModalHandler);

  useClickAway(modalRef, () => {
    closeModalHandler();
  });

  return ReactDOM.createPortal(
    <div
      className={`modal ${isModalOpen ? "opened" : "closed"}`}
      id="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal__wrap" ref={modalRef}>
        <h2>Выберите маркетплейс</h2>
        <div className="start-section__links">
          <a
            href={modalLinks.ozon}
            target="_blank"
            rel="noreferrer"
            className={`start-section__link start-section__link-ozon ${
              modalLinks.ozon.length <= 1 ? "disabled" : ""
            }`}
            aria-label="Ссылка на озон"
          >
            <MemoOzon />
          </a>
          <a
            href={modalLinks.wildberries}
            target="_blank"
            rel="noreferrer"
            className={`start-section__link start-section__link-wildberries ${
              modalLinks.wildberries.length <= 1 ? "disabled" : ""
            }`}
            aria-label="Ссылка на вайлбериз"
          >
            <MemoWildberries gradientId="modal-gradient" />
          </a>
        </div>
        <button
          aria-label="Закрыть модальное окно"
          onClick={closeModalHandler}
          className="modal__close-btn"
        >
          <MemoCross width={30} height={30} aria-hidden="true" />
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
