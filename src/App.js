import Navbar from "./Navbar";




function App() {
  const siteName = "This is my Second React APP"
  return (
    <div className="App">
      <Navbar />
      <h1>{siteName}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aspernatur quae nesciunt distinctio cupiditate facilis voluptatibus expedita hic non omnis architecto, velit fugiat nulla odit tenetur ut! Magnam est provident animi natus at praesentium, corporis, ullam molestias dolores laudantium nisi ratione sequi quibusdam, eligendi neque!
      </p>
    </div>
  );
}

export default App;
