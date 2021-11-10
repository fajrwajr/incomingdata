import React from 'react';


function Datatable({ items }) {

    return(            
        <div>
            {
            items.map(item => (
                <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={item.source} alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">{item.updatedAt}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
            ))
            }
        </div>
    )
} 
export default Datatable