const navComponent = {
    template: `<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Amzon</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" @click="home">Home</a>
            </li>
            
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchQuery" @keyup="search">
            <button class="btn btn-outline-success" type="button">Search</button>
          </form>
        </div>
      </div>
    </nav>`,

    data() {
        return {
            searchQuery: ''
        };
    },

    methods: {
        search() {
            this.$emit('search', this.searchQuery);
        },

        home(){
            this.$emit('home');
        }
    }
}