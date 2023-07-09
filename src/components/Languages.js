import { Button } from "./Button";
import { Input } from "./Input";

export const Languages = (props) => {

  const { language, handleClick, handleChange } = props;
  const inputs = language.languages.map((la, i) => <Input value={la} key={"languages-" + i} id={"languages-" + i} propName='languages' handleChange={(e) => handleChange(e, 'language')} />)
  const listItems = language.languages.map((la, i) => <li id={'language-' + i} key={'language-' + i}>{la}</li>)
  const list = <ul>{listItems}</ul>

  return (
    <div className="sidebar__languages-container">
      <h2>Languages</h2>
      {language.editing && list}
      <form className="sidebar__language-form" action="" onSubmit={(e) => e.preventDefault()}>
        {language.editing && inputs}
        {language.editing ? <button value="" data-prop="languages" onClick={(e) => handleChange(e, 'language', language.languages.length)}>Add language</button> : ''}
        <Button handleClick={() => handleClick('language')} editing={language.editing} />
      </form>
    </div>
  )
}