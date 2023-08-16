import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/features/article/article.model';
import { SelectItem } from 'primeng/api';
import { OffersService } from '../../services/products/offers/offers.service';
import { ActivatedRoute } from '@angular/router';
import { InterceptorService } from '../../services/interceptor/interceptor.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private offersService: OffersService,
    private interceptorService: InterceptorService) { }

  public filteredProducts: Product[] = [];
  sortOptions: SelectItem[] = [];
  selectedProduct: Product = new Product();
  isCartVisible: boolean = false;
  isLoading: boolean = false;
  sortOrder: number = 0;
  sortField: string = "";
  sortKey: boolean = true;

  ngOnInit() {
    this.isLoading = true;


    this.route.queryParams.subscribe(params => {
      this.filteredProducts = this.offersService.getOffers();
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
