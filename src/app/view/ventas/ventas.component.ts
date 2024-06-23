import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();

  close() {
    this.closeSidenav.emit();
  }

  productList!: MatTableDataSource<Producto>;
  products: Producto[] = [];  // Array to hold all products
  subtotal: number = 0;  
  iva: number = 0;   
  productQuantities: { [key: string]: number } = {};

  constructor(private productService: ProductoService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.productListMethod();
  }

  productListMethod() {
    try {
      this.productService.getProducts()
        .subscribe(items => {
          this.products = items;  // Assign all products to the array
          this.productList = new MatTableDataSource(this.products);  // Initialize dataSource with all products
        });
    } catch (error) {
      console.log(error);
    }
  }

  // Method to handle addition of product price to subtotal
  addToSubtotal(product: Producto) {
    this.subtotal += product.price;
    this.updateIVA();
    if (this.productQuantities[product.name]) {
      this.productQuantities[product.name] += 1;
    } else {
      this.productQuantities[product.name] = 1;
    }
  }

  // Method to calculate the IVA
  updateIVA() {
    this.iva = this.subtotal * 0.16;
  }

  // Method to get the list of product names
  getProductNames(): string[] {
    return Object.keys(this.productQuantities);
  }
}
