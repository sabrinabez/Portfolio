class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="css/bootstrap.css">
  <link rel="stylesheet" href="vendors/linericon/style.css">
  <link rel="stylesheet" href="css/font-awesome.min.css">
  <link rel="stylesheet" href="vendors/owl-carousel/owl.carousel.min.css">
  <link rel="stylesheet" href="css/magnific-popup.css">
  <link rel="stylesheet" href="vendors/nice-select/css/nice-select.css">
  <!-- main css -->
  <link rel="stylesheet" href="css/style.css">
</head>
<section class="home_banner_area" style="padding-bottom: 50px;">
    <div class="banner_inner">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="banner_content">
              <h2 class="text-uppercase">Welcome to my portfolio</h5>
              <h1 class="text-uppercase">I'm Sabrina!</h1>
              <h5 class="text-uppercase">User Experience and Graphic Designer</h5>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="home_right_img">
              <img class="rounded-corners5" src="img/portrait_portfolio.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--================ End Home Banner Area =================-->

  <!--================Start Portfolio Area =================-->
  <section class="portfolio_area" id="portfolio">
    <div class="container">
      <div class="row col-lg-12 main_title text-left">
        <h2>My Projects</h2>
      </div>
      <div class="filters portfolio-filter">
        <ul>
          <li class="active" data-filter="*">all</li>
          <li data-filter=".UXUI">UX UI Projects</li>
          <li data-filter=".branding">Branding Projects</li>
        </ul>
      </div>
  
      <div class="filters-content">
        <div class="row portfolio-grid justify-content-center">
          <div class="col-lg-4 col-md-6 all UXUI">
            <div class="portfolio_box">
              <div class="single_portfolio">
                <a href="/appx">
                <img class="img-fluid w-100 rounded-corners1" src="img/appx-promo.jpg" alt="USAA AppX Image">
                <div class="overlay rad50"></div>
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
                <h4><a href="/appx">USAA - AppX</a></h4>
                <p>UX UI design and testing for iOS and Android</p>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-6 all UXUI">
            <div class="portfolio_box">
              <div class="single_portfolio">
                <a href="/usaa-store">
                <img class="img-fluid w-100 rounded-corners2" src="img/usaa-store-promo.jpg" alt="USAA Store Image">
                <div class="overlay rad20"></div>
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
                <h4><a href="/usaa-store">USAA - Web Storefront</a></h4>
                <p>Web design and testing for USAA's public site</p>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-6 all branding">
            <div class="portfolio_box">
              <div class="single_portfolio">
                <a href="/pixar">             
                <img class="img-fluid w-100 rounded-corners2" src="img/pixar-promo.jpeg" alt="">
                <div class="overlay rad20"></div>
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
                <h4><a href="/pixar">Disney Pixar - 2020 Branding</a></h4>
                <p>Branding and packaging design refresh for Disney Pixar products</p>
              </div>
            </div>
          </div>          
          <div class="col-lg-4 col-md-6 all branding">
            <div class="portfolio_box">
              <div class="single_portfolio">
                <a href="/lolremix">
                <img class="img-fluid w-100 rounded-corners2" src="img/lolremix-promo.jpg" alt="LOL Remix Image">
                <div class="overlay rad30"></div>
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
                <h4><a href="/lolremix">LOL Surprise! - Remix Branding</a></h4>
                <p>Branding design and packaging for the LOL Surprise toy brand</p>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-6 all UXUI">
            <div class="portfolio_box">
              <div class="single_portfolio">
                <a href="/insidedisney">
                <img class="img-fluid w-100 rounded-corners2" src="img/disneycalendar-promo.jpg" alt="">
                <div class="overlay rad20"></div>
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
                <h4><a href="/insidedisney">Inside Disney Projects</a></h4>
                <p>Calendar module, comment interactions, and web pages for Disney internal products </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 all UXUI">
            <div class="portfolio_box">
              <div class="single_portfolio">
                <a href="/mystic">
                <img class="img-fluid w-100 rounded-corners1" src="img/mystic-promo.jpg" alt="">
                <div class="overlay rad50"></div>
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
                <h4><a href="/mystic">Mystic App</a></h4>
                <p>UX UI design for ios and Android</p>
              </div>
            </div>
          </div>          
          <div class="col-lg-8 col-md-6 all branding">
            <div class="portfolio_box">
              <div class="single_portfolio">
                <a href="/disneycobrands">
                <img class="img-fluid w-100 rounded-corners2" src="img/disneycobrand-promo2.jpg" alt="">
                <div class="overlay rad20"></div>
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
                <h4><a href="/disneycobrands">Disney Cobrands</a></h4>
                <p>Multiple branding and packaging projects for The Walt Disney Company</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 all branding">
            <div class="portfolio_box">
              <div class="single_portfolio">
                <a href="/chameleon">
                <img class="img-fluid w-100 rounded-corners2" src="img/chameleon-promo.jpg" alt="">
                <div class="overlay rad20"></div>
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
                <h4><a href="/chameleon">Chameleon - Rebrand</a></h4>
                <p>Sustainable branding and packaging exploration</p>
              </div>
            </div>
          </div>                                                      
          <div class="col-lg-8 col-md-6 all UXUI">
            <div class="portfolio_box">
              <div class="single_portfolio">
              <a href="/brighton">      
                <img class="img-fluid w-100 rounded-corners2" src="img/brighton-promo.jpg" alt="">
                <div class="overlay rad20"></div>
                  <div class="icon">
                    <span class="lnr lnr-cross"></span>
                  </div>
                </a>
              </div>
              <div class="short_info">
                <h4><a href="/brighton">Why Brighton? Web Pages</a></h4>
                <p>UX/UI design, graphic design, and front-end development for Brighton Collectibles</p>
              </div>
            </div>            
          </div>                    
        </div>
      </div>
    </div>
  </section>
  <!--================End Portfolio Area =================-->

  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="js/jquery-3.2.1.min.js"></script>
  <script src="js/popper.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/stellar.js"></script>
  <script src="js/jquery.magnific-popup.min.js"></script>
  <script src="vendors/nice-select/js/jquery.nice-select.min.js"></script>
  <script src="vendors/isotope/imagesloaded.pkgd.min.js"></script>
  <script src="vendors/isotope/isotope-min.js"></script>
  <script src="vendors/owl-carousel/owl.carousel.min.js"></script>
  <script src="js/jquery.ajaxchimp.min.js"></script>
  <script src="js/mail-script.js"></script>
  <!--gmaps Js-->
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCGmQ0Uq4exrzdcL6rvxywDDOvfAu6eE"></script>
  <script src="js/gmaps.min.js"></script>
  <script src="js/theme.js"></script>
</body>
    `;
  }
}

customElements.define('homeportfolio', Header);
