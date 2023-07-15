import { Button } from "./Button";
import { Input } from "./Input";

export const Experience = (props) => {

  const { experience, handleClick, handleChange } = props;

  const entries = experience.jobs.map((job) => Object.entries(job)).flat();
  const inputs = entries.map(([key, value], i) => <Input key={'jobs-' + key + i} value={value} id={'jobs-' + key + '-' + (Math.ceil((i + 1) / 5) - 1)} propName={'jobs.' + key} handleChange={(e) => handleChange(e, 'experience')} />)
  const listItems = entries.map(([key, value], i) => <li id={'experience-' + key + i} key={'experience-' + key + i}>{value}</li>)
  const list = <ul>{listItems}</ul>
  let forms = [];

  for (let i = 0; i < inputs.length / 5; i++) {
    forms.push(
      <form key={'form-experience-' + i} className="sidebar__experience-form" action="" onSubmit={(e) => e.preventDefault()}>
        {inputs.slice(i, i + 5)}
        <button id={"jobs-btn-" + i} data-prop='jobs' onClick={(e) => handleChange(e, 'experience', null, true)}>Remove Job</button>
      </form>
    )
  }

  return (
    <div className="sidebar__experience-container">
      <h2>Experience</h2>
      {experience.editing ? forms : list} 
      {experience.editing && <button value="" data-prop="jobs" onClick={(e) => handleChange(e, 'experience', experience.jobs.length)}>Add Job</button>}
      <Button handleClick={() => handleClick('experience')} editing={experience.editing} />
    </div>
  )
}