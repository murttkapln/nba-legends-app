import logo from "../assets/nba-logo.png";

const Header = ({ setSearch }) => {
  return (
    <nav className="text-center mt-4">
      <img src={logo} alt="nba_logo" style={{ width: "200px" }} />
      <h2 className="display-6 fw-bold">NBA Legends</h2>
      <input
        // lifting stateUp
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="Search Player..."
        className="form-control w-50 mx-auto"
        name="name"
        id="name"
      />
    </nav>
  );
};

export default Header;
