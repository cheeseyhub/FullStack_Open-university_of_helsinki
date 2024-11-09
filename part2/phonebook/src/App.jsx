import { useState } from "react";

function Filter({ filterName, handleFilter }) {
  return (
    <>
      <p>
        filter shown with{" "}
        <input type="text" value={filterName} onChange={handleFilter} />
      </p>
    </>
  );
}

function Form({
  addPerson,
  handlePersonAddition,
  handlePhoneAddition,
  newName,
  newPhoneNumber,
}) {
  return (
    <>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handlePersonAddition} />
        </div>
        <div>
          Number:{" "}
          <input value={newPhoneNumber} onChange={handlePhoneAddition} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
}
function NameAndNumberDisplay({ newName, newPhoneNumber, personsToShow }) {
  return (
    <>
      {personsToShow.map((person) => {
        return (
          <p key={person.id}>
            {person.name}
            &nbsp;
            {person.phoneNumber}
          </p>
        );
      })}

      <p>
        {newName} {newPhoneNumber}
      </p>
    </>
  );
}

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Arto Hellas", phoneNumber: "040-123456" },
  ]);

  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [showAll, setShowAll] = useState(true);

  const [filterName, setfilterName] = useState("");

  const personsToShow = showAll
    ? persons
    : persons.filter((person) => person.important === true);

  function addPerson(event) {
    event.preventDefault();
    const personObject = {
      id: persons.length + 1,
      name: newName,
      phoneNumber: newPhoneNumber,
    };

    const sameNameEntry = persons.some((person) => person.name === newName);

    if (sameNameEntry) {
      alert(`${newName} is  already in the phonebook.`);
      setNewName("");
      return;
    }
    setPersons([...persons, personObject]);
    setNewName("");
    setNewPhoneNumber("");
  }

  function handlePersonAddition(event) {
    setNewName(event.target.value);
  }
  function handlePhoneAddition(event) {
    setNewPhoneNumber(event.target.value);
  }

  function handleFilter(event) {
    event.target.value === "" ? setShowAll(true) : setShowAll(false);

    setfilterName(event.target.value);

    let name = new RegExp(`^${event.target.value}`, "i");
    persons.map((person) => {
      if (name.test(person.name)) {
        person.important = true;
      } else {
        person.important = false;
      }
    });
  }
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterName={filterName} handleFilter={handleFilter} />

      <h2>Add a New</h2>

      <Form
        addPerson={addPerson}
        handlePhoneAddition={handlePhoneAddition}
        handlePersonAddition={handlePersonAddition}
        newName={newName}
        newPhoneNumber={newPhoneNumber}
      />

      <h2>Numbers</h2>

      <NameAndNumberDisplay
        newName={newName}
        newPhoneNumber={newPhoneNumber}
        personsToShow={personsToShow}
      />
    </div>
  );
};

export default App;
