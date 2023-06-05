import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

//Model
import { Product } from 'src/app/features/article/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit{
  products: Product[] = []
  product: Product = new Product;
  sortOptions: SelectItem[] = [];
  sortOrder: number = 0;
  sortField: string = "";
  sortKey: boolean = true;
  severity: string = "";

  constructor() {}

  createRandomProduct(product: Product): Product {
    let addProduct = new Product();
    addProduct.name = product.name;
    addProduct.image = product.image;
    addProduct.stock = product.stock;
    addProduct.price = product.price;
    addProduct.rating = product.rating;
    addProduct.category = product.category;
    addProduct.inventoryStatus = addProduct.stock < 1 ? "OUTOFSTOCK" : addProduct.stock > 36 ? "IN_STOCK" : "LOWSTOCK";
    addProduct.severity = this.getSeverity(product);
    console.log(product);
    return addProduct;
  }

  ngOnInit() {
    const product1: Product = {
      name: 'San Miguel 33cl',
      image: '../../../assets/sanmiguel33.jpg',
      stock: 49,
      price: 1.99,
      rating: 4.5,
      category: 'Cerveza'
    };
    product1.inventoryStatus = product1.stock < 1 ? "OUTOFSTOCK" : product1.stock > 36 ? "IN_STOCK" : "LOWSTOCK";

    const product2: Product = {
      name: 'Estrella Damm 33cl',
      image: '../../../assets/estrelladamm.jpg',
      stock: 15,
      price: 2.99,
      rating: 3.8,
      category: 'Cerveza'
    };
    product2.inventoryStatus = product2.stock < 1 ? "OUTOFSTOCK" : product2.stock > 36 ? "IN_STOCK" : "LOWSTOCK";

    const product3: Product = {
      name: 'Estrella Galicia 33cl',
      image: '../../../assets/estrellagalicia.jpg',
      stock: 0,
      price: 3.99,
      rating: 3.8,
      category: 'Cerveza'
    };
    product3.inventoryStatus = product3.stock < 1 ? "OUTOFSTOCK" : product3.stock > 36 ? "IN_STOCK" : "LOWSTOCK";

    this.products.push(this.createRandomProduct(product1));
    this.products.push(this.createRandomProduct(product2));
    this.products.push(this.createRandomProduct(product3));

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];

  }

  getSeverity (product: Product) {
    console.log("--:"+product.inventoryStatus);
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return '';
    }
  };

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    } else {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }

}
