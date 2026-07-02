import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppingList")) || []);
  const [newItem, setNewItem] = useState("");//state that is for a new item
  const [search, setSearch] = useState("");//state that is for the search form
  

  useEffect(() => {//runs at every render unless a dependency is given
    localStorage.setItem('shoppingList', JSON.stringify(items));
    //this will save the items to the local storage,
        //meaning that it will keep data from being lost from a reload or when a session is closed (when you close the browser)
        //so items are retained
        //has its own sets and gets with setItem and getItem
  }, [items]);

  const addItem = (item) => {
    const id = items.length ? items[items.length-1].id + 1 : 1;//increment id or set first id to 1
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
     setItems(listItems);//this will overwrite the previous array and set the state to the new array
      //we are changing the state now (listItems);
  }

  const handleCheck = (id) => {
      const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item);
      //map makes a new array for each item in items
      //uses ternary statemnt to check for matching id for each item in the mapped array
      //if matches, makes a new object with the checked value swapped,
        //since Boolean, the ! means the opposite of its current state, will either be true or false
      //if not the matched it, returns the unchanged item object to the array
       setItems(listItems);//this will overwrite the previous array and set the state to the new array
      //we are changing the state now (listItems);
    }
  
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    //filter will create a new array with only items without the id from the function
      //this new array will be used to set the state, effectively deleting that item
      //without changing the original array
     setItems(listItems);//this will overwrite the previous array and set the state to the new array
      //we are changing the state now (listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();//don't refresh the page
    //console.log("Submitted");
    if(!newItem){
      return;//don't do anything if not given a new item/any text in input
    }
    addItem(newItem);
    setNewItem("");//clear the input
  }
  
  return (
    <div className="App">
     <Header 
      title="Grocery List"
     />
     <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
     />
     <SearchItem
      search={search}
      setSearch={setSearch}
     />
     <Content
      items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}//filters based on the search state, lowercase only for matching
      handleCheck={handleCheck}
      handleDelete={handleDelete}
     />
     <Footer
      length={items.length}
     />
    </div>
  );
}

export default App;
