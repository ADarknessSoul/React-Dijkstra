
export const Formulario = () => {
  return (
    <>
    
        <div className="container">

        <form className="form text-center">

            <label className="form-label" htmlFor="Tamaño">Tamaño de la matriz:</label>
            
            <div className="w-25 m-auto">

            <input className="form-control" type="number" pattern="[1-5]" placeholder="Tamaño de la Matriz" />

            </div>

            <div className="w-25 m-auto">

            <button type="submit" className="btn btn-outline-dark mt-2 mb-2 col-12">Enviar</button>

            </div>

            </form>

        </div>



    </>
  )
}
