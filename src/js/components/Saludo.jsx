export const Saludo = ({children, ...stats}) => {
  return (
    <>
      <h2>Hola {stats.name}- color {stats.color}</h2>
      {children}
    </>
    )
}