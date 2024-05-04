import React, { useState } from 'react'
import budha from './assets/homedeco.jpg'
import keyholder from './assets/Key Holder.jpg'
import wallart from "./assets/Wall Art.jpg"
import deskpot from './assets/Desk pot.jpg'
import wallclock from './assets/wall clock.jpg'
import artificialgrass from './assets/Artificial grass.jpg'
import wallshelf from "./assets/wall shelf.jpg"
import mirror from './assets/mirror.jpg'
import table from './assets/portable table.jpg'
import showpiece from './assets/show piece.jpg'
import add from './assets/add.jpg'
import vacuumcleaner from './assets/vacuum cleaner.jpg'
import mattress from './assets/mattress.jpg'


function App() {
    const [cart, setCart] = useState(0);


  return (
    <div>
     <div style={{position:'sticky', top:'0', zIndex:'5'}}>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                {/* <a className="navbar-brand" href="#!">Start Bootstrap</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Styles</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="#!">Contact Us</a></li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{cart}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>       
     </div>

        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this Home Deco application</p>
                </div>
            </div>
        </header>

        <header >
            <div >
                <div >
                   <img src={add} alt="" style={{maxWidth:'100%'}}/>
                </div>
            </div>
        </header>

        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {/* <div className="col mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                    
                                    $40.00 - $80.00
                                </div>
                            </div>
                            
                    
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div> */}

                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Limited Time Offer</div>
                            
                            <img className="card-img-top" src={budha} alt="Budha" />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Budha Statue</h5>
                                    
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    
                                    <span className="text-muted text-decoration-line-through">₹3499.00</span>
                                    ₹2499.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <a className="btn btn-outline-dark mt-auto" href="#"
                                    onClick={()=>setCart(cart+1)}>Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Best Seller</div>
                            
                            <img className="card-img-top" src={keyholder} alt="..." />
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                   
                                    <h5 className="fw-bolder">Key Holder</h5>
                                    
                                    <span className="text-muted text-decoration-line-through">$1250.00</span>
                                    ₹999.00
                                </div>
                            </div>
                           
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <a className="btn btn-outline-dark mt-auto" href="#"
                                onClick={()=>setCart(cart+1)}>Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">

                        <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>New</div>
                            
                            <img className="card-img-top" src={wallart} alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Wall Art</h5>
                                    
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    <span className="text-muted text-decoration-line-through">₹8699.00</span>
                                    ₹6999.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <a className="btn btn-outline-dark mt-auto" href="#"
                                     onClick={()=>setCart(cart+1)}>Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            
                            <img className="card-img-top" src={deskpot} alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Desk Pot</h5>
                                    
                                    <span className="text-muted text-decoration-line-through">₹1699.00</span>
                                  ₹1499.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"
                                 onClick={()=>setCart(cart+1)}>Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                   
                                    $120.00 - $280.00
                                </div>
                            </div>
                           
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div> */}
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Top Discount of the Sale</div>
                            
                            <img className="card-img-top" src={wallclock}alt="Wall clock" />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                   
                                    <h5 className="fw-bolder">Wall Clock</h5>
                                    
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    
                                    <span className="text-muted text-decoration-line-through">₹3500.00</span>
                                  ₹1999.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <a className="btn btn-outline-dark mt-auto" href="#"
                                     onClick={()=>setCart(cart+1)}>Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src={artificialgrass} alt="artificialgrass" />
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Artificial Grass</h5>
                                   
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    
                                   ₹315.00 / sq.ft
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <a className="btn btn-outline-dark mt-auto" href="#"
                                     onClick={()=>setCart(cart+1)}>Add to cart</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card h-100">

                        <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Top Rating</div>
                            
                            <img className="card-img-top" src={wallshelf} alt="artificialgrass" />
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Wall Shelf</h5>
                                   
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    
                                    ₹11,000.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <a className="btn btn-outline-dark mt-auto" href="#"
                                     onClick={()=>setCart(cart+1)}>Add to cart</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src={mirror} alt="artificialgrass" />
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Mirror</h5>
                                   
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    
                                    ₹5,500.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <a className="btn btn-outline-dark mt-auto" href="#"
                                     onClick={()=>setCart(cart+1)}>Add to cart</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src={table} alt="artificialgrass" />
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Portable Table</h5>
                                   
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    
                                   ₹4,000.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <a className="btn btn-outline-dark mt-auto" href="#"
                                     onClick={()=>setCart(cart+1)}>Add to cart</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src={showpiece} alt="artificialgrass" />
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Show Piece</h5>
                                   
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    
                                   ₹2,300.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <a className="btn btn-outline-dark mt-auto" href="#"
                                     onClick={()=>setCart(cart+1)}>Add to cart</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Lowest price in the year</div>
                            
                            <img className="card-img-top" src={vacuumcleaner} alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Smart Vacuum Cleaner</h5>
                                    
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    
                                    <span className="text-muted text-decoration-line-through">₹28,000.00</span>
                                    $25,999.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <a className="btn btn-outline-dark mt-auto" href="#"
                                    onClick={()=>setCart(cart+1)}>Add to cart</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Limited Time Offer</div>
                            
                            <img className="card-img-top" src={mattress} alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Mattress</h5>
                                    
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    
                                    <span className="text-muted text-decoration-line-through">₹20,000.00</span>
                                    ₹18,000.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <a className="btn btn-outline-dark mt-auto" href="#"
                                    onClick={()=>setCart(cart+1)}>Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    
  )
}
 

export default App


