import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../Helpers/context";

export const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <>
      <FaBars id="bars" onClick={() => openSidebar()}></FaBars>

      <button type="button" id="openModal" onClick={() => openModal()}>
        Open Modal
      </button>
    </>
  );
};
