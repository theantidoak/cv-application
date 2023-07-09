import { Image } from './Image';
import { Contact } from './Contact';
import { Skills } from './Skills';
import { Languages } from './Languages';

export const Sidebar = (props) => {

  const { states, handleClick, handleChange } = props;

  return (
    <section className="sidebar">
      <Image image={states.image} handleClick={handleClick} name={states.contact.name} />
      <Contact contact={states.contact} handleClick={handleClick} handleChange={handleChange} />
      <Skills skill={states.skill} handleClick={handleClick} handleChange={handleChange} />
      <Languages language={states.language} handleClick={handleClick} handleChange={handleChange} />
    </section>
  )

}