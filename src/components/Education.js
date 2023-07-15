import { Button } from "./Button";
import { Input } from "./Input";

export const Education = (props) => {

  const { education, handleClick, handleChange } = props;

  const entries = education.schools.map((school) => Object.entries(school)).flat();
  const inputs = entries.map(([key, value], i) => <Input key={'input-' + key + i} value={value} id={'input-' + key + '-' + (Math.ceil((i + 1) / 5) - 1)} propName={'schools.' + key} handleChange={(e) => handleChange(e, 'education')} />)
  const listItems = entries.map(([key, value], i) => <li className="education" id={'education-' + key + (Math.ceil((i + 1) / 5) - 1)} key={'education-' + key + i}>{value}</li>)
  let list = [];
  let forms = [];
  for (let i = 0; i < education.schools.length; i++) {
    forms.push(
      <form key={'form-education-' + i} className="mainpage__form" action="" onSubmit={(e) => e.preventDefault()}>
        {inputs.splice(0, 5)}
        <button id={"schools-btn-" + i} data-prop='schools' onClick={(e) => handleChange(e, 'education', null, true)}>Remove School</button>
      </form>
    )
    list.push(
      <ul key={'list-education-' + i} className="mainpage__form">
        {listItems.splice(0, 5)}
      </ul>
    )
  }

  return (
    <div className="mainpage__education-container">
      <h2>Education</h2>
      {education.editing ? forms : list}
      {education.editing && <button value="" data-prop="schools" onClick={(e) => handleChange(e, 'education', education.schools.length)}>Add School</button>}
      <Button handleClick={() => handleClick('education')} editing={education.editing} />
    </div>
  )
}