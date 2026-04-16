import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

const RestaurantCard = ({ resData }) => {
  console.log(resData)
  const { name, cuisines, avgRating, costForTwo } = resData.data
  return (
    <div className='rest-card' style={{ backgroundColor: 'antiquewhite' }}>
      <img
        alt='res-logo'
        className='res-logo'
        src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/4b467f29-b089-4085-966f-64ed088004e2_1174555.jpg'
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  )
}

const resData = [
  {
    data: {
      id: '445812',
      name: 'Biryani By Kilo',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/3b8c81b2-c2b0-462e-bea7-c90ff3773d09_446812.JPG',
      locality: 'VARDHMAN PREMIUM MALL',
      areaName: 'Rohini',
      costForTwo: '₹700 for two',
      cuisines: [
        'Biryani',
        'Hyderabadi',
        'North Indian',
        'Kebabs',
        'Mughlai',
        'Desserts'
      ],
      avgRating: 4.2,
      avgRatingString: '4.2',
      totalRatingsString: '4.8K+',
      deliveryTime: '25-30 mins',
      isOpen: true,
      discount: '70% OFF',
      discountAmount: 'UPTO ₹130'
    }
  },
   {
    data: {
      id: '446812',
      name: 'Biryani By Kilo',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/3b8c81b2-c2b0-462e-bea7-c90ff3773d09_446812.JPG',
      locality: 'VARDHMAN PREMIUM MALL',
      areaName: 'Rohini',
      costForTwo: '₹700 for two',
      cuisines: [
        'Biryani',
        'Hyderabadi',
        'North Indian',
        'Kebabs',
        'Mughlai',
        'Desserts'
      ],
      avgRating: 4.2,
      avgRatingString: '4.2',
      totalRatingsString: '4.8K+',
      deliveryTime: '25-30 mins',
      isOpen: true,
      discount: '70% OFF',
      discountAmount: 'UPTO ₹130'
    }
  }, {
    data: {
      id: '447812',
      name: 'Biryani By Kilo',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/3b8c81b2-c2b0-462e-bea7-c90ff3773d09_446812.JPG',
      locality: 'VARDHMAN PREMIUM MALL',
      areaName: 'Rohini',
      costForTwo: '₹700 for two',
      cuisines: [
        'Biryani',
        'Hyderabadi',
        'North Indian',
        'Kebabs',
        'Mughlai',
        'Desserts'
      ],
      avgRating: 4.2,
      avgRatingString: '4.2',
      totalRatingsString: '4.8K+',
      deliveryTime: '25-30 mins',
      isOpen: true,
      discount: '70% OFF',
      discountAmount: 'UPTO ₹130'
    }
  },
   {
    data: {
      id: '448812',
      name: 'Biryani By Kilo',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/3b8c81b2-c2b0-462e-bea7-c90ff3773d09_446812.JPG',
      locality: 'VARDHMAN PREMIUM MALL',
      areaName: 'Rohini',
      costForTwo: '₹700 for two',
      cuisines: [
        'Biryani',
        'Hyderabadi',
        'North Indian',
        'Kebabs',
        'Mughlai',
        'Desserts'
      ],
      avgRating: 4.2,
      avgRatingString: '4.2',
      totalRatingsString: '4.8K+',
      deliveryTime: '25-30 mins',
      isOpen: true,
      discount: '70% OFF',
      discountAmount: 'UPTO ₹130'
    }
  }
]

const Body = () => {
  return (
    <div className='body'>
      <div className='search'> Search</div>
      <div className='rest-container'>
        {resData.map((res)=> <RestaurantCard key={res.data.id} resData={res} />)}
      
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img
          className='logo'
          src='https://marketplace.canva.com/EAGn5Ex6daU/1/0/1600w/canva-brown-and-black-circle-illustrated-burger-pizza-logo-C3yT7UQIQWQ.jpg'
        />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)
