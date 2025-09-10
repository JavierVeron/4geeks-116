const StarsWarsImages = ({id}) => {
    const personajes = [
        {id:1, image:"https://mewmagazine.es/wp-content/uploads/2019/12/Luke-Skywalker-1024x576.jpg"},
        {id:2, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQry_QoayQTeTNpJR9Dlaa5tId6npFU9KtOmw&s"},
        {id:3, image:"https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536"},
        {id:4, image:"https://wallpapers.com/images/hd/darth-vader-pictures-qwlyfdkmyjirchwo.jpg"},
    ]
    const personajeNoImagen = "https://i0.wp.com/es.rollingstone.com/wp-content/uploads/2021/05/20-perosnajes-star-wars.jpg?fit=1280%2C770&ssl=1";
    let imagen = personajes.find(item => item.id == id);
    imagen = imagen ? imagen.image : personajeNoImagen;
    
    return (
        <img src={imagen} alt="Personaje Star Wars" className="img-fluid" />
    )
}

export default StarsWarsImages