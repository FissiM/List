import { useRef, useState } from "react";
import { products } from "../products";

import { AddModalButton } from "../components/shared/AddModalButton";
import AddModal from "../components/shared/AddModal";
import { Product } from "../components/shared/Product";

export const Home = () => {
  const [productsList, setProductsList] = useState(products);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const elementRef = useRef<HTMLDivElement | null>(null);

  const executeScroll = () => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView();
    }
  };
  const handleOpen = () => setIsModalOpen(true);

  const handleClose = () => setIsModalOpen(false);

  const handleRemove = (id: number) => {
    setProductsList((previousList) => {
      return previousList.filter((product) => product.id != id);
    });
  };

  const addProducts = (title: string, price: number, description: string) => {
    setProductsList((previousList) => {
      return [
        {
          id: Math.random(),
          title: title,
          price: price,
          description: description,
          thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        },
        ...previousList,
      ];
    });
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={executeScroll} type="button">
        scroll to booteom element
      </button>

      <AddModalButton onClick={handleOpen} />

      <section className="products-section" id="products-section">
        {productsList.map((product) => (
          <Product key={product.id} product={product} onRemove={handleRemove} />
        ))}
      </section>

      <AddModalButton onClick={handleOpen} />

      <div ref={elementRef}>Bottom Element</div>

      <AddModal
        isOpen={isModalOpen}
        onClose={handleClose}
        onAdd={addProducts}

        //
      />
    </>
  );
};
