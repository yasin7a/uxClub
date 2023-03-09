import { ReactNode } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  selectModal,
  changeModal,
} from "../../redux/features/modalState/modalStateSlice";
import CrossNoBorder from "../icons/CrossNoBorder";

const Madal = ({
  children,
  id,
}: {
  MHeader?: string;
  children: ReactNode;
  id: string | number;
}) => {
  const modalId = useSelector(selectModal);
  const dispatch = useDispatch();
  return (
    <>
      {modalId === id && (
        <Modal
          isOpen={modalId === id ? true : false}
          ariaHideApp={false}
          className={` bg-black rounded-[10px]  p-2 w-[600px] h-[600px] z-50  focus-visible:outline-none mx-16`}
          onRequestClose={() => dispatch(changeModal(false))}
          style={{
            overlay: {
              position: "fixed",
              inset: 0,
              display: "flex",
              alignItems: "center",
              zIndex: "999",
              justifyContent: "center",
              backgroundColor: "rgba(10,10,10,0.68)",
              backdropFilter: "blur(3px)",
            },
          }}
        >
          <div>
            <button
              className={` text-[#f2f2f2] w-7 sm:w-9 cursor-pointer bg-hover bg-gray-900/10 dark:bg-zinc-900/40 rounded-full  absolute  top-[5%]
                left-[95%] -translate-x-1/2 -translate-y-1/2 p-1.5`}
              onClick={() => dispatch(changeModal(false))}
            >
              <CrossNoBorder />
            </button>
            {children}
          </div>
        </Modal>
      )}
    </>
  );
};

export default Madal;
