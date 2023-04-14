import '../App.css';
import Fooditems from './fooditem';
import Drinks from './drinks';
import Orderform from './orderform';

function Menu() {
  const data = [
    {
      dishType: 'Veg',
      dishName: 'Panner Tikka',
      dishPrice: 'INR 200'
    },
    {
      dishType: 'Veg',
      dishName: 'Panner Tikka Masala',
      dishPrice: 'INR 220'
    },
    {
      dishType: 'Non-veg',
      dishName: 'Chicken Curry',
      dishPrice: 'INR 300'
    },
    {
      dishType:'Veg',
      dishName: 'Panner Bhurji',
      dishPrice: 'INR 180'
    }

  ]

  const drinkData = [
    {
      dType:'Mocktail',
      dName: 'Virgin Mojito',
      dPrice: 'INR 100'
    },
    {
      dType:'Mocktail',
      dName: 'Lemonade',
      dPrice: 'INR 80'
    },
    {
      dType:'Cocktail',
      dName: 'LIIT',
      dPrice: 'INR 150'
    }

  ]

  return (
    <div>
      <h2 className='App'>Prashant's Kitchen</h2>
      <h3 className='App'>Main Course</h3>
      <Fooditems dishType={data[0].dishType} dishName={data[0].dishName} dishPrice={data[0].dishPrice}></Fooditems>
      <Fooditems dishType={data[1].dishType} dishName={data[1].dishName} dishPrice={data[1].dishPrice}></Fooditems>
      <Fooditems dishType={data[2].dishType} dishName={data[2].dishName} dishPrice={data[2].dishPrice}></Fooditems>
      <Fooditems dishType={data[3].dishType} dishName={data[3].dishName} dishPrice={data[3].dishPrice}></Fooditems>
      <h3 className='App'>Drinks</h3>
      {drinkData.map((item) => <Drinks dType={item.dType} dName={item.dName} dPrice={item.dPrice}/>)}

      <h3 className='App'>Customer Form</h3>
      <Orderform></Orderform>

    </div>
  );
}

export default Menu;
