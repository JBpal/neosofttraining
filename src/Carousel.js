var carousel1 = "carouselImage1.jpg"
var carousel2 = "carouselImage2.jpeg"
var carousel3 = "carouselImage3.jpeg"

var carouselStyel = {
  height:"300px"
}

function Carousel(){
    return(
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img style={carouselStyel} src={carousel3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img style={carouselStyel} src={carousel1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img style={carouselStyel} src={carousel2} className="d-block w-100" alt="..." />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>

    )
}

export default Carousel;