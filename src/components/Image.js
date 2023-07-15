import { Button } from './Button';

export const Image = (props) => {

  const { image, handleClick } = props;

  return (
    <div className="sidebar__profile-img-container">
      <img className="sidebar__profile-img" src="" alt={'name'} />
      <Button handleClick={() => handleClick('image')} editing={image.editing} />
    </div>
  )

}