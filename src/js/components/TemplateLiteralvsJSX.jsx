export const TemplateLiteralvsJSX = () => {

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 m-auto bg-info-subtle">
          <h2 className="text-danger mt-3">Resolviendo expresiones de JS</h2>

          {/* Resuelve expresiones de JS desde JSX */}
          <h3>JSX</h3>
          <p>JSX y resuelvo una exprsión de JS {'Texto'}</p>
          <p>JSX y resuelvo una exprsión de JS {5 == 5 ? 'Verdadero' : 'falso'}</p>
          <p>JSX y resuelvo una exprsión de JS {5 ** 3}</p>

          <h3>Template literal</h3>
          {/* Resuelve expresiones de JS a través de template literal de JS */}
          <p>{`template literal ${'Hola'}`}</p>
          <p>{`template literal ${5 == 5 ? 'Verdadero' : 'falso'}`}</p>
          <p>{`template literal ${5 ** 3}`}</p>
        </div>
      </div>
    </div>
  )
}