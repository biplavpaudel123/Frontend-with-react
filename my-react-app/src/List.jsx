import PropTypes from 'prop-types';
import Button from './Button.jsx'

function List(props) {
    const sortedItems = [...props.array].sort((item1, item2) => item1.calories - item2.calories)
    const itemsList = sortedItems.map((item) => <li key={item.id}>{item.name}:{item.calories}</li>)
    console.log("Original array:", props.array); //logs two times, react nature for checking the state
    return (
        <ul>
            <h1>{props.category}</h1>
            {itemsList}
        </ul>
     
     
    );
}

List.PropTypes = { //Setting properties types for debugging purposes, raises a warning
    categor: PropTypes.string,
    array: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        calories: PropTypes.number,
        name: PropTypes.string,
    })
    )
}


export default List;