import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function DeleteModal({ show, handleClose, setConfirmDelete }) {

    const handleDelete = () => {
        setConfirmDelete(true)
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this data?
                </Modal.Body>
                <Modal.Footer>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button onClick={handleDelete} className="btn btn-order text-center btn-warning" type="button">Yes</button>
                        <button onClick={handleClose} className="btn btn-order text-center btn-warning" type="button">No</button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DeleteModal;