import React, {PropTypes} from 'react';
import {confirmable} from 'react-confirm';
import Dialog from 'react-modal'; // your choice.

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const YourDialog = ({
  show,
  proceed,
  dismiss,
  cancel,
  confirmation,
  options
}) => {
  return (
    <Dialog onRequestClose={dismiss} isOpen={show} contentLabel='' style={customStyles}>
      <button className="btn btn-secondary" onClick={() => cancel('arguments will be passed to the callback')}>
        <span className="fa fa-times ml-3"></span>
        انصراف
      </button>
      <span> </span>
      <button className="btn btn-primary" onClick={() => proceed('same as cancel')}>
        <span className="fa fa-check ml-3"></span>
        تایید
      </button>
    </Dialog>
  )
}

YourDialog.propTypes = {
  show: PropTypes.bool, // from confirmable. indicates if the dialog is shown or not.
  proceed: PropTypes.func, // from confirmable. call to close the dialog with promise resolved.
  cancel: PropTypes.func, // from confirmable. call to close the dialog with promise rejected.
  dismiss: PropTypes.func, // from confirmable. call to only close the dialog.
  confirmation: PropTypes.string, // arguments of your confirm function
  options: PropTypes.object // arguments of your confirm function
}

// confirmable HOC pass props `show`, `dismiss`, `cancel` and `proceed` to your component.
export default confirmable(YourDialog);
