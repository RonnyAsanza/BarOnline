import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { DataView } from 'primeng/dataview';

//Model
import { Product } from 'src/app/features/article/article.model';
import { DrinkType } from 'src/app/enums/drink-type.enum';
import { ProductService } from '../../../services/products/product-bebidas/product.service';
import { InterceptorService } from '../../../services/interceptor/interceptor.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  public filteredProducts: Product[] = [];
  @ViewChild('dv') dataView!: DataView;
  isLoading: boolean = false;
  isCartVisible: boolean = false;
  selectedProduct: Product = new Product();

  products: Product[] = []
  sortOptions: SelectItem[] = [];
  sortOrder: number = 0;
  sortField: string = "";
  sortKey: boolean = true;
  severity: string = "";

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private interceptorService: InterceptorService) {
  }

  ngOnInit() {
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];

    this.route.queryParams.subscribe(params => {
      let drink = params['drink'];
      let beer = /^\d+$/.test(drink) ? parseInt(drink) : NaN;

      if (beer >= 0 && beer <= 7) {
        this.filterByCategory(beer);
      } else {
        this.router.navigate(['/articles/drinks'], { queryParams: { drink: 0 } });
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
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

  public filterByCategory(categoryId: number) {
    this.isLoading = true;
    if (categoryId == DrinkType.All) {
      this.filteredProducts = this.productService.getProducts();
    }
    else {
      this.filteredProducts = this.productService.getProducts().filter(product => product.category == categoryId);
    }

    // Reinicia la paginación a la primera página
    if (this.dataView) {
      this.dataView.first = 0;
    }
    setTimeout(() => {
      this.isLoading = false;
    }, 500);

  }

  onAddToCart(product: Product) {
    this.selectedProduct = product;
    this.isCartVisible = true;

    this.interceptorService.addProduct(product);
  }
}
