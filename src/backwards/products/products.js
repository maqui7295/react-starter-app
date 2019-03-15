import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export const productLists = [
    {
        id: 1,
        name: 'fine shirt',
        code: '2344',
        date: 'March 19 2018',
        price: 2000,
        image: '#',
        description: 'This is a fine product'
    },
    {
        id: 2,
        name: 'fine shirt',
        code: '2344',
        date: 'March 19 2018',
        price: 2000,
        image: '#',
        description: 'This is a fine product'
    },
    {
        id: 3,
        name: 'fine shirt',
        code: '2344',
        date: 'March 19 2018',
        price: 2000,
        image: '#',
        description: 'This is a fine product'
    },
]





function Card(props){
    return (
        <div className="card" >
            <img className="card-img-top" src={props.image} alt="Card cap" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text"><small className="text-muted">{props.date}</small></p>
            </div>
            <div className="card-footer bg-transparent border-success">
                <Link to={`/products/${props.id}`} className="btn btn-primary card-link">Go somewhere</Link>
            </div>
        </div>
    )
}

export function ProductDetail(props){

    return <div className={'container py-5'}>
                <h5 className="card-title">{props.product.name}</h5>
                <p className="card-text">{props.product.description}</p>
                <p className="card-text"><small className="text-muted">{props.product.date}</small></p>
                <button onClick={alert(props.product.id)} className="btn btn-primary card-link">Add to Cart</button>
                <Link to={`/products/checkout/${props.product.id}`} className="btn btn-primary card-link">Buy now</Link>
           </div>
}


class ProductList extends Component {


    render(){
        return(
            <div className={'container py-5'}>
                <div className="card-deck">
                    {productLists.map(product => <Card {...product} key={product.id} /> )}
                </div>
            </div>
        );
    }


}

export default ProductList