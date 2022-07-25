import { useGlobalContext } from "../Helpers/context";

export const Modal = () => {
  const { modal, closeModal } = useGlobalContext();

  return (
    <>
      <section
        className={modal ? "modal_container open-modal" : `modal_container`}
      >
        <h2>Modal</h2>
        <button type="button" onClick={() => closeModal()}>
          X
        </button>
      </section>
    </>
  );
};
