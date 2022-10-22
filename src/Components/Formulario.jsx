
export const Formulario = ({onInputSubmit}) => {

  const handleSubmit = (e) => {

    e.preventDefault();
    const input = document.querySelector('[aria-label="tamañoMatriz"]').value;
    onInputSubmit(input);

  }
  

  return (
    <>
    
        <div className="container">

        <form className="form text-center" onSubmit={(e) => handleSubmit(e)}>

            <label className="form-label" htmlFor="Tamaño">Tamaño de la matriz:</label>
            
            <div className="w-25 m-auto">

            <input aria-label="tamañoMatriz" className="form-control text-center" type="number" min={1} max={15} placeholder="Número del 1 al 5" />

            </div>

            <div className="w-25 m-auto">

            <button type="submit" className="btn btn-outline-dark mt-2 mb-2 col-12">Enviar</button>

            </div>

            </form>

        </div>



    </>
  )
}
