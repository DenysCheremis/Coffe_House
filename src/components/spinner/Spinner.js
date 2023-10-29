import spinner from './spinner.svg'
import './spinner.scss'

const Spinner = () => {
    return (
        <img className='spinner' src={spinner} alt="spinner" />
    )
}

export default Spinner;