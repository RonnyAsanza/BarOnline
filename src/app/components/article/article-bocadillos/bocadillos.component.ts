import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { DataView } from 'primeng/dataview';

//Model
import { Product } from 'src/app/features/article/article.model';
import { ProductBocadillosService } from '../../../services/products/product-bocadillos/product-bocadillos.service';


@Component({
  selector: 'app-bocadillos',
  templateUrl: './bocadillos.component.html',
  styleUrls: ['./bocadillos.component.css']
})
export class BocadillosComponent implements OnInit {
  public filteredProducts: Product[] = [];
  @ViewChild('dv') dataView!: DataView;
  isLoading: boolean = false;

  products: Product[] = []
  product: Product = new Product;
  sortOptions: SelectItem[] = [];
  sortOrder: number = 0;
  sortField: string = "";
  sortKey: boolean = true;
  severity: string = "";

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductBocadillosService) { }

  ngOnInit() {
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];

    this.route.queryParams.subscribe(params => {
      this.filteredProducts = this.productService.getProducts();
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

}
