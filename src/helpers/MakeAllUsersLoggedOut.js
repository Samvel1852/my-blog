export default function MakeAllUsersLoggedOut() {
  let allUsers = JSON.parse(localStorage.getItem("users"));
  allUsers = allUsers.map((user) => {
    return Object.assign(user, { isLogged: false });
  });

  localStorage.setItem("users", JSON.stringify(allUsers));
}
