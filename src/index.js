const expresion = document.getElementById("expresion");
const texto = document.getElementById("texto");
const btnChecar = document.getElementById("btnChecar");
const btnLimpiar = document.getElementById("btnLimpiar");
const respuesta = document.getElementById("respuesta");

const mostrar = (mensaje, clase) => {
    respuesta.innerText = mensaje;
    respuesta.className = `respuesta ${clase}`;
};

const checar = () => {
    if (expresion.value === "" || texto.value === "") {
        mostrar("Escribe la expresion y el texto", "error");
        return;
    }

    try {
        const regex = new RegExp(expresion.value);
        const cumple = regex.test(texto.value);

        mostrar(cumple ? "Si cumple con la expresion" : "No cumple con la expresion", cumple ? "exito" : "error");
    } catch (error) {
        mostrar("La expresion regular no es valida", "error");
    }
};


const limpiar = () => {
    expresion.value = "";
    texto.value = "";
    respuesta.innerText = "";
    respuesta.className = "respuesta";
};

btnChecar.addEventListener("click", checar);
btnLimpiar.addEventListener("click", limpiar);