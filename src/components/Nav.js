import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { listPageReLoading, focusNav } from "../atom/Atoms";
import styles from "./Nav.module.css";
import navList from "../atom/NavList";

function Nav() {
  let last_known_scroll_position = 0;
  let ticking = false;
  const [changing, setChanging] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const pageReLoading = useSetRecoilState(listPageReLoading);
  const [focusPath, setFocusPath] = useRecoilState(focusNav);

  const doSomething = (scroll_pos) => {
    if (scroll_pos >= 10) {
      setChanging(true);
      setScrolling(true);
    } else {
      setChanging(false);
      setScrolling(false);
    }
  };

  window.addEventListener("scroll", function (e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        doSomething(last_known_scroll_position);
        ticking = false;
      });
      ticking = true;
    }
  });

  const onMouseOverOut = () => {
    if (scrolling) return;
    setChanging((current) => !current);
  };
  const optionOnClick = () => {
    pageReLoading(true);
  };
  return (
    <div>
      <nav className={styles.container}>
        <div className={styles.title}>
          <Link to="/" onClick={() => setFocusPath("")}>
            <img
              src={`bitvelo_logo.png`}
              alt=""
              height="27px"
              onClick={() => setFocusPath("")}
            ></img>
          </Link>
        </div>
        <ul className={styles.option__list}>
          {navList.map(({ title, path }) => {
            return (
              <li>
                <Link
                  to={`/page/${path}`}
                  onClick={focusPath !== path ? optionOnClick : null}
                  style={
                    focusPath !== path
                      ? null
                      : {
                          color: "#dcb0ff",
                        }
                  }
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={styles.null}></div>
    </div>
  );
}

export default Nav;
