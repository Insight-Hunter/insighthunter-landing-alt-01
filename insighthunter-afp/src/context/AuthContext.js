import * as React from "react"

const AuthContext = React.createContext()

export function AuthProvider({ children }) {
  const [role, setRole] = React.useState("treasurer") // default role

  const loginAs = (newRole) => setRole(newRole)

  return (
    <AuthContext.Provider value={{ role, loginAs }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return React.useContext(AuthContext)
}
