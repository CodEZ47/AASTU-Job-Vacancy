import { Modal, ProgressBar } from 'react-bootstrap';
export default function ProgressModal({percent, show, onClose}){
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Uploading...</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ProgressBar now={percent} label={`${percent}%`} />
            </Modal.Body>
        </Modal>
    )
}