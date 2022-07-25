import {
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
    icon: <FaHome className="icon" />,
  },
  {
    id: 2,
    url: "/team",
    text: "Team",
    icon: <FaUserFriends className="icon" />,
  },
  {
    id: 3,
    url: "/projects",
    text: "Projects",
    icon: <FaFolderOpen className="icon" />,
  },
  {
    id: 4,
    url: "/calendar",
    text: "Calendar",
    icon: <FaCalendarAlt className="icon" />,
  },
  {
    id: 5,
    url: "/documents",
    text: "Documents",
    icon: <FaWpforms className="icon" />,
  },
];
