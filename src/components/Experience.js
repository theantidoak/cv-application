import { Button } from "./Button";
import { Input } from "./Input";

export const Experience = (props) => {

  const { experience, handleClick, handleChange } = props;

  const entries = experience.jobs.map((job) => Object.entries(job)).flat();
  const inputs = entries.map(([key, value], i) => <Input key={'input-' + key + i} value={value} id={'input-' + key + '-' + (Math.ceil((i + 1) / 5) - 1)} propName={'jobs.' + key} handleChange={(e) => handleChange(e, 'experience')} />)
  const listItems = entries.map(([key, value], i) => <li id={'experience-' + key + i} key={'experience-' + key + i}>{value}</li>)
  const list = <ul>{listItems}</ul>

  return (
    <div className="sidebar__experience-container">
      <h2>Experience</h2>
      {!experience.editing && list}
      <form className="sidebar__experience-form" action="" onSubmit={(e) => e.preventDefault()}>
        {experience.editing && inputs}
        {experience.editing && <button value="" data-prop="jobs.dates" onClick={(e) => handleChange(e, 'experience', experience.jobs.length)}>Add Job</button>}
        <Button handleClick={() => handleClick('experience')} editing={experience.editing} />
      </form>
    </div>
  )
}