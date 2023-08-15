import img01 from './img/images/hma-02.png';
import phone from './img/phone.png';


export default function Music_App_Section2() {
  return (
    <section className="section spdt">
      <div className="container">
        <div className="row flex-align-c">
          <div className="col-lg-6">
            <div className="images layout-03 lg-mb60">
              <div className="inner">
                <img className="img01 z-1" src={img01} alt="Image" />
                <div className="wow animate__animated animate__fadeInLeft z-2">
                  <img className="img02" src={phone} alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}