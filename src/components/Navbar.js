import Logo from "../assets/images/todo_logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="todo-logo">
        <a href="/">
          <img src={Logo} alt="" />
        </a>
      </div>
      <div className="navbar-list">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Sign In</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
