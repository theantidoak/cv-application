export const Input = (props) => {
  const { id, handleChange } = props;

  return (
    <label htmlFor={id}>{id}<input id={id} type="text" onChange={handleChange} /></label>
  )
}