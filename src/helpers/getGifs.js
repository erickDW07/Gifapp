export const getGifs =  async (categoria) =>{
    const url = `http://api.giphy.com/v1/gifs/search?api_key=VEVq42Ekrm7KyEAoGxcqliH0GcW76Tc1&q=${categoria}&limit=20`;
    const res = await fetch(url);
    const {data} = await res.json();

    const gifs = data.map((gif)=>{
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.fixed_height_small.url
        }
    });

    return gifs;
}