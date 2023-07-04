import { Button } from './Button';
import { Input } from './Input';
import { Description } from './Description';

export const Contact = (props) => {
  
  const { contact, handleClick, handleChange } = props;
  const entries = Object.entries(contact).filter(([key, value]) => key !== "editing");
  const inputs = entries.map(([key, value]) => <Input key={'input-' + key} id={key} handleChange={(e) => handleChange(e, 'contact')} />)
  const descriptions = entries.map(([key, value]) => <Description key={'description-' + key} id={key} propValue={value} />)

  return (
    <div className="sidebar__contact-container">
      <form className="sidebar__contact-form" action="" onSubmit={(e) => e.preventDefault()}>
        {contact.editing ? inputs : descriptions}
        <Button handleClick={() => handleClick('contact')} editing={contact.editing} />
      </form>
    </div>
  )
}