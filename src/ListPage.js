import { useState, useEffect } from 'react';
import { deleteAllItems, getListItems } from './services/fetch-utils';
import ListItemForm from './ListItemForm';
import ListItem from './ListItem';

export default function ListPage() {
  const [listItems, setShoppingList] = useState([]);

  // on load, call the fetchItems function (remember: useEffect)
  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    // fetch the list items and inject them into state
    const response = await getListItems();
    setShoppingList(response);
  }

  async function handleDeleteClick() {
    // delete all items
    await deleteAllItems();
    // then call your fetchItems function to fetch and re-display
    await fetchItems();
  }

  return (
    <div className="list-page">
      <button onClick={handleDeleteClick}>New List</button>
      {/* pass fetchItems to the ListItemForm component */}
      <ListItemForm fetchItems={fetchItems} />
      <div className='item-list'>
        {/* map through all the list items and render them here */}
        {listItems.map(listItem =>
          <ListItem
            key={listItem.id}
            fetchItems={fetchItems}
            listItem={listItem} />
        )}
      </div>

    </div>
  );
}
