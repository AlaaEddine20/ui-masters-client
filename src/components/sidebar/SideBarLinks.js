function generateLinks(id) {
  return [
    {
      id: 1,
      name: "Add new component",
      path: "/add_new",
      icon: <i className="fas fa-plus"></i>,
    },
    {
      id: 3,
      name: "Discover",
      path: "/discover",
      icon: <i className="fas fa-laptop-code"></i>,
    },
    // {
    //   id: 2,
    //   name: "My Profile",
    //   path: "/profile",
    //   icon: <i className="fas fa-user-ninja"></i>,
    // },
    {
      id: 4,
      name: "My Components",
      path: "/components/" + id,
      icon: <i className="fab fa-react"></i>,
    },
  ];
}

export default generateLinks;
