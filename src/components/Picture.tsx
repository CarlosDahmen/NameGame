import classNames from "classnames"

interface IProps {
  id: string;
  pictureURL: string;
  selector: (id: string) => void;
  renderOverlay: boolean;
  correct: boolean;
  incorrect: boolean;
}

const Picture: React.FunctionComponent<IProps> = ({ id, pictureURL, selector, renderOverlay, correct, incorrect}) => {

  const overlayClasses = classNames({
    overlay: renderOverlay,
    correct: correct,
    incorrect: incorrect
    })
  return (
    <div onClick={() => selector(id)}>
      <img className="picture" src={pictureURL} alt="playerPicture" />
      <div className={overlayClasses}>
      </div>
    </div>
  )
}

export default Picture
