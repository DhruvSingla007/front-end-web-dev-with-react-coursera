import React from 'react';
import {DISHES} from './shared/dishes'
import Menu from './MenuComponent'
import DishDetail from './DishDetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent';

class Main extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      dishes : DISHES,
      selectedDishId : null,
    }
  }

  onDishSelect(dishId){
    this.setState({
        selectedDishId: dishId,
    });
 }

  render() {
    return (
      <div>
      <Header></Header>
        <Menu dishes = {this.state.dishes} onClick = {(dishId) => {
            console.log(dishId);
            this.onDishSelect(dishId)}}></Menu>
        <DishDetail dish = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDishId)[0]}></DishDetail>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
