import useId from "../hooks/UseId";
import HomePage from "../pages/Home";
import Properties from "../pages/Properties";
export const navbar = [
  {
    id: useId,
    element: <HomePage />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Properties />,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <h1>Sign in</h1>,
    title: "signin",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <h1>Sign up</h1>,
    title: "Sign un",
    path: "/signup",
    private: false,
    hidden: true,
  },
];
