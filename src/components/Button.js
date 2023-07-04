
export const Button = (props) => {
  const { handleClick, editing } = props;

  return (
    <button onClick={handleClick}>{editing ? 'Add Info' : 'Edit Info'}</button>
  )
}