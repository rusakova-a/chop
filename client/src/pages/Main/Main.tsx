import { useState } from 'react';

import { Header } from '../../components/Header';
import { Modal } from '../../components/Modal';

import { usePostRequest } from '../../hooks/request';

import mainBg from './assets/main.jpg';
import aboutImage from './assets/about-image.jpg';
import service1 from './assets/service-1.jpg';
import service2 from './assets/service-2.jpg';
import service3 from './assets/service-3.jpg';
import service4 from './assets/service-4.jpg';
import service5 from './assets/service-5.jpg';
import jobs1 from './assets/jobs-1.jpg';
import jobs2 from './assets/jobs-2.jpg';
import contactAdress from './assets/contact-adress.png';
import contactEmail from './assets/contact-email.png';
import contactPhone from './assets/contact-phone.png';

import './Main.scss';
import { Footer } from '../../components/Footer';


export const Main = () => {
    const { formData, sendFormData, setFormData, isFormDataSend, error } = usePostRequest();
    const [isModalActive, setIsModalActive] = useState<boolean>(false);

    return (
        <div className="mainpage page">
            <Header/>
            <div className="page__content">
                <div className="main" id="main">
                    <img src={mainBg} alt="Частное охранное предприятие" className="main__background" />
                    <div className="main__content">
                        <div className="container">
                            <h1 className="main__title">Частное охранное предприятие</h1>
                            <button className="main__button" onClick={() => setIsModalActive(true)}>Заказать звонок</button>
                            <Modal title={"Заказать звонок"} isActive={isModalActive} closeModal={() => setIsModalActive(false)}>
                                {isFormDataSend ? (
                                    <h4 className='success'>Спасибо за заявку! Мы свяжемся с вами в ближайшее время</h4>
                                ) : (
                                    <form action="/#contact" onSubmit={sendFormData} className="column">
                                        {(error && error.message) && 
                                            (<h4 className='error'>{error.message}</h4>) 
                                        }
                                        <label htmlFor="name">
                                            <h5>Имя</h5>
                                            <input type="text" value={formData.name} name='name' id='name' onChange={(e) => setFormData((_formData) => ({..._formData, name: e.target.value}))} />
                                        </label>
                                        <label htmlFor="name">
                                            <h5>Номер телефона</h5>
                                            <input type="text" value={formData.phone} name='phone' id='phone' onChange={(e) => setFormData((_formData) => ({..._formData, phone: e.target.value}))} />
                                        </label>
                                        <button className='main__button'>Заказать звонок</button>
                                    </form>
                                )}
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className="about" id='about'>
                    <div className="container">
                        <div className="about__row">
                            <div className="about__content">
                                <h2 className="about__title">О компании</h2>
                                <p className="about__text">
                                    Частная охранная организация «Штык» действует в соответствии с действующим законодательством на основании Устава, Законом Российской Федерации от 11.03.1992 № 2487-1 «О частной детективной и охранной деятельности в Российской Федерации», организована в 2010 году, обеспечивает безопасность градообразующего предприятия АО «Святогор». 
                                    <br/><br/>
                                    ООО ЧОО «Штык» является устойчивым предприятием, пользующимся доверием не только основного заказчика, но и других предприятий города, на данный момент в штате состоят исключительно профессионалы своего дела. Мы знаем, как работает правоохранительная система, можем подобрать лучшее оборудование и предложить решения, которые будут на 100 % соответствовать вашим потребностям.
                                    <br/><br/>
                                    Мы имеем все необходимые ресурсы, оборудование, транспортные средства. Каждого своего сотрудника мы проверяем на судимость, причастность к алкоголю, наркотикам. У нас работает персонал, прошедший специальную подготовку, поэтому компания выполняет задачи любого уровня сложности.
                                </p>
                            </div>
                            <img src={aboutImage} alt="О компании" className='about__image' />
                        </div>
                    </div>
                </div>
                <div className="services" id='services'>
                    <div className="container">
                        <h2 className="services__title">Услуги</h2>
                        <div className="services__cards-wrapper">
                            <ul className="services__cards">
                                <li className="services__card">
                                    <img src={service1} alt="Услуга 1" />
                                    <h4 className="services__card-title">Системы видеонаблюдения <br/> (от 3000 тыс. руб.)</h4>
                                </li>
                                <li className="services__card">
                                    <img src={service2} alt="Услуга 2" />
                                    <h4 className="services__card-title">Охранная сигнализация <br/> (от 3000р.)</h4>
                                </li>
                                <li className="services__card">
                                    <img src={service3} alt="Услуга 3" />
                                    <h4 className="services__card-title">Охрана общественного порядка при проведении массовых мероприятий <br/> (436 руб./час)</h4>
                                </li>
                                <li className="services__card">
                                    <img src={service4} alt="Услуга 4" />
                                    <h4 className="services__card-title">Консультирование по вопросам безопасности <br/> (по договоренности)</h4>
                                </li>
                                <li className="services__card">
                                    <img src={service5} alt="Услуга 5" />
                                    <h4 className="services__card-title">Физическая охрана (вооруженная\невооруженная) <br/> (436 руб./час)</h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="jobs" id='jobs'>
                    <div className="container">
                        <h2 className="jobs__title">Вакансии</h2>
                        <div className="jobs__cards">
                            <div className="jobs__card">
                                <img src={jobs1} alt="Вакансия 1" />
                                <p className="jobs__card-text">
                                    Охранник<br/>
                                    График: 3/3<br/>
                                    Оплата: до 35000 руб./мес.
                                </p>
                            </div>
                            <div className="jobs__card">
                                <img src={jobs2} alt="Вакансия 2" />
                                <p className="jobs__card-text">
                                    Охранник<br/>
                                    График: 2/2, 15/15<br/>
                                    Оплата: до 30000 руб./мес.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact" id='contact'>
                    <div className="container">
                        <div className="contact__items">
                            <a className="contact__item" href='mailto:shtyk@m-bez.ru'>
                                <img src={contactEmail} alt="Email" className='contact__item-icon' />
                                <div className="contact__item-text">shtyk@m-bez.ru</div>
                            </a>
                            <a className="contact__item" href='tel:+73434327031'>
                                <img src={contactPhone} alt="Телефон" className='contact__item-icon' />
                                <div className="contact__item-text">+7 (34343) 27-031</div>
                            </a>
                            <div className="contact__item">
                                <img src={contactAdress} alt="Адрес" className='contact__item-icon' />
                                <div className="contact__item-text">г. Красноуральск, ул. Кирова, д. 2</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}