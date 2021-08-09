import "../styles/global.scss";

function Display({ numDefault, input, res }) {
  
  return (
    <div id="totalDisplay">{numDefault}{input}{res}</div>
  )
}

export default Display;
