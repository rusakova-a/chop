import { FC, ReactElement } from "react";

interface ModalProps {
    isActive: boolean;
    closeModal: () => void;
    children: ReactElement | ReactElement[];
}

export const Modal: FC<ModalProps> = ({ isActive, children, closeModal }) => {
    return (
        <div className={`modal__wrapper ${isActive ? 'active' : ''}`}>
            <div className="modal">
                <div className="modal__close-wrapper">
                    <div className="modal__close">
                        <span/>
                        <span/>
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}