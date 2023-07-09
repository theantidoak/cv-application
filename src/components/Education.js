import { Button } from "./Button";
import { Input } from "./Input";

export const Education = (props) => {

  const { education, handleClick, handleChange } = props;

  const inputs = education.schools.map((school, i) => inputRecursion(school, i));
  const entries = education.schools.map((school) => Object.entries(school)).flat();
  const listItems = entries.map(([key, value], i) => <li id={'education-' + key + i} key={'education-' + key + i}>{value}</li>)
  const list = <ul>{listItems}</ul>

  function inputRecursion(obj, i, arr=[]) {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === "object") {
        return inputRecursion(value, i, arr)
      } else {
        return arr.push(<Input key={'input-' + key + i} value={value} id={'input-' + key + i} propName={key} handleChange={(e) => handleChange(e, 'education')} />)
      }
    });
    return arr;
  }

  return (
    <div className="sidebar__education-container">
      <h2>Education</h2>
      {!education.editing && list}
      <form className="sidebar__education-form" action="" onSubmit={(e) => e.preventDefault()}>
        {education.editing && inputs}
        {education.editing && <button value="" data-prop="schools" onClick={(e) => handleChange(e, 'education', education.schools.length)}>Add School</button>}
        <Button handleClick={() => handleClick('education')} editing={education.editing} />
      </form>
    </div>
  )
}