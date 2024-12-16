import { Route, Routes } from "react-router-dom";
import SearchCategory from "../component/SearchCategory";
import HomeLogin from "../component/HomeLogin";
import treeData from "../data/treeData";

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLogin />} />
      <Route path="/menu" element={<SearchCategory categories={treeData} />} />
    </Routes>
  );
};

export default UserRouter;
