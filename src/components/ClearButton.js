import '../styles/clearbutton.scss'

const ClearButton = ({symbol, handleClick}) => {
    return(
        <div id="btnLimparResult" onClick={() => handleClick(symbol)}>
            {symbol}
        </div>
    )
}

export default ClearButton