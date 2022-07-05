
const getResult = (a,b) => {
    return a+b;
}

export const FirstApp = () => {

    const newMessage = "Pio!!!";

    const primerObjeto = {
        message: "Hola pio",
        title: "Soy yo :3"
    }

    return(
        <>
            <h1>Soy la pio</h1>
            <p>asi es ;3</p>
            <p>Expresiones de javascript {1+1}</p>
            <p>{newMessage}</p>
            <code>{JSON.stringify(primerObjeto)}</code>
            <p>{getResult(1,4)}</p>
        </>
    );
}