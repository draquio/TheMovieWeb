import "./Emptydata.scss"

export function Emptydata(props) {
    const {data} = props;
  return (
    <div className='emptydata'>
      No hay <b>{data}</b> para mostrar
    </div>
  )
}
