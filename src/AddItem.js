import {FaPlus} from 'react-icons/fa';
import {useRef} from "react";

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
    const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input 
            autoFocus
            ref={inputRef}
            id="addItem"
            type="text"
            placeholder="Add Item"
            required
            value={newItem}//item set to state
            onChange={(e) => setNewItem(e.target.value)}//on change, set the state to the item
            //provides one source of truth to the input and that is the state
        />
        <button
            type="submit"
            aria-label="Add Item"
            onClick={() => inputRef.current.focus()}//go back to current focus, the input above
        >
            <FaPlus/>
        </button>
    </form>
  )
}
export default AddItem