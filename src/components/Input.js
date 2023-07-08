export const Input = (props) => {
  const { id, handleChange, propName, value  } = props;

  return (
    <div className="fields">
      <label htmlFor={id}>{propName}</label>
      <input id={id} data-prop={propName} value={value} type="text" onChange={handleChange} />
    </div>
  )
}