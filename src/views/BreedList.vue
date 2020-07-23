<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->   
      <!--for loop section-->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
              <div class="container">
                <div class="row row-grid align-items-center">
                  <div class="col-md-6">
                    <h3>American Shorthair</h3>
                    <div class="card bg-default shadow border-0" @click="modals.modal1 = true"> 
                      <b-carousel id="carousel1"  controls indicators>
                        <!-- Text slides with image -->
                        <b-carousel-slide img-src="img/CatImages/AmericanShorthair/1.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/AmericanShorthair/2.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/AmericanShorthair/3.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/AmericanShorthair/4.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/AmericanShorthair/5.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/AmericanShorthair/6.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/AmericanShorthair/7.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/AmericanShorthair/8.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/AmericanShorthair/9.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/AmericanShorthair/10.jpg"></b-carousel-slide>
                      </b-carousel>
                    </div>
                    <modal :show.sync="modals.modal1">
                        <h6 slot="header" class="modal-title" id="modal-title-default">American Shorthair</h6>
                        <p>The American Shorthair (ASH) is a breed of domestic cat believed to be descended from European cats brought 
                          to North America by early settlers to protect valuable cargo from mice and rats.
                          According to the Cat Fanciers' Association, in 2012, it was the seventh most popular pedigreed 
                          cat in the United States.</p>
                        <template slot="footer">
                            <router-link to="/postdetail"><base-button type="primary" >Post your own cats!</base-button></router-link>
                            <base-button type="link" class="ml-auto" @click="modals.modal1 = false">Close
                            </base-button>
                        </template>
                    </modal>
                  </div>
                  <div class="col-md-6">
                    <h3>Bengal</h3>
                    <div class="card bg-default shadow border-0" @click="modals.modal2 = true">
                      <b-carousel id="carousel1" controls indicators>
                        <!-- Text slides with image -->
                        <b-carousel-slide img-src="img/CatImages/Bengal/1.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Bengal/2.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Bengal/3.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Bengal/4.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Bengal/5.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Bengal/6.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Bengal/7.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Bengal/8.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Bengal/9.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Bengal/10.jpg"></b-carousel-slide>
                      </b-carousel>
                    </div>
                    <modal :show.sync="modals.modal2">
                        <h6 slot="header" class="modal-title" id="modal-title-default">Bengal</h6>

                        <p>The Bengal cat is a domesticated cat breed created from hybrids of domestic cats, especially
                           the spotted Egyptian Mau, with the Asian leopard cat (Prionailurus bengalensis). 
                           The breed name comes from the leopard cat's taxonomic name.
                          Bengals have a wild appearance; their golden shimmer comes from their Leopard Cat ancestry, 
                          and their coats may show spots, rosettes, arrowhead markings, or marbling. 
                          They are an energetic breed which needs much exercise and play.</p>
                        <template slot="footer">
                          <router-link to="/postdetail"><base-button type="primary" >Post your own cats!</base-button></router-link>
                            <base-button type="link" class="ml-auto" @click="modals.modal2 = false">Close
                            </base-button>
                        </template>
                    </modal>                    
              </div>
            </div>
          </div>
        </div>
        <div class="container shape-container d-flex">
             <div class="container">
                <div class="row row-grid align-items-center">
                  <div class="col-md-6">
                    <h3>Bombay</h3>
                    <div class="card bg-default shadow border-0" @click="modals.modal3 = true">
                      <b-carousel id="carousel1" controls indicators>
                        <!-- Text slides with image -->
                        <b-carousel-slide img-src="img/CatImages/Bombay/1.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Bombay/2.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Bombay/3.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Bombay/4.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Bombay/5.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Bombay/6.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Bombay/7.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Bombay/8.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Bombay/9.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Bombay/10.jpg"></b-carousel-slide>
                      </b-carousel>
                    </div>
                    <modal :show.sync="modals.modal3">
                        <h6 slot="header" class="modal-title" id="modal-title-default">Bombay</h6>

                        <p>The Bombay cat is a type of short-haired cat developed by breeding sable Burmese and black 
                          American Shorthair cats, to produce a cat of mostly Burmese type, but with a sleek, 
                          panther-like black coat. Bombay is the name given to black cats of the Asian group.
                           The Bombay cat is also called the Black Mamba, and nicknamed the "mini-panther".</p>
                      
                        <template slot="footer">
                          <router-link to="/postdetail"><base-button type="primary" >Post your own cats!</base-button></router-link>
                            <base-button type="link" class="ml-auto" @click="modals.modal3 = false">Close
                            </base-button>
                        </template>
                    </modal> 
                  </div>
                  <div class="col-md-6">
                    <h3>Calico</h3>
                    <div class="card bg-default shadow border-0" @click="modals.modal4 = true">
                      <b-carousel id="carousel1" controls indicators>
                        <!-- Text slides with image -->
                        <b-carousel-slide img-src="img/CatImages/Calico/1.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Calico/2.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Calico/3.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Calico/4.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Calico/5.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Calico/6.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Calico/7.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Calico/8.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Calico/9.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Calico/10.jpg"></b-carousel-slide>
                      </b-carousel>
                    </div>
                    <modal :show.sync="modals.modal4">
                        <h6 slot="header" class="modal-title" id="modal-title-default">Calico</h6>
                        <p>A calico cat is a domestic cat with a coat that is typically 25% to 75% white with large 
                          orange and black patches (or sometimes cream and grey patches). They are the Maryland state cat. 
                          They are almost exclusively female except under rare genetic conditions. 
                          A calico is not to be confused with a tortoiseshell, which has a mostly 
                          mottled coat of black/orange or grey/cream with relatively few to no white markings. 
                          However, outside North America, the calico pattern is more usually called tortoiseshell 
                          and white[citation needed]. In the province of Quebec, Canada, they are sometimes called 
                          chatte d'Espagne (French for '(female) cat of Spain'). Other names include brindle, tricolor cat, 
                          tobi mi-ke (Japanese for 'triple fur'), and lapjeskat (Dutch for 'patches cat'); calicoes with 
                          diluted coloration have been called calimanco or clouded tiger. Occasionally, the tri-color 
                          calico coloration is combined with a tabby patterning; this calico-patched tabby is called a caliby.</p>

                        <template slot="footer">
                          <router-link to="/postdetail"><base-button type="primary" >Post your own cats!</base-button></router-link>
                            <base-button type="link" class="ml-auto" @click="modals.modal4 = false">Close
                            </base-button>
                        </template>
                    </modal>           
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
              <div class="container">
                <div class="row row-grid align-items-center">
                  <div class="col-md-6">
                    <h3>Domestic Longhair</h3>
                    <div class="card bg-default shadow border-0" @click="modals.modal5 = true">
                      <b-carousel id="carousel1" controls indicators>
                        <!-- Text slides with image -->
                        <b-carousel-slide img-src="img/CatImages/DomesticLongHair/1.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DomesticLongHair/2.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DomesticLongHair/3.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DomesticLongHair/4.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DomesticLongHair/5.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DomesticLongHair/6.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DomesticLongHair/7.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DomesticLongHair/8.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DomesticLongHair/9.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DomesticLongHair/10.jpg"></b-carousel-slide>
                      </b-carousel>
                    </div>
                    <modal :show.sync="modals.modal5">
                        <h6 slot="header" class="modal-title" id="modal-title-default">Domestic Longhair</h6>

                        <p>A domestic long-haired cat is a cat of mixed ancestry – thus not belonging to any particular recognised cat breed – 
                          possessing a coat of semi-long to long fur.[1] Domestic long-haired cats should not be confused with the British Longhair, 
                          American Longhair, or other breeds with "Longhair" names, which are standardized breeds defined by various registries. 
                          Domestic long-haireds are the second most popular cat in the United States after the domestic short-haired;
                          one in ten of the 90 million cats in the US is a domestic long-hair.
                          Other generic terms are long-haired house cat and, in British English, long-haired moggie.</p>
                        <template slot="footer">
                         <router-link to="/postdetail"><base-button type="primary" >Post your own cats!</base-button></router-link>
                            <base-button type="link" class="ml-auto" @click="modals.modal5 = false">Close
                            </base-button>
                        </template>
                    </modal> 
                  </div>
                  <div class="col-md-6">
                    <h3>Domestic Shorthair</h3>
                    <div class="card bg-default shadow border-0" @click="modals.modal6 = true">
                      <b-carousel id="carousel1" controls indicators>
                        <!-- Text slides with image -->
                        <b-carousel-slide img-src="img/CatImages/DomesticShortHair/1.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DomesticShortHair/2.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DomesticShortHair/3.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DomesticShortHair/4.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DomesticShortHair/5.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DomesticShortHair/6.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DomesticShortHair/7.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DomesticShortHair/8.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DomesticShortHair/9.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DomesticShortHair/10.jpg"></b-carousel-slide>
                      </b-carousel>
                    </div>
                    <modal :show.sync="modals.modal6">
                        <h6 slot="header" class="modal-title" id="modal-title-default">Domestic Shorthair</h6>

                        <p>A domestic short-haired cat is a cat of mixed ancestry—thus not belonging to any particular 
                          recognized cat breed—possessing a coat of short fur. In British English, they are often referred 
                          to as moggies. Domestic short-haired cats should not be confused with the British Shorthair, 
                          American Shorthair, or other standardized breeds with "Shorthair" names, which are breeds 
                          recognized by various registries. Domestic short-haireds are the most common cat in the United States,
                           accounting for around 90–95% of their number. Other generic terms include house cat and alley 
                           cat (the latter may be used more specifically to refer to feral individuals). The term tabby cat 
                           technically refers to a coat pattern, but is also often used as a general terms for cats of this sort.</p>
                        <template slot="footer">
                          <router-link to="/postdetail"><base-button type="primary" >Post your own cats!</base-button></router-link>
                            <base-button type="link" class="ml-auto" @click="modals.modal6 = false">Close
                            </base-button>
                        </template>
                    </modal> 
              </div>
            </div>
          </div>
        </div>
        <div class="container shape-container d-flex">
             <div class="container">
                <div class="row row-grid align-items-center">
                  <div class="col-md-6">
                    <h3>Manx</h3>
                    <div class="card bg-default shadow border-0" @click="modals.modal7 = true">
                      <b-carousel id="carousel1" controls indicators>
                        <!-- Text slides with image -->
                        <b-carousel-slide img-src="img/CatImages/Manx/1.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Manx/2.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Manx/3.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Manx/4.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Manx/5.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Manx/6.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Manx/7.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Manx/8.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Manx/9.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Manx/10.jpg"></b-carousel-slide>
                      </b-carousel>
                    </div>
                    <modal :show.sync="modals.modal7">
                        <h6 slot="header" class="modal-title" id="modal-title-default">Manx</h6>

                        <p>The Manx cat (/ˈmæŋks/, in earlier times often spelled Manks) is a breed of domestic cat (Felis catus) 
                          originating on the Isle of Man, with a naturally occurring mutation that shortens the tail.
                           Many Manx have a small stub of a tail, but Manx cats are best known as being entirely tailless; 
                           this is the most distinguishing characteristic of the breed, along with elongated hind legs and a
                            rounded head. Manx cats come in all coat colours and patterns, though all-white specimens are rare, 
                            and the coat range of the original stock was more limited. Long-haired variants are sometimes
                             considered a separate breed, the Cymric.</p>

                        <template slot="footer">
                          <router-link to="/postdetail"><base-button type="primary" >Post your own cats!</base-button></router-link>
                            <base-button type="link" class="ml-auto" @click="modals.modal7 = false">Close
                            </base-button>
                        </template>
                    </modal> 
                  </div>
                  <div class="col-md-6">
                    <h3>Dilute Tortoise</h3>
                    <div class="card bg-default shadow border-0" @click="modals.modal8 = true">
                      <b-carousel id="carousel1" controls indicators>
                        <!-- Text slides with image -->
                        <b-carousel-slide img-src="img/CatImages/DiluteTortoiseshell/1.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DiluteTortoiseshell/2.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DiluteTortoiseshell/3.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DiluteTortoiseshell/4.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DiluteTortoiseshell/5.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DiluteTortoiseshell/6.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DiluteTortoiseshell/7.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DiluteTortoiseshell/8.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DiluteTortoiseshell/9.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/DiluteTortoiseshell/10.jpg"></b-carousel-slide>
                      </b-carousel>
                    </div>  
                    <modal :show.sync="modals.modal8">
                        <h6 slot="header" class="modal-title" id="modal-title-default">Dilute Tortoise</h6>

                        <p>Tortie is short for “tortoiseshell”, a popular coat pattern seen on many cat breeds.
                          Standard torties have a mix of orange and black fur, either finely interspersed (a brindle tortie), 
                          in big splodges (a patchwork tortie), or somewhere in between (just a tortoiseshell tortie!)
                          Dilute tortie cats have a tortoiseshell coat pattern with one remarkable difference: 
                          instead of the striking, dark mix of orange and black, dilute tortoiseshell cats have a muted, 
                          almost blue and yellow color. </p>

                        <template slot="footer">
                          <router-link to="/postdetail"><base-button type="primary" >Post your own cats!</base-button></router-link>
                            <base-button type="link" class="ml-auto" @click="modals.modal8 = false">Close
                            </base-button>
                        </template>
                    </modal>         
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
              <div class="container">
                <div class="row row-grid align-items-center">
                  <div class="col-md-6">
                    <h3>Persian</h3>
                    <div class="card bg-default shadow border-0" @click="modals.modal9 = true">
                      <b-carousel id="carousel1" controls indicators>
                        <!-- Text slides with image -->
                        <b-carousel-slide img-src="img/CatImages/Persian/1.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Persian/2.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Persian/3.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Persian/4.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Persian/5.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Persian/6.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Persian/7.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Persian/8.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Persian/9.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Persian/10.jpg"></b-carousel-slide>
                      </b-carousel>
                    </div>
                    <modal :show.sync="modals.modal9">
                        <h6 slot="header" class="modal-title" id="modal-title-default">Persian</h6>

                        <p>Traditional Persian is one of several names for a group of cats that are considered to be 
                          essentially the original breed of Persian cat, before the variety was selectively bred to 
                          have extreme features. Other everyday usage names are: Doll Face Persian, Classic Persian,
                           Old Fashioned Persian, Long-nosed Persian, Old-style Longhair, Traditional Longhair and Original Longhair.</p>

                        <template slot="footer">
                         <router-link to="/postdetail"><base-button type="primary" >Post your own cats!</base-button></router-link>
                            <base-button type="link" class="ml-auto" @click="modals.modal9 = false">Close
                            </base-button>
                        </template>
                    </modal> 
                  </div>
                  <div class="col-md-6">
                    <h3>Ragdoll</h3>
                    <div class="card bg-default shadow border-0" @click="modals.modal10 = true">
                      <b-carousel id="carousel1" controls indicators>
                        <!-- Text slides with image -->
                        <b-carousel-slide img-src="img/CatImages/Ragdoll/1.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Ragdoll/2.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Ragdoll/3.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Ragdoll/4.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Ragdoll/5.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Ragdoll/6.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Ragdoll/7.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Ragdoll/8.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Ragdoll/9.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/CatImages/Ragdoll/10.jpg"></b-carousel-slide>
                      </b-carousel>
                    </div>
                    <modal :show.sync="modals.modal10">
                        <h6 slot="header" class="modal-title" id="modal-title-default">Ragdoll</h6>

                        <p>The Ragdoll is a cat breed with a color point coat and blue eyes. They are large and muscular 
                          semi-longhair cats with a soft and silky coat. Developed by American breeder Ann Baker in the 
                          1960s, they are best known for their docile and placid temperament and affectionate nature. 
                          The name "Ragdoll" is derived from the tendency of individuals from the original breeding stock
                           to go limp and relaxed when picked up.
                          Particularly popular in both the United Kingdom and the breed's native United States, 
                          ragdoll cats are often known as "dog-like cats" or "puppy-like cats" due to such behaviors 
                          as their tendency to follow people around, their ease when physically handled, and their 
                          relative lack of aggression toward other pets.</p>

                        <template slot="footer">
                          <router-link to="/postdetail"><base-button type="primary" >Post your own cats!</base-button></router-link>
                            <base-button type="link" class="ml-auto" @click="modals.modal10 = false">Close
                            </base-button>
                        </template>
                    </modal> 
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
  </div>
</template>

<script>
/*TODO: In this path, search bar will display result base on the text of user posts*/
import Carousel from "./components/Carousel";
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";
import Images from "./components/JavascriptComponents/Images";
import Modal from "@/components/Modal.vue";

export default {
  name: "home",
  data() {
    return {
      modals: {
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        modal5: false,
        modal6: false,
        modal7: false,
        modal8: false,
        modal9: false,
        modal10: false,
      }
    };
  },
  components: {
    Carousel,
    BCarousel,
    BCarouselSlide,
    Images,
    Modal
  }
};
</script>
