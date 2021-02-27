const isIntersecting = (fox) =>{
    // return all foxes than is intercepted for 
    // the observer
    return fox.isIntersecting
}
const loading = (fox) => {
    // return the node (target) -> div
    const container = fox.target
    const imagen = container.querySelector("img")
    const url = imagen.dataset.src
    imagen.src = url
    observer.unobserve(container)
}

const registerFox = (fox) => {
    // observe is for observer something,
    // in this case, the foxes
    observer.observe(fox)
}

const observer = new IntersectionObserver((foxes) => {
    // filtra todos los foxes que están interceptados y 
    // aplicarles una acción (lazy-loading)
    foxes.filter(isIntersecting).forEach(loading)
})

export default registerFox