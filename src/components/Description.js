export const Description = (props) => {
  const { id, propValue } = props;

  return (
    <p><span>{id}: </span><span>{propValue}</span></p>
  )
}