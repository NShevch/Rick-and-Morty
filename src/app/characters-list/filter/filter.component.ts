import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  // characters!: Character[];
  // productsFiltered!: Product[];
  // productName!: string;
  // @Output() inputEvent = new EventEmitter<Product[]>();

  // constructor(private productsData: ProductsData) { }

  ngOnInit(): void {
    // this.products = this.productsData.get();
  }

  // onInput() {
  //   this.productsFiltered = this.products.filter((product) => {
  //     return new RegExp(this.productName, "i").test(product.name);
  //   });
  //   this.inputEvent.emit(this.productsFiltered);
  // }

}
