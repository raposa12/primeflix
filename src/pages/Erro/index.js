import { Link } from 'react-router-dom';
import './erro.css';

function Erro() {
    return(
        <div className="not-found">
            <h1>044</h1>
            <h2>Pagina não encotrada!</h2>
            <Link to="/">Veja todos filmes</Link>
        </div>
    );
}

export default Erro;