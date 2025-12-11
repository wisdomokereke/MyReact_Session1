function ListGroup(){

    let items = [
        { 
            city: 'Lagos', id: 0 
        },
        { 
            city: 'Abuja', id: 1 
        },
        { 
            city: 'Kano', id: 2 
        },
        { 
            city: 'Ibadan', id: 3 
        },
        {
            city: 'Enugu', id: 4
        },
        {
            city: 'Anambra', id: 5
        }
    ]

    // items = [
    //     {city: 'lagos', id: 0}
    // ]; // Simulating no items scenario

    
    // if (items.length === 0){
    //     return <p>No items found</p>
    // }

    const products = [
        'Laptop',
        'Phone',
        'Tablet',
        'Monitor'
    ]
  
    //  jsx conditional rendering using && operator


    return (
        <>
            <h1>List Group Component</h1>
            {/* conditional rendering : ctrl + backslash */}
            
            {items.length === 0 && <p>No items found</p> }
            {items.length > 0 && <p>Showing {items.length} items</p> }
            <ol className='list-group'>
                {items.map(item => (<li key={item.id}>My city is {item.city}</li>))}
            </ol>
            <ul>
                {products.map((product, index) => (<li key={index}>{product}</li>))}
            </ul>
        </>
    )
}

export default ListGroup;