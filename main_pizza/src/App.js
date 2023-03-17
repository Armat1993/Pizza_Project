import React from "react";
import './scss/app.scss';
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";


function App() {
    return (
        <div className="App">
            <Header/>
            <div className="content">
                <div className="content__top">
                    <Categories />
                    <Sort />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    <PizzaBlock title='Четыре сезона' price={267} />
                    <PizzaBlock title='Мексиканская' price={423} />
                    <PizzaBlock title='Гавайская' price={536} />
                    <PizzaBlock title='Вкусная' price={299} />

                </div>
            </div>
        </div>
    );
}

export default App;
