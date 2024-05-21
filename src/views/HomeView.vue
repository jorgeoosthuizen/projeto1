<template>
  <div class="home">
    <div id="carouselExampleControls" class="carousel slide position-relative" data-bs-ride="carousel" data-bs-interval="3500">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/homeimages/hero-img.png" class="d-block w-100 image-cover" alt="starters">
          <div class="carousel-caption">
            <h5>Pokédex</h5>
            <p>Search our Pokédex database with more than 1000 entries!</p>
            <router-link to="/pokedex" class="btn btn-primary">Search</router-link>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/homeimages/maps.jpg" class="d-block w-100 image-cover" alt="maps">
          <div class="carousel-caption">
            <h5>Maps</h5>
            <p>Navigate through the vast regions of the Pokémon world.</p>
            <router-link to="/maps" class="btn btn-primary">Explore</router-link>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-flex">
            <div class="w-50">
              <img src="../assets/homeimages/red.webp" class="d-block w-100 image-top image-cover" alt="red">
            </div>
            <div class="w-50">
              <img src="../assets/homeimages/leaf.png" class="d-block w-100 image-top image-cover" alt="leaf">
            </div>
          </div>
          <div class="carousel-caption">
            <h5>Community</h5>
            <p>Join our Pokémon community, connect with other trainers, show your favorite Pokémon, and more!</p>
            <router-link to="/registo" class="btn btn-primary">Join Now</router-link>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div class="news mt-4">
    <h2>Latest Pokémon News!</h2>
    <div class="card border-0" style="width: 100%;">
  <div class="card-body">
    <h5 class="card-title">News 1</h5>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe voluptates illo eos, eligendi aliquam exercitationem odio architecto quo. Labore sunt minus at veniam aperiam odit voluptate voluptas magni iusto quisquam.
    Molestias tempore quam repellat maxime quaerat reprehenderit, maiores quo, tenetur corporis vero sit eos quas porro! Natus, aliquam molestias. Non tempora qui vel illo id placeat nostrum nam eos omnis.
    </p>
    <a href="#" class="card-link">Read more</a>
  </div>
</div>
<div class="card border-0" style="width: 100%;">
  <div class="card-body">
    <h5 class="card-title">News 2</h5>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam doloribus veritatis maxime quibusdam accusamus dignissimos? Placeat adipisci tempora a repellendus, esse dolor omnis earum laborum facilis iusto id dolorem eligendi!</p>
    <a href="#" class="card-link">Read more</a>
  </div>
</div>
<div class="card border-0" style="width: 100%;">
  <div class="card-body">
    <h5 class="card-title"></h5>
    <h6 class="card-subtitle mb-2 text-muted"></h6>
    <p class="card-text"></p>
    <a href="#" class="card-link"></a>
  </div>
</div>
  </div>
</template>

<style>
  .image-cover {
    object-fit: cover;
    height: 40vh; 
  }
  .image-top {
    object-position: top;
  }

  
  .carousel-caption {
    background-color: rgba(0, 0, 0, 0.5); 
    color: white; 
    padding: 20px; 
    border-radius: 0; 
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

</style>

