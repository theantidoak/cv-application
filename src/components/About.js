import { Input } from "./Input";
import { Button } from "./Button";

export const About = (props) => {

  const { about, handleClick, handleChange } = props;
  const entries = Object.entries(about).filter(([key, value]) => key !== "editing");
  const inputs = entries.map(([key, value]) => <Input key={'input-' + key} id={key} propName={key} handleChange={(e) => handleChange(e, 'about')} />)


  return (
    <div>
      {about.editing && (
          <div>
            <h2>{about.name}</h2>
            <h3>{about.position}</h3>
            <p>{about.description}</p>
          </div>
        )}
      <form className="sidebar__about-form" action="" onSubmit={(e) => e.preventDefault()}>
        {about.editing && inputs}
        <Button handleClick={() => handleClick('about')} editing={about.editing} />
      </form>
    </div>
  )
}