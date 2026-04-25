import { Link } from 'react-router-dom';
import UsuarioCard from '../components/UsuarioCard';

function UsuariosLista() {
    return (
        <div>
            <h1>Lista de usuarios</h1>
            <p>Pasando PROPS uno por uno</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <UsuarioCard 
                    nombre="Juan Perez"
                    rol="Administrador"
                    estado="Activo"
                    imagen="https://randomuser.me/api/portraits/men/32.jpg"
                />
                <UsuarioCard 
                    nombre="Ana Gomez"
                    rol="Diseñadora"
                    estado="Inactivo"
                    imagen="https://randomuser.me/api/portraits/women/44.jpg"
                />
            </div>

        </div>
    );
}

export default UsuariosLista;