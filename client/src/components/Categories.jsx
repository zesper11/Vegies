import { categories_list } from "../assets/assets";

const Categories = () => {
  return (
    <div>
      <div className="section-heading">
        <h2>Explore the harvest</h2>
        <p>
          From everyday essentials to seasonal favorites, find your fresh picks.
        </p>
      </div>
      <div className="catagories-selection">
        {categories_list.map((category) => (
          <div
            key={category.category_name}
            className="category-card cursor-pointer lg:w-40 md:w-30 sm:w-20 text-center rounded-full"
          >
            <img
              src={category.category_image}
              alt={category.category_name}
              className="rounded-full p-3"
            />
            <h3>{category.category_name} </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
