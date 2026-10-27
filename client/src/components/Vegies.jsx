import { veggies_list } from "../assets/assets";
import { Minus, Plus } from "lucide-react";

const Vegies = ({ selectedCategory }) => {
  const visibleVeggies =
    selectedCategory === "All"
      ? veggies_list
      : veggies_list.filter((veggie) => veggie.category === selectedCategory);

  return (
    <section className="products-section" aria-label="Fresh vegetables">
      <div className="products-grid">
        {visibleVeggies.map((veggie) => (
          <article className="product-card" key={veggie.name}>
            <div className="product-card-image">
              <img src={veggie.image} alt={veggie.name} loading="lazy" />
            </div>
            <div className="product-card-info">
              <p className="product-card-category">{veggie.category}</p>
              <h3>{veggie.name}</h3>
              <p className="product-card-price">${veggie.price.toFixed(2)}</p>
            </div>
            <div>
              <button>
                <Minus color="#ffff" />
              </button>
              <button>
                <Plus color="#ffff" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Vegies;
