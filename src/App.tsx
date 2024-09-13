import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

function App() {
  console.log("render")
  const [monsters, setMonsters] = useState<any[]>([]);
  const [filterString, setFilterString] = useState<string>("");
  const [filteredMonsters, setFilteredMonsters] = useState<any[]>(monsters);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster: any) =>
      monster.name.toLowerCase().includes(filterString)
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [filterString, monsters]);

  function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }

  function searchMonster($event: any) {
    setFilterString($event.target.value.toLowerCase());
  }

  return (
    <div className="App">
      <SearchBox
        onChangeHandler={searchMonster}
        styling="search-box"
        placeholder="Search Monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
