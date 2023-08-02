import React from 'react'

function Card_props() {
  return (
    <>
      <div className="col md-3">
        <div className="card" style={{ width: 400 }}>
          <img className="card-img-top" src="https://img.freepik.com/free-vector/night-cosmetic-line-face-skin-care_88138-13.jpg?size=626&ext=jpg&ga=GA1.1.842530506.1682073780&semt=ais" alt="Card image" style={{ width: '100%' }} />
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
            <a href="#" className="btn btn-primary">See Profile</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card_props