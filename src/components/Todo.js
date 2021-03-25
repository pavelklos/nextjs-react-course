import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const { text } = props;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleDelete() {
    console.log("DELETE:", props.text);
    setModalIsOpen(true);
    // setModalIsOpen(!modalIsOpen);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className='card'>
      <h2>{text}</h2>
      <div className='actions'>
        <button className='btn' onClick={handleDelete}>
          Delete
        </button>
      </div>
      {modalIsOpen ? (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      ) : null}
      {modalIsOpen ? <Backdrop onCancel={closeModalHandler} /> : null}
    </div>
  );
}

export default Todo;
