import Popup from 'reactjs-popup';
import "reactjs-popup/dist/index.css";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { FaScroll } from "react-icons/fa";
import PrimaryButton from './PrimaryButton';

const GameChoicePopup = () => {
  return (
    <Popup
      className="p-10 pb-20"
      trigger={<button>Start game</button>}
      position="right center"
      modal
    >
      {(close) => (
        <div className="modal p-10 bg-[#054e82]">
          <div className="w-full flex justify-end bg-[#054e82]">
            <AiOutlineCloseSquare size={30} onClick={close} className="cursor-pointer" />
          </div>
          <div className="w-full 5xl font-bold text-center uppercase mb-5 bg-[#054e82]">Instructions</div>
          <div className="bg-[#054e82]">
            <p>First person to reach 5</p>
            <p>Winner in 5 minutes</p>
          </div>
          <div>
            {/* <button
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close modal
            </button> */}
          </div>
        </div>
      )}
    </Popup>
  );
}

export default GameChoicePopup