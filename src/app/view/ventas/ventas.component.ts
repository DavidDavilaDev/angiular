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
}
