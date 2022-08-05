import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom'
import './home.css';

//URL DA API: /movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR

function Home(){

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

            /*Consumindo api*/
            async function loadFimes(){
                const response = await api.get("movie/now_playing", {
                    params: {
                        api_key: "6596e507671303e31ee1bbf972a43ee0",
                        language: "pt-BR",
                        page: 1
                    }
                })

                /*console.log(response.data.results.slice(0, 10));*/
                setFilmes(response.data.results.slice(0, 10))
                setLoading(false)

            }

            loadFimes();

    }, [])

    if(loading) {
        return(
            <div
            className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        );
    }

    return(
        <div>
            <div className="container">
                <div className="lista-filmes">
                    {filmes.map((filme) => {
                        return(
                            <article key={filme.id}>
                            
                            <strong>{filme.title}</strong>

                            <img src= { `http://image.tmdb.org/t/p/original/${filme.poster_path}`}  alt={filme.title} />

                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;