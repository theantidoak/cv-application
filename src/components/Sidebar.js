import { Image } from './Image';
import { Contact } from './Contact';
import { Skills } from './Skills';

export const Sidebar = (props) => {

  const { states, handleClick, handleChange } = props;

  return (
    <section className="sidebar">
      <Image image={states.image} handleClick={handleClick} name={states.contact.name} />
      <Contact contact={states.contact} handleClick={handleClick} handleChange={handleChange} />
      <Skills skill={states.skill} handleClick={handleClick} handleChange={handleChange} />
    </section>
  )

}