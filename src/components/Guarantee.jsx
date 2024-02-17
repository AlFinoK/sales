import { Button } from '../shared/ui/Button'
import monitor from '../assets/icons/monitor.svg'
import fire from '../assets/icons/fire.svg'
import cup from '../assets/icons/cup.svg'
import { useInfo } from '../context/contextWrapper'
import { Modal } from '../shared/ui/Modal'

export const Guarantee = () => {
    const { toggleModal, modal } = useInfo()
    return (
        <section className="guarantee">
            <div className="guarantee-background">
                <div className="container">
                    <div className="guarantee__inner">
                        <div className="title">
                            Почему мы можем <br /> гарантировать Вам результат:
                        </div>
                        <div className="guarantee-cards">
                            <div className="guarantee-card">
                                <div className="guarantee-card__icon">
                                    <img src={monitor} alt="monitor" />
                                </div>
                                <p className="guarantee-card__text">
                                    Применяем алгоритмы Исскусственного
                                    Интеллекта для точного таргетинга
                                </p>
                            </div>
                            <div className="guarantee-card">
                                <div className="guarantee-card__icon">
                                    <img src={fire} alt="fire" />
                                </div>
                                <p className="guarantee-card__text">
                                    Внедряем собственную методику продвижения
                                    Rocket Power
                                </p>
                            </div>
                            <div className="guarantee-card">
                                <div className="guarantee-card__icon">
                                    <img src={cup} alt="cup" />
                                </div>
                                <p className="guarantee-card__text">
                                    Используем проверенные американские
                                    стратегии
                                </p>
                            </div>
                        </div>
                        <Button
                            text={'Запустить таргет'}
                            onClick={toggleModal}
                        />
                        {modal ? <Modal /> : null}
                    </div>
                </div>
            </div>
        </section>
    )
}
