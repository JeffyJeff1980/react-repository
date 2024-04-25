import "./App.css";
import UserList from "./components/UserList";
import { UserRepositoryProvider } from "./context/UserRepositoryProvider";

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
