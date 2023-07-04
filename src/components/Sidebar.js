import { Image } from './Image';
import { Contact } from './Contact';

export const Sidebar = (props) => {

  const { states, handleClick, handleChange } = props;

  return (
    <section className="sidebar">
      <Image image={states.image} handleClick={handleClick} name={states.contact.name} />
      <Contact contact={states.contact} handleClick={handleClick} handleChange={handleChange} />
    </section>
  )

}