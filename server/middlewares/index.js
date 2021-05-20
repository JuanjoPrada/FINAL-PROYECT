module.exports = {
  isLoggedIn: (req, res, next) => {
    if (req.session.currentUser) {
      next();
    } else {
      res.json({ message: "No se ha iniciado la sesión" });
    }
  },
  checkRoles:
    (...allowedRoles) =>
    (req, res, next) => {
      // REST PARAMETERS
      if (allowedRoles.includes(req.session.currentUser.role)) {
        next();
      } else {
        res.json({ message: "Usuario no autorizado" });
      }
    },
};
