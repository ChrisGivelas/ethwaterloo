import React from "react";

export default class Modal extends React.Component {
  render() {
      const {headerContent, bodyContent, submit, close}
    return (
      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={close}>
                &times;
              </button>
                {headerContent}
            </div>
            <div className="modal-body">
              {bodyContent}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" onClick={submit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
