import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { ViewChild } from '@angular/core';
import { DataView } from 'primeng/dataview';

//Model
import { Product } from 'src/app/features/article/article.model';
import { ProductBocadillosService } from '../../../services/products/product-bocadillos/product-bocadillos.service';
import { InterceptorService } from '../../../services/interceptor/interceptor.service';

@Component({
  selector: 'app-bocadillos',
  templateUrl: './bocadillos.component.html',
  styleUrls: ['./bocadillos.component.css']
})
export class BocadillosComponent implements OnInit {
  public filteredProducts: Product[] = [];
  @ViewChild('dv') dataView!: DataView;
  isLoading: boolean = false;
  isCartVisible: boolean = false;
  selectedProduct: Product = new Product();

  products: Product[] = []
  product: Product = new Product;
  sortOptions: SelectItem[] = [];
  sortOrder: number = 0;
  sortField: string = "";
  sortKey: boolean = true;
  severity: string = "";

  constructor(private route: ActivatedRoute,
    private productService: ProductBocadillosService,
    private interceptorService: InterceptorService) { }

  ngOnInit() {
    this.isLoading = true;

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];

    this.route.queryParams.subscribe(params => {
      this.filteredProducts = this.productService.getProducts();
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

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

  onAddToCart(product: Product) {
    this.selectedProduct = product;
    this.isCartVisible = true;

    this.interceptorService.addProduct(product);
  }

}
