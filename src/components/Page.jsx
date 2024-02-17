import { Button } from '../shared/ui/Button'
import { Footer } from './Footer'
import { Catalog } from './Catalog'
import { Guarantee } from './Guarantee'
import { Contacts } from './Contacts'
import { CardSwiper } from './CardSwiper'

export const Page = () => {
    return (
        <div className="wrapper">
            <main className="main">
                <div className="container">
                    <h1 className="main__title">
                        ГАРАНТИРОВАННЫЙ РОСТ ПРОДАЖ ЗА 2 МЕСЯЦА
                    </h1>
                    <p className="main__subtitle">
                        или следующий месяц БЕСПЛАТНО
                    </p>
                    <a href={'#contacts'}>
                        <Button href={'#contacts'} text={'GO!'} />
                    </a>
                </div>
            </main>
            <Catalog />
            <Guarantee />

            <section className="results">
                <div className="container-big">
                    <h2 className="title">Реальные результаты</h2>
                    <div className="results-cards">
                        <CardSwiper />
                    </div>
                </div>
            </section>

            <section className="free">
                <h2 className="free__title">
                    ПОЛУЧИТЕ 1 МЕСЯЦ <br /> УСЛУГИ БЕСПЛАТНО!
                </h2>
                <p className="free__subtitle">
                    Если мы не достигнем установленных <br /> результатов за 2
                    месяца
                </p>
            </section>

            <Contacts />

            <Footer />
        </div>
    )
}
