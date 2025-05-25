import { FC, useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useDeleteRequest, useGetManyRequest } from "../../hooks/request";
import { Modal } from "../../components/Modal";

import './Admin.scss';

function rectifyFormat(s: string) {
  let b = s.split(/\D/);
  return b[0] + '-' + b[1] + '-' + b[2] + 'T' +
         b[3] + ':' + b[4] + ':' + b[5] + '.' +
         b[6].substr(0,3) + '+00:00';
}

export const Admin: FC = () => {
    const [secretKey, setSecretKey] = useState<string>("");
    const [isSectreKeyNeeded, setIsSecretKeyNeeded] = useState(true)
    const { requests, getRequests, error: getError, removeRequest } = useGetManyRequest();
    const { deleteRequest } = useDeleteRequest();

    const checkSecretKey = async (e: any) => {
        if (!secretKey) return null;
        const isOk = await getRequests(e, secretKey);
        if (isOk) {
            setIsSecretKeyNeeded(false);
        }
    }

    const deleteRequestState = async (id: number) => {
        const isDeleted = await deleteRequest(id, secretKey);
        if (isDeleted) {
            removeRequest(id)
        }
    }

    return (
        <div className="adminpage page">
            <Header/>
            <div className="page__content">
                <div className="container">
                    <h2 className="admin__title">Заявки</h2>
                    <div className="admin__table-wrapper">
                        <table className="admin__table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Имя</th>
                                    <th>Телефон</th>
                                    <th>Дата создания</th>
                                    <th>Удалить</th>
                                </tr>
                            </thead>
                            <tbody>
                                {requests.map(request => {
                                    const date = new Date(rectifyFormat(request.createdAt));
                                    const dateResult = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
                                    const timeResult = `${date.getHours() > 9 ? date.getHours() : '0' + date.getHours()}:${date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()}`

                                    return (
                                        <tr key={request.id}>
                                            <td>{request.id}</td>
                                            <td>{request.name}</td>
                                            <td>{request.phone}</td>
                                            <td>{dateResult}&nbsp;{timeResult}&nbsp;МСК</td>
                                            <td><button className="admin__delete danger" onClick={() => deleteRequestState(request.id)}>Удалить</button></td>
                                        </tr>
                                )})}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer/>
            <Modal title="Введите секретный ключ" isActive={isSectreKeyNeeded} closeModal={null}>
                <form action="/#contact" onSubmit={checkSecretKey} className="column">
                    {(getError && getError.message) && 
                        (<h4 className='error'>{getError.message}</h4>) 
                    }
                    <label htmlFor="secret">
                        <h5>Секретный ключ</h5>
                        <input type="text" value={secretKey} name='secret' id='secret' onChange={(e) => setSecretKey(e.target.value)} />
                    </label>
                    <button className='main__button'>Проверить</button>
                </form>
            </Modal>
        </div>
    )
}