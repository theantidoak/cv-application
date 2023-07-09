import { Button } from "./Button";
import { Input } from "./Input";

export const Education = (props) => {

  const { education, handleClick, handleChange } = props;

  const entries = education.schools.map((school) => Object.entries(school)).flat();
  const inputs = entries.map(([key, value], i) => <Input key={'input-' + key + i} value={value} id={'input-' + key + '-' + (Math.ceil((i + 1) / 5) - 1)} propName={'schools.' + key} handleChange={(e) => handleChange(e, 'education')} />)
  const listItems = entries.map(([key, value], i) => <li id={'education-' + key + i} key={'education-' + key + i}>{value}</li>)
  const list = <ul>{listItems}</ul>

  return (
    <div className="sidebar__education-container">
      <h2>Education</h2>
      {!education.editing && list}
      <form className="sidebar__education-form" action="" onSubmit={(e) => e.preventDefault()}>
        {education.editing && inputs}
        {education.editing && <button value="" data-prop="schools.dates" onClick={(e) => handleChange(e, 'education', education.schools.length)}>Add School</button>}
        <Button handleClick={() => handleClick('education')} editing={education.editing} />
      </form>
    </div>
  )
}