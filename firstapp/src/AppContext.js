
import { AuthContextProvider, useAuth } from './UseContext'
function Header() {
  const authUser = useAuth()
  return (
    <div className="header">
      <h1>Welcome to {authUser.name}</h1>
    </div>
  );
}

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Header />
      </div>
    </AuthContextProvider>
  );
}

export default App;