import { useGifController } from "../hooks/useGifControler.js";
import { Item } from "./item";



export const GridItems = ({ item }) => {

    const {gifs, isLoading} = useGifController(item);

    return (
        <>
            <h5> {item} </h5>
            { isLoading && (<h2> Cargando... </h2>)}
            <div className="grid" >
                {gifs.map(({ id, url }) => <Item key={id} url={url} />)}
            </div>
        </>

    );
}