//This cuts the original Content list creation into here,
//Makes it easier to read and understand
//Parent Component is Content js, so need to send items, handleCheck, and handleDelete to this component
import LineItem from "./LineItem";

const ItemList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
        {items.map((item) => (//This starts creation of the line item
            //This maps each item in the array into a list object
            //the id part of an item is mapped to the key
            //the checked part of an item is mapped to the checkbox's checked value
            //and the item (text) part of the item is mapped to the label
            //map lets you place each item's values to specific parts of the JSX
            <LineItem 
                key={item.id}//must also supply the key else it will not work
                //we do not call it in the destructuring, will work on its own as-is
                //So, don't need to reference it in LineItem and those individual line components
                item={item}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                
            />
        ))}
    </ul>
  )
}
export default ItemList;