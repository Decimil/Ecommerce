import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";
import MainCarousel from "./MainCarousel";
import AppHeader from "../global/AppHeader";

function Home() {
  return (
    <div className="home">
      <AppHeader />
      <MainCarousel />
      <ShoppingList />
      <Subscribe />
    </div>
  );
}

export default Home;
