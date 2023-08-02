import React, { Component } from 'react'
import Card_props from './Card_props'

export class Class_props extends Component {
  render() {
    return (
      <div className='row'>
        <Card_props title="Product 1" desc="Product 1" img="https://img.freepik.com/free-vector/composition-can-iced-green-tea_1268-15502.jpg?size=626&ext=jpg&ga=GA1.2.842530506.1682073780&semt=ais"/>
        <Card_props title="Product 2" desc="Product 2" img="https://img.freepik.com/free-vector/mask-conditioner-bottles-vector-realistic-product-placement-label-designs_1268-18678.jpg?size=626&ext=jpg&ga=GA1.2.842530506.1682073780&semt=ais"/>
        <Card_props title="Product 3" desc="Product 3" img="https://img.freepik.com/free-vector/podiums-surrounded-by-twigs-with-containers-filled-with-eucalyptus-essential-oil_1268-15476.jpg?size=626&ext=jpg&ga=GA1.2.842530506.1682073780&semt=ais"/>
      </div>
    )
  }
}

export default Class_props