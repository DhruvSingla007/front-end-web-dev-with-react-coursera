import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap'
import {DISHES} from './shared/dishes'
import Menu from './MenuComponent'
import DishDetail from './DishDetailComponent'


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
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Hello There</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = {this.state.dishes} onClick = {(dishId) => {
            console.log(dishId);
            this.onDishSelect(dishId)}}></Menu>
        <DishDetail dish = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDishId)[0]}></DishDetail>
      </div>
    );
  }
}

export default Main;
