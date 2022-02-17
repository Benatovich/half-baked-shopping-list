import { buyItem } from './services/fetch-utils';

export default function ListItem({ fetchItems, listItem: {
  id, 
  name,
  quantity,
  has_been_bought 
}
}) {
  async function handleClick() {
    // buy the item (in supabase)
    await buyItem(id);
    // refetch the updated items array by calling the function passed in through props
    await fetchItems();
  }

//  () => {} is javascript for "do nothing". It's an arrow function that doesn't nothing at all.
  return (
    // on click, if it's already been bought, do nothing; o6therwise, call the handleClick function
    <div className='list-item' onClick={has_been_bought ? () => {} : handleClick} >
      {/* if it's been bought, this p tag should have the 'bought' class. Otherwise it should have the 'needed' class */}
      <p className={has_been_bought ? 'bought' : 'needed'}>
        {/* show the quantity and name here */}
        {quantity} {name}
      </p>     
    </div>
  );
}
