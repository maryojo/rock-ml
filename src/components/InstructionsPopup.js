import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { AiOutlineCloseSquare } from "react-icons/ai";

const InstructionsPopup = () => {
  return (
    <Popup
      className="p-10 pb-20"
      trigger={<button> Instructions</button>}
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
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
            nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
            quibusdam voluptates delectus doloremque, explicabo tempore dicta
            adipisci fugit amet dignissimos?
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus,
            voluptas rem alias. Vitae?
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
};

export default InstructionsPopup;
