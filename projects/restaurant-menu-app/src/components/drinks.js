import './fooditem.css'

function Drinks (props) {
    return(
        <div className='main-food-item'>
            <div className='food-items'>
                {
                    props.dType === 'Mocktail' ? 
                    (<span className='item-padding mocktails'>{props.dType}</span>):
                    (<span className='item-padding cocktails'>{props.dType}</span>)
                }
                
                <strong>{props.dName}</strong>                
            </div>
            
            <button className='food-items'>{props.dPrice}</button>
        </div>
    );
}
export default Drinks;