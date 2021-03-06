import React from 'react'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImgOverlay
} from 'reactstrap';

function RenderDish({ dish }) {
    return (
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}


function RenderComments({ comments }) {
    if (comments.length === 0) {
        return (<div></div>);
    } else {
        const commensArray = comments.map((comm) => {
            const commentAuthorString = `-- ${comm.author} , ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comm.date)))}`
            return (
                <div key={comm.id}>
                    <ul className="list-unstyled">
                        <li>{comm.comment}</li>
                        <br></br>
                        <li>{commentAuthorString}</li>
                    </ul>
                </div>
            );
        })

        return (
            <div>
                {commensArray}
            </div>
        );
    }
}


const DishDetail = (props) => {

    const dish = props.dish;

    if (dish === undefined) {
        return (<div></div>);
    } return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={dish}></RenderDish>
                </div>

                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <RenderComments comments={dish.comments}></RenderComments>
                </div>
            </div>
        </div>
    );

}




export default DishDetail;