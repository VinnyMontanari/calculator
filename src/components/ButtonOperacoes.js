import '../styles/global.scss'

const BtnOperacoes = ({symbol, handleClick}) => {

    return(
        <div id="btn-operacoes" onClick={() => handleClick(symbol)}>
            {symbol}
        </div>
    )
}

export default BtnOperacoes;