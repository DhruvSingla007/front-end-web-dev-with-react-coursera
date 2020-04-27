import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImgOverlay
  } from 'reactstrap';

class Menu extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedDish : null,
        }
    }

    onDishSelect(dish){
        this.setState({
            selectedDish: dish,
        });
    }

    renderSelectedDish(dish){
        if(dish === null){
            return (
                <div></div>
            );
        } else {
            return (
                <Card>
                    <CardImg width = "100%" src={dish.image} alt = {dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
    }



    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key = {dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick = {() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt = {dish.name}/>
                        <CardImgOverlay>
                            <CardTitle> {dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className = "container">
                <div className = "row">
                  {menu}
                </div>
                <div className= "row">
                    {this.renderSelectedDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu