export const Description = (props) => {
  const { propName, propValue } = props;

  return (
    <p className="fields">
      {propName}
      <span className="fields__value">{propValue}</span>
    </p>
  )
}