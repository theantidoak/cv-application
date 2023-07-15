import { Button } from "./Button";
import { Input } from "./Input";

export const Experience = (props) => {

  const { experience, handleClick, handleChange } = props;

  const entries = experience.jobs.map((job) => Object.entries(job)).flat();
  const inputs = entries.map(([key, value], i) => <Input key={'jobs-' + key + i} value={value} id={'jobs-' + key + '-' + (Math.ceil((i + 1) / 5) - 1)} propName={'jobs.' + key} handleChange={(e) => handleChange(e, 'experience')} />)
  const listItems = entries.map(([key, value], i) => <li className="experience" id={'experience-' + key + i} key={'experience-' + key + i}>{value}</li>)
  let forms = [];
  let list = [];

  for (let i = 0; i < experience.jobs.length; i++) {
    forms.push(
      <form key={'form-experience-' + i} className="sidebar__experience-form" action="" onSubmit={(e) => e.preventDefault()}>
        {inputs.splice(0, 5)}
        <button id={"jobs-btn-" + i} data-prop='jobs' onClick={(e) => handleChange(e, 'experience', null, true)}>Remove Job</button>
      </form>
    )

    list.push(
      <ul key={'list-experience-' + i} className="mainpage__form">
        {listItems.splice(0, 5)}
      </ul>
    )
  }

  return (
    <div className="sidebar__experience-container">
      <h2>Work Experience</h2>
      {experience.editing ? forms : list} 
      {experience.editing && <button value="" data-prop="jobs" onClick={(e) => handleChange(e, 'experience', experience.jobs.length)}>Add Job</button>}
      <Button handleClick={() => handleClick('experience')} editing={experience.editing} />
    </div>
  )
}