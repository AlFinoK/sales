import { useInfo } from '../context/contextWrapper'
import { Button } from '../shared/ui/Button'
import { Modal } from '../shared/ui/Modal'

export const Catalog = () => {
    const { toggleModal, modal } = useInfo()
    return (
        <section className="catalog">
            <h2 className="title">Эта услуга для Вас, если Вы:</h2>
            <div className="catalog-cards">
                <div className="catalog-cards__card">
                    <span>Устали менять таргетологов</span>
                    <h5 className="catalog-cards__card-title">
                        Получите 6 digital специалистов по цене 1 таргетолога:
                    </h5>
                    <ul className="catalog-cards__card-list">
                        <li className="catalog-cards__card-item">
                            ✓ Маркетолог
                        </li>
                        <li className="catalog-cards__card-item">
                            ✓ Копирайтер
                        </li>
                        <li className="catalog-cards__card-item">
                            ✓ Мобилограф
                        </li>
                        <li className="catalog-cards__card-item">✓ Дизайнер</li>
                        <li className="catalog-cards__card-item">
                            ✓ Digital маркетолог
                        </li>
                        <li className="catalog-cards__card-item">
                            ✓ Таргетолог <br /> + <br />
                            Искусственный Интеллект
                        </li>
                    </ul>
                </div>
                <div className="catalog-cards__card">
                    <span>Клиенты пишут, но не покупают</span>
                    <h5 className="catalog-cards__card-title">
                        Получайте только качественные заявки, благодаря нашей
                        собственной методике ультраточного таргетирования{' '}
                        <strong>Rocket Power</strong>
                    </h5>
                </div>
                <div className="catalog-cards__card">
                    <span>Цена за лид заоблочна</span>
                    <h5 className="catalog-cards__card-title">
                        Получите в 2 раза больше качественных лидов за тот же
                        бюджет при помощи американских стратегий продвижения
                    </h5>
                </div>
            </div>
            <Button text={'Запустить таргет'} onClick={toggleModal} />
            {modal ? <Modal /> : null}
        </section>
    )
}
