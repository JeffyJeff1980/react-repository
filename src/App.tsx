import "./App.css";
import UserList from "./components/UserList";
import { UserRepositoryProvider } from "./context/UserRepositoryContext";

function App() {
  return (
    <div className="App">
      <UserRepositoryProvider>
        <UserList />
      </UserRepositoryProvider>
    </div>
  );
}

export default App;
