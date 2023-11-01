let ProductListingComponent = {
    template: `<div class="container my-5">
        <div class="row ">
            <div class="col-md-7 ">
                <div class="row sticky-top">
                    <div class="col-md-2 image-stack">
                        <div class="row" v-for="(image,index) in product.images":key="index">
                            <img :src="image" alt="Product Image" class="img-fluid " 
                            @mouseover="changeImage(index)">
                        </div>
                        
                    </div>
                    
                    <div class="col-md-10">
                        <div >
                            <img :src="selectedImg" alt="Product Image" class="img-fluid " >
                        </div>
                    </div>
                </div>
    
            </div>
            <div class="col-md-5">
                <h2>{{product.title}}</h2>
                <p class="text-muted">Category: Electronics</p>
                <p class="lead">$199.99
                    <button class="btn btn-primary">Add to Cart</button>
                </p>
    
                <p>Free Shipping for Prime Members</p>
                <hr>
                <h5>Description:</h5>
                <p>{{product.description}}</p>
                <hr>
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <p>Color: <span class="text-primary">Black</span></p>
                        <p>Size: <span class="text-primary">Medium</span></p>
                    </div>
                    <div>
                        <p>Rating: <span class="text-warning">4.5</span> (2456 reviews)</p>
                    </div>
                </div>
                <hr>
                <div class="row justify-content-between">
                    <div class="col-md-6">
                        <h5>Features:</h5>
                        <ul>
                            <li>High-resolution display</li>
                            <li>Fast performance</li>
                            <li>Long battery life</li>
                        </ul>
                    </div>
                    <hr class="d-block d-md-none">
                    <div class="col-md-6">
                        <h5>In the box:</h5>
                        <ul>
                            <li>Product</li>
                            <li>Charger</li>
                            <li>Manual</li>
                        </ul>
                    </div>
                </div>
    
                <button class="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    </div>`,

    props: ['product'],

    data() {
        return {
            selectedImg: this.product.images[0]
        };
    },

    methods: {
        changeImage(index){
            this.selectedImg = this.product.images[index];
        }
    }
}