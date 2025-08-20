import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories: any[] = [];

  categoryImages: { [key: string]: string } = {
    'beauty': 'https://www.shutterstock.com/image-photo/makeup-artist-applies-powder-blush-600nw-1805797540.jpg',
    'fragrances': 'https://www.shutterstock.com/image-photo/kuala-lumpur-malaysia-november-10-600nw-2229470295.jpg',
    'furniture': 'https://www.realsimple.com/thmb/kRRAaK6XhZIqL_GFIxfZzHTHx7o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/furniture-styles-GettyImages-1467984982-512fed4077b646eabbc187619554d517.jpg',
    'groceries': 'https://media.istockphoto.com/id/1449032425/photo/shopping-bag-full-of-healthy-food-on-blue.jpg?s=612x612&w=0&k=20&c=856XpqRgq8Bj9Mr28VzAdW-iTyHEj_dW01m6SPPHsOU=',
    'home-decoration': 'https://www.nawy.com/blog/wp-content/uploads/2022/06/Home-Decor.jpg',
    'kitchen-accessories': 'https://www.fitzgeraldkitchens.com/wp-content/uploads/2019/02/Kitchen-Accessories-Introduction-Fitzgerald-Kitchens.jpg',
    'laptops': 'https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopstopicpage-2048px-3685-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp',
    'mens-shirts': 'https://nicksonshirts.com/wp-content/uploads/2021/06/casual-shirt-model-front-picture-with-a-grey-background.jpg',
    'mens-shoes': 'https://images.unsplash.com/photo-1668069226492-508742b03147?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
    'mens-watches': 'https://media.istockphoto.com/id/533714204/photo/businessman-checking-time-from-watch.jpg?s=612x612&w=0&k=20&c=bJN94WW68Rw8uEogp3GKtBYnhcrNFNnf1SkWb0KDvGo=',
    'mobile-accessories': 'https://plus.unsplash.com/premium_photo-1666739388750-735b21d11a4f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmUlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D',
    'motorcycle': 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW90b3JjeWNsZXxlbnwwfHwwfHx8MA%3D%3D',
    'skin-care': 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'sports-accessories': 'https://plus.unsplash.com/premium_photo-1709932755399-b61bb0a3aa2a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'smartphones': 'https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnRwaG9uZXN8ZW58MHx8MHx8fDA%3D',
    'sunglasses': 'https://images.unsplash.com/photo-1608539733292-190446b22b83?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D',
    'tablets': 'https://images.unsplash.com/photo-1622531636820-5d727319e45d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFibGV0c3xlbnwwfHwwfHx8MA%3D%3D',
    'tops': 'https://images.unsplash.com/photo-1525171254930-643fc658b64e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG9wc3xlbnwwfHwwfHx8MA%3D%3D',
    'vehicle': 'https://images.unsplash.com/photo-1584809394311-364392a5011b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZlaGljbGV8ZW58MHx8MHx8fDA%3D',
    'womens-bags': 'https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'womens-dresses': 'https://plus.unsplash.com/premium_photo-1674327105316-1264a6429e18?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBkcmVzc2VzfGVufDB8fDB8fHww',
    'womens-jewellery': 'https://images.unsplash.com/photo-1683099869102-bcf8791eb0e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWFucyUyMGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D',
    'womens-shoes': 'https://images.unsplash.com/photo-1621996659490-3275b4d0d951?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWFuJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
    'womens-watches': 'https://images.unsplash.com/photo-1653651460706-987af3f8eb61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjB3YXRjaGVzfGVufDB8fDB8fHww',
  };

  constructor(private _DataService: DataService) {
    this._DataService.getCategory().subscribe((data) => {
      this.categories = data.map((category: string) => {
        return {
          name: category,
          image: this.categoryImages[category.toLowerCase()] || 'https://via.placeholder.com/120' // fallback image
        };
      });
    });
  }
}