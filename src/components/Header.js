import "./styles/header.css";

const Header = (props) => {
  return (
    <div className="banner">
      <div className="_header">
        <div className="_logo">
          <h2>Mam Caterer</h2>
        </div>
        <div className="_links">
          <div className="_link">Home</div>
          <div
            className="_link"
            onClick={(e) => props.about.current.scrollIntoView()}
          >
            About
          </div>
          <div
            className="_link"
            onClick={(e) => props.contact.current.scrollIntoView()}
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
