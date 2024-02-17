import { Page } from '../components/Page'
import { ContextWrapper } from '../context/contextWrapper'
import './styles/App.scss'
const App = () => {
    return (
        <ContextWrapper>
            <Page />
        </ContextWrapper>
    )
}

export default App
