import '../styles/global.scss'

const NumberButton = ({symbol, handleClick}) => {
    
    return(
        <div className="button-wrapper" onClick={() => handleClick(symbol)}>
            {symbol}
        </div>
    )
}

export default NumberButton