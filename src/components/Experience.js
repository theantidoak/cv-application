import { Button } from "./Button";
import { Input } from "./Input";

export const Experience = (props) => {

  const { experience, handleClick, handleChange } = props;

  const inputs = experience.jobs.map((job, i) => inputRecursion(job, i));
  const entries = experience.jobs.map((job) => Object.entries(job)).flat();
  const listItems = entries.map(([key, value], i) => <li id={'experience-' + key + i} key={'experience-' + key + i}>{value}</li>)
  const list = <ul>{listItems}</ul>

  function inputRecursion(obj, i, arr=[]) {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === "object") {
        return inputRecursion(value, i, arr)
      } else {
        return arr.push(<Input key={'input-' + key + i} value={value} id={'input-' + key + i} propName={key} handleChange={(e) => handleChange(e, 'experience')} />)
      }
    });
    return arr;
  }

  return (
    <div className="sidebar__experience-container">
      <h2>Experience</h2>
      {!experience.editing && list}
      <form className="sidebar__experience-form" action="" onSubmit={(e) => e.preventDefault()}>
        {experience.editing && inputs}
        {experience.editing && <button value="" data-prop="jobs" onClick={(e) => handleChange(e, 'experience', experience.jobs.length)}>Add Job</button>}
        <Button handleClick={() => handleClick('experience')} editing={experience.editing} />
      </form>
    </div>
  )
}