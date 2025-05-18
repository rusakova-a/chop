
import { Header } from './components/Header';
import logo from './assets/logo.png';
import mainBg from './assets/main.jpg';
import './Main.scss';
import { useState } from 'react';
import { Modal } from './components/Modal';

interface FormData {
    phone: string;
    name: string;
}

export const Main = () => {
    const [isModalActive, setIsModalActive] = useState<boolean>(false);
    const [isFormDataSend, setIsFormDataSend] = useState<boolean>(false)
    const [formData, setFormData] = useState<FormData>({
        phone: '',
        name: ''
    })

    return (
        <div className="mainpage">
            <Header
                logo={logo}
                menuItems={[
                    {
                        title: "Главная",
                        href: "/#main"
                    },
                    {
                        title: "О нас",
                        href: "/#about"
                    },
                    {
                        title: "Услуги",
                        href: "/#services"
                    },
                    {
                        title: "Вакансии",
                        href: "/#jobs"
                    },
                    {
                        title: "Контакты",
                        href: "/#contact"
                    }
                ]}
            />
            <div className="main" id="main">
                <img src={mainBg} alt="Частное охранное предприятие" className="main__background" />
                <div className="container">
                    <div className="main__content">
                        <h1 className="main__title">Частное охранное предприятие</h1>
                        <button className="main__button" onClick={() => setIsModalActive(true)}>Заказать звонок</button>
                        <Modal isActive={isModalActive} closeModal={() => setIsModalActive(false)}>
                            {isFormDataSend ? (
                                <h4>Спасибо за заявку! Мы свяжемся с вами в ближайшее время</h4>
                            ) : (
                                <>
                                    <label htmlFor="name">
                                        <h5>Имя</h5>
                                        <input type="text" value={formData.name} name='name' id='name' onChange={(e) => setFormData((_formData) => ({..._formData, name: e.target.value}))} />
                                    </label>
                                    <label htmlFor="name">
                                        <h5>Номер телефона</h5>
                                        <input type="text" value={formData.phone} name='phone' id='phone' onChange={(e) => setFormData((_formData) => ({..._formData, phone: e.target.value}))} />
                                    </label>
                                    <button className='main__button'>Заказать звонок</button>
                                </>
                            )}
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}