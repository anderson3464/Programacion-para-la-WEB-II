import './UsuarioCard.css';

function UsuarioCard({ nombre, rol, estado, imagen }){
    const claseEstado = estado === 'Activo' ? 'badge-active' : 'badge-inactivo';

    return (
        <div className='usuario-card'>
            <img src={imagen} alt={`Foto de ${nombre}`} className="usuario-img" />
            <div className='usuario-info'>
                <h3>{nombre}</h3>
                <p className='usuario-rol'>{rol}</p>
                <span className={`usuario-badge ${claseEstado}`}>
                    {estado}
                </span>
            </div>
            <div className='usuario-acciones'>
                <button onClick={ ()=> alert(`Enviando mensaje a ${nombre}`) }>
                    Mensaje
                </button>
            </div>
        </div>
    );
}

export default UsuarioCard;