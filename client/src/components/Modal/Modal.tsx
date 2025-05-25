import { FC, ReactElement, useEffect } from "react";

import './Modal.scss';

interface ModalProps {
    isActive: boolean;
    closeModal: null | (() => void);
    children: string | ReactElement | ReactElement[];
    title: string | ReactElement | ReactElement[];
}

export const Modal: FC<ModalProps> = ({ isActive, children, closeModal, title }) => {
    useEffect(() => {
        if (isActive) {
            document.body.classList.add('scroll-lock')
        } else {
            document.body.classList.remove('scroll-lock')
        }
    }, [isActive])

    return (
        <div className={`modal__wrapper ${isActive ? 'active' : ''}`}>
            <div className="modal">
                <h3 className="modal__title">{title}</h3>
                {closeModal && <div className="modal__close" onClick={() => closeModal()}>
                    <span/>
                    <span/>
                </div>}
                {children}
            </div>
        </div>
    )
}