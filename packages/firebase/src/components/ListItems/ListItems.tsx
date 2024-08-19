import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { DeleteItem } from '..';
import db from '../../utils/firestore';

const ListItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'items'));
      setItems(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h2>List of Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <p>{item.name}</p>
            <DeleteItem id={item.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
