import React from 'react'
import ShoppingCart from './ShoppingCart'
import CardDetails from './CardDetails'

export default function () {
  return (
    <>
    
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card">
          <div className="card-body p-4">
            <div className="row">
            <ShoppingCart/>
              <div className="col-lg-5">
                <div className="card bg-primary text-white rounded-3">
                <CardDetails/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}
