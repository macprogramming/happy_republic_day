import react, { useEffect, useState } from 'react';
import sideImage from '../../src/image/happy-republic-day-butterfly.gif';
import somu_gif from '../../src/image/15august-monu.gif';
import instaicon from '../../src/image/insta.jpeg';
const Home = () => {
  const [name, setName] = useState('')
  useEffect(() => {
    var name = prompt("Please Enter Your Name\n\n👇👇👇👇👇");
    // document.getElementById('name').innerHTML = name;
    setName(name);
    let sideMarque = document.getElementsByClassName("marqueeAnimation")[0];
    let marqueeAnimation_right = document.getElementsByClassName("marqueeAnimation_right")[0];

    for(let i=0; i < 25; i++){
    sideMarque.innerHTML += `<span class="marqueeAnimation" aria-hidden="true">
                <img style="height: .5em;width: .5em;" src=${sideImage} alt="">
              </span>`;
    marqueeAnimation_right.innerHTML += `<span class="marqueeAnimation_right" aria-hidden="true">
      <img style="height: .5em;width: .5em;" src=${sideImage} alt="">
    </span>`;
  }
  }, []);
  return(
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">
            <div className="position-fixed side-bar_left">
              <div className="row marquee">
                <div className="col-12 p-0">
                  <p className="">
                    <span className="marqueeAnimation" aria-hidden="true">
                      <img className='img_sider' src={sideImage} alt="" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="position-fixed side-bar_right">
              <div className="row marquee">
                <div className="col-12 p-0">
                  <p className="">
                    <span className="marqueeAnimation_right" aria-hidden="true">
                      <img className='img_sider' src={sideImage} alt="" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="card bg-transparent text-center border-0 outline-0 position-relative" style={{ height: '100vh'}}>
              <div className="card-body">
                <div className="figure_main">
                    <figure>
                      <h1 style={{ textTransform: 'uppercase' }} id="name">{name}</h1>
                    </figure>
                </div>
                <h5><span className="text_1">Wishing You</span>&nbsp;<br /><span className="text_2">Happy Republic Day</span></h5>
                <p className="text-end text-success"><img src={instaicon} style={{ height: '1em', width: '1em'}} /> <a className="instagram" href="https://www.instagram.com/mac_programming/?igsh=ODUwdzg5YzVhMjFo&utm_source=qr">@macprogramming</a></p>
              </div>
              <div className="card-footer border-0 bg-transparent">
                <img src={somu_gif} className="img img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;