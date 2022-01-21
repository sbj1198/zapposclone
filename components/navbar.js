function navbar(){
    return `
    <div>
    <header class="headr">
      <div class="first_navbar">
        <nav class="navbar">
          <ul class="navul">
            <li class="ul_li">
              <a href="/" class="li_a" style="background-color: #0076bd">
                <img
                  style="filter: brightness(0) invert(1)"
                  class="a_img"
                  src="https://m.media-amazon.com/images/G/01/zappos/melody/black-logo.svg"
                  alt="Zappos"
                />
              </a>
            </li>
            <li class="ul_li">
              <a href="/" class="li_a">
                <img
                  style="filter: brightness(0)"
                  class="a_img"
                  src="https://m.media-amazon.com/images/G/01/vrsnl/vrsnl-logo._CB1564076501_.svg"
                  alt="vrsnl"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="second_navbar">
        <div class="inside_header">
          <div class="inh1">
            <a href="#" class="cust">Customer Service</a>
            <ul>
              <li>
                <a href="#">Contact Info</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Give Us Feedback</a>
              </li>
              <li>
                <button type="button"></button>
              </li>
            </ul>
          </div>
          <div class="inh2">
            <p>
              <strong>Text us (833) 927-7898</strong>
            </p>
          </div>
          <a class="inh3" href="#">
            <p>
              Try select running shoes for 30 days & return them if you’re not
              100% satisfied!
              <strong>More about Runlimited</strong>
            </p>
          </a>
        </div>
      </div>
      <div class="search_section">
        <div class="inh1">
          <a class="logo_img" href="./index.html">
            <img
              src="https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg"
              alt="Welcome! Go to Zapposclone.com Homepage!"
              height="50"
            />
          </a>
          <div class="sear">
            <form class="form_class" action="">
              <input
                id="search"
                type="text"
                placeholder="Search for Shoes, Clothes, etc."
                ,
                autocomplete="off"
              />
              <label for="search">Search for Shoes, Clothes, etc.</label>
              <button type="submit">Search</button>
            </form>
          </div>
          <a class="cart" href="#"> My Cart </a>
          <nav class="types_navbar">
            <ul>
              <li>
                <a class="types_head" href="#"> New </a>
                <div class="types_container">
                  <button type="button">New</button>
                  <div class="types_div">
                    <section>
                      <a class="a-sec b-sec" href="#">The Find</a>
                      <ul class="ul_types_list">
                        <li><a href="#">The Cozy Shop</a></li>
                        <li><a href="#">The Cozy Loungewear Edit</a></li>
                        <li><a href="#">Look Cute In Cold Weather</a></li>
                        <li>
                          <a href="#">Chill Fits for Chilly Campouts</a>
                        </li>
                        <li><a href="#">Luxe Cozy Looks</a></li>
                        <li>
                          <a href="#">The Fall/Winter Plus-Size Edit</a>
                        </li>
                        <li><a href="#">The Ultimate Boot Guide</a></li>
                        <li><a href="#">Best Coats for Bundling Up</a></li>
                        <li><a href="#">The Find New Arrivals</a></li>
                      </ul>
                    </section>
                    <section>
                      <a class="a-sec b-sec" href="#">The Style Room</a>
                      <ul class="ul_types_list">
                        <li><a href="#">Seasonless Style</a></li>
                        <li><a href="#">Noughties Rodeo</a></li>
                        <li><a href="#">Workleisure</a></li>
                        <li><a href="#">Upleveled Downtime</a></li>
                        <li><a href="#">Coastal Craft</a></li>
                        <li><a href="#">Men’s Better Basics</a></li>
                        <li><a href="#">Men’s Everyday Performance</a></li>
                        <li><a href="#">Men’s Cozy Getaway</a></li>
                      </ul>
                    </section>
                    <section>
                      <a class="a-sec b-sec" href="#">New Brands</a>
                      <ul class="ul_types_list">
                        <li><a href="#">Fairfax and Favor</a></li>
                        <li><a href="#">Milwaukee Boot Co</a></li>
                        <li><a href="#">MaCae</a></li>
                        <li><a href="#">Moral Code</a></li>
                        <li><a href="#">UGG® Universal</a></li>
                        <li><a href="#">Rebel Nell</a></li>
                        <li><a href="#">CoFi</a></li>
                        <li><a href="#">MANGO</a></li>
                        <li><a href="#">SOREL Universal</a></li>
                      </ul>
                    </section>
                    <section>
                      <a class="a-sec b-sec" href="#">New Arrivals</a>
                      <li><a href="#">Candles</a></li>
                      <li><a href="#">Dining & Entertainment</a></li>
                      <li><a href="#"></a>Bedding & Blankets</li>
                      <li><a href="#">Hunter Meets Mickey</a></li>
                      <li><a href="#">Toys & Games</a></li>
                    </section>
                    <section>
                      <aside>
                        <a href=""
                          ><img src="" alt="" />
                          <p></p>
                        </a>
                      </aside>
                      <aside>
                        <a href=""
                          ><img src="" alt="" />
                          <p></p>
                        </a>
                      </aside>
                    </section>
                  </div>
                </div>
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </div>
    `;
}
export default navbar;