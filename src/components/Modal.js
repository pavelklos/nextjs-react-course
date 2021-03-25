function Modal(props) {
  function cancelHandler() {
    console.log("CANCEL:");
    props.onCancel();
  }
  function confirmHandler() {
    console.log("CONFIRM:");
    props.onConfirm();
  }

  return (
    <div className='modal'>
      <p>Are you sure?</p>
      <button className='btn btn--alt' onClick={cancelHandler}>
        Cancel
      </button>
      <button className='btn' onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
