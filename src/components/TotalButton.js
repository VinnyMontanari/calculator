import '../styles/global.scss'

const BtnTotal = ({symbol, handleClick}) => {
    return(
        <div id="btn-total" onClick={() => handleClick(symbol)}>
            {symbol}
        </div>
    )
}

export default BtnTotal;