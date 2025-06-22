import { Link } from "react-router";

const Categories = ({ categories }) => {

    console.log(categories)
    return (
        <div className="max-w-7xl mx-auto my-10 ">
            <h1 className="py-5 text-center font-bold text-4xl">Discover All Categories</h1>
            <div className='grid gap-5 grid-cols-2 md:grid-cols-5'>
                {
                    categories.map(
                        category =>
                            <Link to={`http://localhost:3000/categories/${category.name}`}>
                                <div className='border border-gray-300 rounded-3xl p-2 flex gap-4 items-center hover:text-green-500 hover:scale-105 transition-transform duration-300'>
                                    <div className="avatar">
                                        <div className="mask mask-hexagon-2 w-20">
                                            <img src="https://img.daisyui.com/images/profile/demo/distracted2@192.webp" />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="font-semibold">{category.name}</h2>
                                    </div>
                                </div>
                            </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;