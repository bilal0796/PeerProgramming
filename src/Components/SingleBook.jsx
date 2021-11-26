import React from 'react'
import { Card } from 'react-bootstrap'

class SingleBook extends React.Component {

    state = {
        selected: false
    }

    render() {
        return (
            <div className='Container mx-auto mt-4' style={{width:'200px'}} >
            <Card
                onClick={() => this.setState({ selected: !this.state.selected })}
                style={{border:this.state.selected ? '3px solid red':'none'}}
            >
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                </Card.Body>
            </Card>
            </div>
        )
    }

}

export default SingleBook