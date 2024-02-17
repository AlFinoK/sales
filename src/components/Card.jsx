import { useInfo } from '../context/contextWrapper'

// eslint-disable-next-line react/prop-types
export const Card = ({ info, sumBefore }) => {
    const { sumFn } = useInfo()
    const sumAfter = sumFn(sumBefore)

    return (
        <div className="results-card">
            <div className="results-card__before">
                <span>ДО</span>
                <div className="results-card__before-info">
                    Значение {info}: {sumBefore}$
                </div>
            </div>
            <div className="results-card__after">
                <span>ПОСЛЕ</span>
                <div className="results-card__after-info">
                    Значение {info}: {sumAfter}$
                </div>
            </div>
        </div>
    )
}
