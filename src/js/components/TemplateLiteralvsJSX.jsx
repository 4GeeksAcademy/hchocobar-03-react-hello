export const TemplateLiteralvsJSX = () => {

  return (
    <>
      {/* Resuelve expresiones desde JSX */}
      <p>JSX y resuelvo una exprsión de JS {'Texto'}</p>
      <p>JSX y resuelvo una exprsión de JS {5 == 5 ? 'Verdadero' : 'falso'}</p>
      <p>JSX y resuelvo una exprsión de JS {5 ** 3}</p>

      {/* Resuelve expresiones de JS a través de template literal de JS */}
      <p>{`template literal ${'Hola'}`}</p>
      <p>{`template literal ${5 == 5 ? 'Verdadero' : 'falso'}`}</p>
      <p>{`template literal ${5 ** 3}`}</p>
    </>
  )
}