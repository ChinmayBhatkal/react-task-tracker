import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

function Header({ title, onAddClick, showAdd }) {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          text={showAdd ? "Add" : "Close"}
          backgroundColor={showAdd ? "green" : "red"}
          onClick={onAddClick}
        />
      )}
    </header>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
