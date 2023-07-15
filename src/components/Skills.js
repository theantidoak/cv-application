import { Button } from "./Button";
import { Input } from "./Input";

export const Skills = (props) => {

  const { skill, handleClick, handleChange } = props;
  const inputs = skill.skills.map((sk, i) => {
    return <div key={"skills-" + i}>
      <Input value={sk} id={"skills-" + i} propName='skills' handleChange={(e) => handleChange(e, 'skill')} />
      <button id={"skills-btn-" + i} data-prop='skills' onClick={(e) => handleChange(e, 'skill', null, true)}>x</button>
    </div>
  })
  const listItems = skill.skills.map((sk, i) => <li id={'skill-' + i} key={'skill-' + i}>{sk}</li>)
  const list = <ul className="sidebar__list">{listItems}</ul>

  return (
    <div className="sidebar__skills-container">
      <h2>Skills</h2>
      {!skill.editing && list}
      <form className="sidebar__skill-form" action="" onSubmit={(e) => e.preventDefault()}>
        {skill.editing && inputs}
        {skill.editing && <button value="" data-prop="skills" onClick={(e) => handleChange(e, 'skill', skill.skills.length)}>Add Skill</button>}
        <Button handleClick={() => handleClick('skill')} editing={skill.editing} />
      </form>
    </div>
  )
}