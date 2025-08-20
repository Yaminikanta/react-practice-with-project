import "./App.css";

const name = "bapun";

function MyButton() {
  return <button>Submit Button</button>;
}

const Header = () => {
  return (
    <div>
      <h1>Hello Welcome to Shopify</h1>

      <input placeholder="Search" />

      <ul>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
      </ul>
      
    </div>
  );
};

function App() {
  return (
    <div>
      <name />
      <Header />
      <MyButton />
    </div>
  );
}

export default App;

