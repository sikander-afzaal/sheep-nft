import React, { useRef, useState } from "react";
import styles from "./Accordion.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import useMediaQuery from "hooks/useMediaQuery";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const bodyRef = useRef(null);
  const isBellow760px = useMediaQuery("(max-width : 760px)");

  const handler = () => {
    if (bodyRef.current.clientHeight === 0) {
      setIsOpen(true);
      bodyRef.current.style.height = bodyRef.current.scrollHeight + "px";
    } else {
      setIsOpen(false);
      bodyRef.current.style.height = 0;
    }
  };

  return (
    <div className={styles.accordion}>
      <button
        className={`${styles.accordionButton} ${
          isOpen ? styles.active : ""
        } pointer`}
        onClick={handler}
      >
        <div className={styles.textWrapper}>
          <p className="fs-28px black weight-3">{title}</p>
        </div>

        <span className="flex">
          <AiOutlinePlus size={isBellow760px ? 26 : 40} />
        </span>
      </button>

      <div className={styles.accordionBody} ref={bodyRef}>
        <div className={styles.accordionContent}>{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
