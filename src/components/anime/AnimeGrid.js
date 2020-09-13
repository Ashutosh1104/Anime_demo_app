import React ,{useState} from 'react';
import AnimeItem from './AnimeItem'
import Expand from './Expand'
import Spinner from '../ui/Spinner'

function AnimeGrid(props) {
    const [activeExpand, setActiveExpansion] = useState('');
    return (
        <>
            <div className="cards">
                {props.animes.map((anime, index) => {
                    if (props.animes.length === index + 1) {
                        return <div ref={props.lastAnimeElementRef} key={anime.name}><AnimeItem anime={anime} /></div>
                    } else {
                        return (
                            <>
                                <div key={anime.name}>
                                    <AnimeItem anime={anime} setActiveExpansion = {setActiveExpansion} activeExpand={activeExpand} />
                                </div>
                                { activeExpand === anime.name  && <Expand anime = {anime} activeExpand = {activeExpand} />}
                            </>
                        )
                    }
                })}
                <div>{props.loading && <Spinner />}</div>
                <div>{props.error && 'Error'}</div>
            </div>
        </>
    );
}

export default AnimeGrid;