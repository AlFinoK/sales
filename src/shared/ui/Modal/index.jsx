import { Form } from '../../../components/Form'
import { useInfo } from '../../../context/contextWrapper'

export const Modal = () => {
    const { toggleModal } = useInfo()
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close-button" onClick={toggleModal}>
                    <span>X</span>
                </button>
                <Form  />
            </div>
        </div>
    )
}
