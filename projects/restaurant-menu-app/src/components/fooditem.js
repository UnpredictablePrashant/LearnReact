import './fooditem.css'

function Fooditems (props){
    const purchase = () => {
        console.log("Added to the cart")
    }
    return (
        <div className='main-food-item'>
            <div className='food-items'>
                {
                    props.dishType === 'Veg' ? 
                    (<span className='item-padding veg'>{props.dishType}</span>):
                    (<span className='item-padding non-veg'>{props.dishType}</span>)
                }
                <strong>{props.dishName}</strong>                
            </div>            
            <button className='food-items' onClick={purchase}>{props.dishPrice}</button>
        </div>
    );
}
export default Fooditems;