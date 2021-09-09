import React, {useState} from "react";
import "./Home.css";
import Product from "./Product";
import {motion} from 'framer-motion'
import ClearIcon from '@material-ui/icons/Clear';
import { useStateValue } from "./StateProvider";

function Home() {
  const [quantity, setQuantity] = useState(1);
  const [successModal, setSuccessModal] = useState(false)
  const [{ previewProduct }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: previewProduct.id,
        title: previewProduct.title,
        image: previewProduct.image,
        price: previewProduct.price,
        rating: previewProduct.rating,
        quantity
      },
    }); 
    dispatch({
      type: "PREVIEW_PRODUCT", 
      product: {
        show: false,
        title: "", 
        image: "", 
        description: ""
      }});
    setSuccessModal(true);
    setTimeout(()=>{setSuccessModal(false)}, 1500)
  }
  return (
    <div className="home">
      {/* add to cart success modal */}

      {successModal && <p className="modal-success">Product has been added to cart</p>}

      {/* products preview */}

      {previewProduct.show && <motion.div initial={{right: -1000}}
      animate={{right: [-1000, 0]}} className="add-to-cart">
        <ClearIcon onClick={()=> dispatch({type: "PREVIEW_PRODUCT", product: {show: false, title: "", image: "", description: ""}})} />
        <img src={previewProduct.image} alt="" />
        <span>{previewProduct.title}</span>
        <span>₦ {previewProduct.price}</span>
        <div className="quantity">
          <span>Number of packs</span>
          <input value={quantity} type="number" onChange={(e)=> setQuantity(e.target.value)} />
        </div>
        <button onClick={addToBasket}>Add to cart</button>
        <h3>Description</h3>
        <p>{previewProduct.description}</p>
      </motion.div>}


      <div className="home__container">
        <img
          className="home__image"
          src="/images/banner.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1232wrewtgeerwet3g1341"
            title="Zero coke"
            price={1000}
            rating={5}
            image="/images/coke.webp"
            description="The delicious 5Alive Pulpy Orange Fruit Drink comes in a case of 30cl PET x 12 Pack
5Alive Pulpy Orange Fruit Drink provides a mouth feel that is natural just as biting into an orange, you get a pleasurable experience as you taste the orange juice and pulp just like when you bite into an orange fruit.Five is a line of fruit juice blends made by the Coca cola company. 5 Alive Pulpy Orange Fruit Drink is a healthy and refreshing fruit drink with a great orange pulp taste. It is very refreshing and suits every occasion where served or taken. It has a satisfying taste that will always keep you asking for more. Best when served"
          />
          <Product
            id="4953wretretyruw8094"
            title="vanilla"
            price={239.0}
            rating={4}
            image="/images/coke2.webp"
            description="The delicious 5Alive Pulpy Orange Fruit Drink comes in a case of 30cl PET x 12 Pack
5Alive Pulpy Orange Fruit Drink provides a mouth feel that is natural just as biting into an orange, you get a pleasurable experience as you taste the orange juice and pulp just like when you bite into an orange fruit.Five is a line of fruit juice blends made by the Coca cola company. 5 Alive Pulpy Orange Fruit Drink is a healthy and refreshing fruit drink with a great orange pulp taste. It is very refreshing and suits every occasion where served or taken. It has a satisfying taste that will always keep you asking for more. Best when served"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903werteyfewdgtqe850"
            title="5Alive Pulpy 30cl PET"
            price={2000}
            rating={3}
            image="/images/fivepack.jpg"
            description="The delicious 5Alive Pulpy Orange Fruit Drink comes in a case of 30cl PET x 12 Pack
5Alive Pulpy Orange Fruit Drink provides a mouth feel that is natural just as biting into an orange, you get a pleasurable experience as you taste the orange juice and pulp just like when you bite into an orange fruit.Five is a line of fruit juice blends made by the Coca cola company. 5 Alive Pulpy Orange Fruit Drink is a healthy and refreshing fruit drink with a great orange pulp taste. It is very refreshing and suits every occasion where served or taken. It has a satisfying taste that will always keep you asking for more. Best when served"
          />
          <Product
            id="2344wtyur67tyg5930"
            title="Coca-Cola 1L PET"
            price={98.99}
            rating={5}
            image="/images/cokepack.jpg"
            description="The delicious 5Alive Pulpy Orange Fruit Drink comes in a case of 30cl PET x 12 Pack
5Alive Pulpy Orange Fruit Drink provides a mouth feel that is natural just as biting into an orange, you get a pleasurable experience as you taste the orange juice and pulp just like when you bite into an orange fruit.Five is a line of fruit juice blends made by the Coca cola company. 5 Alive Pulpy Orange Fruit Drink is a healthy and refreshing fruit drink with a great orange pulp taste. It is very refreshing and suits every occasion where served or taken. It has a satisfying taste that will always keep you asking for more. Best when served"
          />
          <Product
            id="325wertweyuwt4354345"
            title="Fanta Orange 50cl x 12"
            price={598.99}
            rating={4}
            image="/images/fantapack.jpg"
            description="The delicious 5Alive Pulpy Orange Fruit Drink comes in a case of 30cl PET x 12 Pack
5Alive Pulpy Orange Fruit Drink provides a mouth feel that is natural just as biting into an orange, you get a pleasurable experience as you taste the orange juice and pulp just like when you bite into an orange fruit.Five is a line of fruit juice blends made by the Coca cola company. 5 Alive Pulpy Orange Fruit Drink is a healthy and refreshing fruit drink with a great orange pulp taste. It is very refreshing and suits every occasion where served or taken. It has a satisfying taste that will always keep you asking for more. Best when served"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903wtryeturywsetf850"
            title="Eva water 1.5L PET"
            price={199.99}
            rating={3}
            image="/images/evapack.jpg"
            description="The delicious 5Alive Pulpy Orange Fruit Drink comes in a case of 30cl PET x 12 Pack
5Alive Pulpy Orange Fruit Drink provides a mouth feel that is natural just as biting into an orange, you get a pleasurable experience as you taste the orange juice and pulp just like when you bite into an orange fruit.Five is a line of fruit juice blends made by the Coca cola company. 5 Alive Pulpy Orange Fruit Drink is a healthy and refreshing fruit drink with a great orange pulp taste. It is very refreshing and suits every occasion where served or taken. It has a satisfying taste that will always keep you asking for more. Best when served"
          />
          <Product
            id="2344wetrtjr5930"
            title="Sprite 50cl PET"
            price={98.99}
            rating={5}
            image="/images/spritepack.jpg"
            description="The delicious 5Alive Pulpy Orange Fruit Drink comes in a case of 30cl PET x 12 Pack
5Alive Pulpy Orange Fruit Drink provides a mouth feel that is natural just as biting into an orange, you get a pleasurable experience as you taste the orange juice and pulp just like when you bite into an orange fruit.Five is a line of fruit juice blends made by the Coca cola company. 5 Alive Pulpy Orange Fruit Drink is a healthy and refreshing fruit drink with a great orange pulp taste. It is very refreshing and suits every occasion where served or taken. It has a satisfying taste that will always keep you asking for more. Best when served"
          />
          <Product
            id="3254ukrillyfud354345"
            title="coca-cola coke zero 60cl x 12"
            price={598.99}
            rating={4}
            image="/images/cokepackbig.jpg"
            description="The delicious 5Alive Pulpy Orange Fruit Drink comes in a case of 30cl PET x 12 Pack
5Alive Pulpy Orange Fruit Drink provides a mouth feel that is natural just as biting into an orange, you get a pleasurable experience as you taste the orange juice and pulp just like when you bite into an orange fruit.Five is a line of fruit juice blends made by the Coca cola company. 5 Alive Pulpy Orange Fruit Drink is a healthy and refreshing fruit drink with a great orange pulp taste. It is very refreshing and suits every occasion where served or taken. It has a satisfying taste that will always keep you asking for more. Best when served"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903wesrfgfwerf850"
            title="cherry"
            price={199.99}
            rating={3}
            image="/images/coke3.webp"
            description="The delicious 5Alive Pulpy Orange Fruit Drink comes in a case of 30cl PET x 12 Pack
5Alive Pulpy Orange Fruit Drink provides a mouth feel that is natural just as biting into an orange, you get a pleasurable experience as you taste the orange juice and pulp just like when you bite into an orange fruit.Five is a line of fruit juice blends made by the Coca cola company. 5 Alive Pulpy Orange Fruit Drink is a healthy and refreshing fruit drink with a great orange pulp taste. It is very refreshing and suits every occasion where served or taken. It has a satisfying taste that will always keep you asking for more. Best when served"
          />
          <Product
            id="23445srfgdgy930"
            title="energy"
            price={98.99}
            rating={5}
            image="/images/coke4.webp"
            description="The delicious 5Alive Pulpy Orange Fruit Drink comes in a case of 30cl PET x 12 Pack
5Alive Pulpy Orange Fruit Drink provides a mouth feel that is natural just as biting into an orange, you get a pleasurable experience as you taste the orange juice and pulp just like when you bite into an orange fruit.Five is a line of fruit juice blends made by the Coca cola company. 5 Alive Pulpy Orange Fruit Drink is a healthy and refreshing fruit drink with a great orange pulp taste. It is very refreshing and suits every occasion where served or taken. It has a satisfying taste that will always keep you asking for more. Best when served"
          />
          <Product
            id="325435rfvxd4345"
            title="coffee"
            price={598.99}
            rating={4}
            image="/images/coke5.webp"
            description="The delicious 5Alive Pulpy Orange Fruit Drink comes in a case of 30cl PET x 12 Pack
5Alive Pulpy Orange Fruit Drink provides a mouth feel that is natural just as biting into an orange, you get a pleasurable experience as you taste the orange juice and pulp just like when you bite into an orange fruit.Five is a line of fruit juice blends made by the Coca cola company. 5 Alive Pulpy Orange Fruit Drink is a healthy and refreshing fruit drink with a great orange pulp taste. It is very refreshing and suits every occasion where served or taken. It has a satisfying taste that will always keep you asking for more. Best when served"
          />
        </div>

        <div className="home__row">
          <Product
            id="490trtyujty3850"
            title="Fanta Zero"
            price={199.99}
            rating={3}
            image="/images/fanta.webp"
            description="The delicious 5Alive Pulpy Orange Fruit Drink comes in a case of 30cl PET x 12 Pack
5Alive Pulpy Orange Fruit Drink provides a mouth feel that is natural just as biting into an orange, you get a pleasurable experience as you taste the orange juice and pulp just like when you bite into an orange fruit.Five is a line of fruit juice blends made by the Coca cola company. 5 Alive Pulpy Orange Fruit Drink is a healthy and refreshing fruit drink with a great orange pulp taste. It is very refreshing and suits every occasion where served or taken. It has a satisfying taste that will always keep you asking for more. Best when served"
          />
          <Product
            id="23445eryukipk930"
            title="Fanta Orange"
            price={98.99}
            rating={5}
            image="/images/fanta2.webp"
            description="The delicious 5Alive Pulpy Orange Fruit Drink comes in a case of 30cl PET x 12 Pack
5Alive Pulpy Orange Fruit Drink provides a mouth feel that is natural just as biting into an orange, you get a pleasurable experience as you taste the orange juice and pulp just like when you bite into an orange fruit.Five is a line of fruit juice blends made by the Coca cola company. 5 Alive Pulpy Orange Fruit Drink is a healthy and refreshing fruit drink with a great orange pulp taste. It is very refreshing and suits every occasion where served or taken. It has a satisfying taste that will always keep you asking for more. Best when served"
          />
          <Product
            id="325435wetgjktyyir4345"
            title="Fanta Pineapple"
            price={598.99}
            rating={4}
            image="/images/fanta3.webp"
            description="The delicious 5Alive Pulpy Orange Fruit Drink comes in a case of 30cl PET x 12 Pack
5Alive Pulpy Orange Fruit Drink provides a mouth feel that is natural just as biting into an orange, you get a pleasurable experience as you taste the orange juice and pulp just like when you bite into an orange fruit.Five is a line of fruit juice blends made by the Coca cola company. 5 Alive Pulpy Orange Fruit Drink is a healthy and refreshing fruit drink with a great orange pulp taste. It is very refreshing and suits every occasion where served or taken. It has a satisfying taste that will always keep you asking for more. Best when served"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903wert3iko8ku850"
            title="Cranberry Sprite"
            price={199.99}
            rating={3}
            image="/images/sprite.webp"
            description="The delicious 5Alive Pulpy Orange Fruit Drink comes in a case of 30cl PET x 12 Pack
5Alive Pulpy Orange Fruit Drink provides a mouth feel that is natural just as biting into an orange, you get a pleasurable experience as you taste the orange juice and pulp just like when you bite into an orange fruit.Five is a line of fruit juice blends made by the Coca cola company. 5 Alive Pulpy Orange Fruit Drink is a healthy and refreshing fruit drink with a great orange pulp taste. It is very refreshing and suits every occasion where served or taken. It has a satisfying taste that will always keep you asking for more. Best when served"
          />
          <Product
            id="2344593wertwtyikm0"
            title="Zero Sugar"
            price={98.99}
            rating={5}
            image="/images/sprite2.webp"
            description="The delicious 5Alive Pulpy Orange Fruit Drink comes in a case of 30cl PET x 12 Pack
5Alive Pulpy Orange Fruit Drink provides a mouth feel that is natural just as biting into an orange, you get a pleasurable experience as you taste the orange juice and pulp just like when you bite into an orange fruit.Five is a line of fruit juice blends made by the Coca cola company. 5 Alive Pulpy Orange Fruit Drink is a healthy and refreshing fruit drink with a great orange pulp taste. It is very refreshing and suits every occasion where served or taken. It has a satisfying taste that will always keep you asking for more. Best when served"
          />
          <Product
            id="325435434wetwertw5"
            title="Sprite"
            price={598.99}
            rating={4}
            image="/images/sprite3.webp"
            description="The delicious 5Alive Pulpy Orange Fruit Drink comes in a case of 30cl PET x 12 Pack
5Alive Pulpy Orange Fruit Drink provides a mouth feel that is natural just as biting into an orange, you get a pleasurable experience as you taste the orange juice and pulp just like when you bite into an orange fruit.Five is a line of fruit juice blends made by the Coca cola company. 5 Alive Pulpy Orange Fruit Drink is a healthy and refreshing fruit drink with a great orange pulp taste. It is very refreshing and suits every occasion where served or taken. It has a satisfying taste that will always keep you asking for more. Best when served"
          />
        </div>

        <div className="home__row">
          <Product
            id="490385eyuty0"
            title="Soda Water"
            price={199.99}
            rating={3}
            image="/images/schweppes.webp"
            description="The delicious 5Alive Pulpy Orange Fruit Drink comes in a case of 30cl PET x 12 Pack
5Alive Pulpy Orange Fruit Drink provides a mouth feel that is natural just as biting into an orange, you get a pleasurable experience as you taste the orange juice and pulp just like when you bite into an orange fruit.Five is a line of fruit juice blends made by the Coca cola company. 5 Alive Pulpy Orange Fruit Drink is a healthy and refreshing fruit drink with a great orange pulp taste. It is very refreshing and suits every occasion where served or taken. It has a satisfying taste that will always keep you asking for more. Best when served"
          />
          <Product
            id="234459retwwert30"
            title="Mojito"
            price={98.99}
            rating={5}
            image="/images/schweppes2.webp"
            description="The delicious 5Alive Pulpy Orange Fruit Drink comes in a case of 30cl PET x 12 Pack
5Alive Pulpy Orange Fruit Drink provides a mouth feel that is natural just as biting into an orange, you get a pleasurable experience as you taste the orange juice and pulp just like when you bite into an orange fruit.Five is a line of fruit juice blends made by the Coca cola company. 5 Alive Pulpy Orange Fruit Drink is a healthy and refreshing fruit drink with a great orange pulp taste. It is very refreshing and suits every occasion where served or taken. It has a satisfying taste that will always keep you asking for more. Best when served"
          />
          <Product
            id="325435ertwest4345"
            title="Ginger Ale"
            price={598.99}
            rating={4}
            image="/images/schweppes3.webp"
            description="The delicious 5Alive Pulpy Orange Fruit Drink comes in a case of 30cl PET x 12 Pack
5Alive Pulpy Orange Fruit Drink provides a mouth feel that is natural just as biting into an orange, you get a pleasurable experience as you taste the orange juice and pulp just like when you bite into an orange fruit.Five is a line of fruit juice blends made by the Coca cola company. 5 Alive Pulpy Orange Fruit Drink is a healthy and refreshing fruit drink with a great orange pulp taste. It is very refreshing and suits every occasion where served or taken. It has a satisfying taste that will always keep you asking for more. Best when served"
          />
        </div>

        <div className="home__row">
          <Product
            id="490ddf3850"
            title="Coca-cola 33cl CAN"
            price={199.99}
            rating={3}
            image="/images/cokecanpack.jpg"
            description="The delicious 5Alive Pulpy Orange Fruit Drink comes in a case of 30cl PET x 12 Pack
5Alive Pulpy Orange Fruit Drink provides a mouth feel that is natural just as biting into an orange, you get a pleasurable experience as you taste the orange juice and pulp just like when you bite into an orange fruit.Five is a line of fruit juice blends made by the Coca cola company. 5 Alive Pulpy Orange Fruit Drink is a healthy and refreshing fruit drink with a great orange pulp taste. It is very refreshing and suits every occasion where served or taken. It has a satisfying taste that will always keep you asking for more. Best when served"
          />
          <Product
            id="23445adfdf930"
            title="Sprite 33cl CAN"
            price={98.99}
            rating={5}
            image="/images/spritecanpack.jpg"
            description="The delicious 5Alive Pulpy Orange Fruit Drink comes in a case of 30cl PET x 12 Pack
5Alive Pulpy Orange Fruit Drink provides a mouth feel that is natural just as biting into an orange, you get a pleasurable experience as you taste the orange juice and pulp just like when you bite into an orange fruit.Five is a line of fruit juice blends made by the Coca cola company. 5 Alive Pulpy Orange Fruit Drink is a healthy and refreshing fruit drink with a great orange pulp taste. It is very refreshing and suits every occasion where served or taken. It has a satisfying taste that will always keep you asking for more. Best when served"
          />
          <Product
            id="32543545t65345"
            title="Schweppes Virgin Mojito 33cl CAN"
            price={598.99}
            rating={4}
            image="/images/mojitopack.jpg"
            description="The delicious 5Alive Pulpy Orange Fruit Drink comes in a case of 30cl PET x 12 Pack
5Alive Pulpy Orange Fruit Drink provides a mouth feel that is natural just as biting into an orange, you get a pleasurable experience as you taste the orange juice and pulp just like when you bite into an orange fruit.Five is a line of fruit juice blends made by the Coca cola company. 5 Alive Pulpy Orange Fruit Drink is a healthy and refreshing fruit drink with a great orange pulp taste. It is very refreshing and suits every occasion where served or taken. It has a satisfying taste that will always keep you asking for more. Best when served"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
