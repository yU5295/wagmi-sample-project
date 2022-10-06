import type { NextPage } from "next";
import Collections from "../components/Collections";

const Home: NextPage = () => {
  return (
    <div className="container px-4 md:px-6 mx-auto py-4">
      <Collections />
    </div>
  );
};

export default Home;
