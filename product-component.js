const productComponent = {
    template: `<div class="col-md-6 col-lg-4 " v-for="(product,index) in products" :key="index">
                <div class="card" style="width: 100%;">
                    <img :src="product.thumbnail" class="card-img-top" alt="Product Image" 
                    @click="select(index)">
                    <div class="card-body">
                        <h5 class="card-title">{{product.title}}</h5>
                        <p class="card-text">{{product.description}}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price: {{product.price}}</li>
                        <li class="list-group-item">In Stock: {{product.stock}}</li>
                        <li class="list-group-item">Rating: ★★★★☆</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div>`,

    props:['products'],

    methods: {
        select(index){
            this.$emit('select', index);
        }
    }
};