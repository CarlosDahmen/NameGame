import classNames from "classnames"


const Picture = ({ id, picture, selector, renderOverlay, correct, incorrect}) => {

  const overlayClasses = classNames({
    overlay: renderOverlay,
    correct: correct,
    incorrect: incorrect
    })
  return (
    <div onClick={() => selector(id)}>
      <img className="picture" src={picture} alt="playerPicture" />
      <div className={overlayClasses}>
      </div>
    </div>
  )
}

export default Picture
