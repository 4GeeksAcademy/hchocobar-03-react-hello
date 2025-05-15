// 1

export const SubTitle = (props) => {
  console.log(props)

  return (
    <div className="container">
      <h3 className={`text-${props.color}`}>{props.text}</h3>
    </div>
  )
}