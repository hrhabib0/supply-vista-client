import React, { useEffect, useState } from 'react';
import Banner from '../Components/Home/Banner';
import Categories from '../Components/Home/Categories';

const Home = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    // const categoriesPromise = fetch('http://localhost:3000/categories').then(res=>res.json())
    return (
        <div>
            <Banner></Banner>
            <Categories categories={categories}></Categories>
        </div>
    );
};

export default Home;