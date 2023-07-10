
export const Button = (props) => {
  const { handleClick, editing } = props;

  return (
    <button onClick={handleClick}>{editing ? 'Resubmit' : 'Edit'}</button>
  )
}