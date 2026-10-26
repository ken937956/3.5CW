function Navbar({ user, notifications = 0 }) {
  return (
    <nav className="navbar">
      <span className="logo">MyApp</span>

      <div className="navbar-actions">
        {user ? (
          <>
            <span>Hi, {user.name}</span>
            <button type="button">Log out</button>
          </>
        ) : (
          <>
            <button type="button">Log in</button>
            <button type="button" className="primary-button">Sign up</button>
          </>
        )}

        {user && user.role === 'admin' && (
          <a href="#admin">Admin dashboard</a>
        )}

        {notifications > 0 && (
          <span className="notification-badge" aria-label={`${notifications} notifications`}>
            🔔 {notifications > 9 ? '9+' : notifications}
          </span>
        )}
      </div>
    </nav>
  )
}

export default Navbar
