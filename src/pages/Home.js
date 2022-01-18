import {Carousel} from 'react-bootstrap'


function Home(){
    return(
  
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b65c44a4-3e46-4403-9a42-7656f04f991b/dri-fit-element-mens-1-4-zip-running-top-q04tXT.png"
      alt="First slide"
      height="650"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/74f6f04c-2630-4252-838a-243df353649d/air-big-kids-girls-french-terry-sweatshirt-53MbGF.png"
      alt="Second slide"
      height="650"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Home