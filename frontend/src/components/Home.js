import React, {useEffect, useState} from 'react';
import Datatable from "../datatable";

function Home() {
    useEffect( () => {
        fetchItems();
    }, []);

    function search(rows) {
        return rows.filter((row) => row.title.toLowerCase().indexOf(q) > -1)
    }

    const [items, setItems] = useState([]);
    const [q, setQ] = useState("");

    const fetchItems = async () => {
        const data = await fetch('/tweets');
        const items = await data.json();
        setItems(items);
    };

    return(            
            <div>
                <div>
 <input type='text' value={q} onChange={(e) => setQ(e.target.value)}
     />
                </div>
                     <div>
                   <Datatable items={search(items)} />
                   </div>   
                   </div>
    );
}

export default Home;
