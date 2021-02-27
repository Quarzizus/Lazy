import createImageNode from "./utils/getData.js"
import registerFox from "./utils/lazy.js"

const main = document.querySelector(".main")
const buttonAdd = document.querySelector(".buttons_add")
const buttonClear = document.querySelector(".buttons_clear")

const add = () => {
    const node = createImageNode()
    main.append(node)
    registerFox(node)
    
}
const clear = () => {
    const nodes = main.querySelectorAll('#fox-id')
    const elements = [...nodes].forEach(node => node.remove() )
    
}

buttonAdd.addEventListener("click", add)
buttonClear.addEventListener("click", clear)
