import { Button } from '../shared/ui/Button'

export const Form = () => {
    return (
        <form className="contacts__form">
            <h5 className="contacts__form-title">Еще остались сомнения?</h5>
            <p className="contacts__form-subtitle">
                Оставь заявку и получи бесплатный чек-лист на проверку своего
                таргетолога
            </p>
            <div className="contacts__form-inputes">
                <input
                    className="contacts__form-input"
                    type="text"
                    placeholder="Имя"
                />
                <input
                    className="contacts__form-input"
                    type="text"
                    placeholder="+7 (777) 777 77 77"
                />
            </div>

            <Button text={'Оставить заявку'} />
        </form>
    )
}
