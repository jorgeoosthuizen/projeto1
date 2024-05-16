<template>
  <div class="home">
    <div id="carouselExampleControls" class="carousel slide position-relative" data-bs-ride="carousel" data-bs-interval="4000">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/homeimages/starters.webp" class="d-block w-100 image-cover image-top" alt="starters">
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
</template>

<style>
  .image-cover {
    object-fit: cover;
    height: 40vh; /* Set the desired height */
  }
  .image-top {
    object-position: top;
  }

  /* Opaque effect */
  .carousel-caption {
    background-color: rgba(0, 0, 0, 0.5); /* Change 0.5 to control opacity */
    color: white; /* Text color */
    padding: 20px; /* Adjust padding as needed */
    border-radius: 0; /* Remove border-radius */
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%; /* Occupying full height of the carousel */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

</style>

