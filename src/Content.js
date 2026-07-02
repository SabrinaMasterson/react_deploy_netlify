import ItemList from './ItemList';
const Content = ({items, handleCheck, handleDelete}) => {
  //Because we are using setItems only in the handling functions, don't need to give it to Content
  return (
    <main>
      {items.length ? (//can abstract the creation of the item list and each line item (ul and li) into seperate, reusable components
      //this is a lot more organized now
        <ItemList 
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{marginTop: "2rem" }}>Your list is empty.</p>
      )}
    </main>
  )
}
export default Content;