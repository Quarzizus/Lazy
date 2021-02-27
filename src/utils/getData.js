import random from "./random.js"

const createImageNode = () => {
    //imagen
    const imagen = document.createElement("img")
    imagen.classList.add('fox_imagen')
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`
    // container
    const container = document.createElement("div")
    container.classList.add('fox')
    container.id = 'fox-id'

    container.append(imagen)
    return container
}

export default createImageNode