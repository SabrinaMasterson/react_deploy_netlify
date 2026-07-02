//this is a reusable component to create every new line item
import { FaTrashAlt } from 'react-icons/fa';//moved from Content.js as is used here instead
const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className="item">
        <input
            type="checkbox"
            checked={item.checked}
            onChange={() => {handleCheck(item.id)}}
        />
        <label 
            onDoubleClick={() => {handleCheck(item.id)}}
            style={(item.checked) ? {textDecoration: "line-through"} : null}
        >{item.item}
        </label>
        <FaTrashAlt 
            role="button" 
            tabIndex="0"
            onClick={() => handleDelete(item.id)}
            aria-label={`Delete ${item.item}`}
        />
    </li>
  )
}
export default LineItem;