import React, { useEffect, useState } from 'react';
import Banner from '../Components/Home/Banner';
import Categories from '../Components/Home/Categories';
import About from '../Components/Home/About';
import Reviews from '../Components/Home/Reviews';

const Home = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[categories])
    // dynamic title
    useEffect(()=>{
        document.title = "Home | SupplyVista";
    },[])
    return (
        <div>
            <Banner></Banner>
            <Categories categories={categories}></Categories>
            <Reviews></Reviews>
            <About></About>
        </div>
    );
};

export default Home;