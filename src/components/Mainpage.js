import { About } from "./About";
import { Education } from "./Education";
import { Experience } from "./Experience";

export const Mainpage = (props) => {

  const { states, handleClick, handleChange } = props;

  return (
    <section className="mainpage">
      <About about={ states.about } handleClick={handleClick} handleChange={handleChange} />
      <Education education={ states.education } handleClick={handleClick} handleChange={handleChange} />
      <Experience experience={ states.experience } handleClick={handleClick} handleChange={handleChange} />
    </section>
  )
}