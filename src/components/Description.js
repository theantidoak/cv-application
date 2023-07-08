export const Description = (props) => {
  const { propName, propValue } = props;

  return (
    <p className="fields">
      <span className="fields__descriptor">{propName}: </span>
      <span className="fields__value">{propValue}</span>
    </p>
  )
}