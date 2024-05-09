<template>
  <div class="home">
    <div class="row no-gutters">
      <div class="col-md-4">
        <div class="card h-100 border-0">
          <img src="../assets/homeimages/starters.webp" class="card-img-top" alt="starters" style="width: 100%; height: 300px;" />
          <div class="card-body">
            <h5 class="card-title mb-0">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="./pokedex" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 border-0">
          <img src="../assets/homeimages/maps.jpg" class="card-img-top" alt="maps" style="width: 100%; height:300px;" />
          <div class="card-body">
            <h5 class="card-title mb-0">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 border-0">
          <div class="d-flex">
            <div style="width: 50%;">
              <img src="../assets/homeimages/red.webp" class="card-img-top" alt="red" style="width: 100%; height: 300px;" />
            </div>
            <div style="width: 50%; background-color: white;">
              <img src="../assets/homeimages/leaf.png" class="card-img-top" alt="leaf" style="width: 100%; height: 300px;" />
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title mb-0">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <router-link to="/registo" class="btn btn-primary">Join the community!</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



