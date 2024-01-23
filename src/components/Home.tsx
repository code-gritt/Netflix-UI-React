import "./Home.scss";
import Navbar from "./Navbar";
import Featured from "./featured/Featured";
import List from "./list/List";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type={undefined} />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
