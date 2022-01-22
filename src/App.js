import { useState, createContext, useContext, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";


import './App.css';
import NavBar from './component/NavBar';
import Story from './component/Story';
import Modal from './component/Modal';
import MenuBar from './component/MenuBar';
import ShoppingCard from "./component/ShoppingCard";

//firebase
import db from './firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';




export const InvoiceContext = createContext();

const  App = () => {
  const [dataStory, setStoryData] = useState([]);
  const [dataFood, setFoodData] = useState([]);
  const [filteredDataFood, setFilteredDataFood] = useState([]);

  //Modal
  const [modalState, setModalState] = useState(false);
  const [modalData, setModalData] = useState([]);

  // Search Food
  const [searchInputVale, setSearchInputValue] = useState('');


   // FireBase connection
   const userCollectionRefStory = collection(db, 'story');
   const userCollectionRefFood = collection(db, 'food');

   // Shopping Card
   const [shopData, setShopData] = useState([]);
  
   // Getting data from FireBase
  useState(() => {
    const getUsers = async () => {
      const storydata = await getDocs(userCollectionRefStory);
      const fooddata = await getDocs(userCollectionRefFood);
      console.log('data',storydata)
      setStoryData(storydata.docs.map((doc) => ({...doc.data(), id:doc.id})))
      setFoodData(fooddata.docs.map((doc) => ({...doc.data(), id:doc.id})))
      setFilteredDataFood(fooddata.docs.map((doc) => ({...doc.data(), id:doc.id})));
    }
    getUsers();
  }, [])
 
  

  const handleFoodType = (e) => {
    console.log(e.target.outerText.toLowerCase())
    const filter = dataFood.filter(el => el.type === e.target.outerText.toLowerCase());
    setFilteredDataFood(filter);
  }

  const handleModalSelect = (id) => {
      setModalData(dataFood.filter(el => el.id === id));
      setModalState(true);
      console.log(modalData, 'modalData')
  }

  const handleModalClose = () => {
    setModalState(false);
    console.log(modalData, 'modalData')
  }

  const handleSearchFood = (e) => {
    setSearchInputValue(e.target.value);
    const filter = dataFood.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredDataFood(filter);
    console.log(searchInputVale);
  }

  const handleAddCardButton = (id) => {
    const checkSame = shopData.filter(el => el.id !== id);
    const filter = dataFood.filter(el => el.id === id);
    const arr = [...checkSame, ...filter];
    const finalarr = arr.map(el => {
      return(
        {...el, amount: el.amount ? el.amount : 0}
      )
    })
    
    setShopData(finalarr);
  }

  console.log(dataStory);
  console.log(dataFood, 'Food Data');
  console.log(filteredDataFood, 'Filtered Data')
  console.log(shopData, 'Shop Data')
  return (
    <InvoiceContext.Provider value={[
        dataStory, 
        handleFoodType, 
        filteredDataFood, 
        handleModalSelect,
        handleModalClose,
        modalData,
        handleSearchFood,
        searchInputVale,
        shopData,
        handleAddCardButton
      ]}>
        <div>
          <NavBar/>
          <Routes>
            <Route path = '/' element={
              <>
                <Story/>
                <MenuBar/>
                {
                  modalState && <Modal/>
                }
              </>

            }/>
            <Route path='shoppingCard' element ={<ShoppingCard/>} />

          </Routes>
          
        </div>
    </InvoiceContext.Provider>
  );
}

export default App;
