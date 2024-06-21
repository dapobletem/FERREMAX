import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ProductoService } from '../servicios/producto.service';
import { producto } from '../models/producto';
import { HttpClient } from '@angular/common/http';
import { DolarService } from '../servicios/dolar.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class DetalleProductoPage implements OnInit {

  id:any;
  id_product: any;
  det_producto?: producto ;
  precioProducto?: any;
  nombreFoto: any;
  constructor(private router: Router, 
              private activateRoute: ActivatedRoute,
              private navCtrl: NavController,
              private productoService : ProductoService,
              private http: HttpClient ) 
  { 
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && state['det_producto']) {
    this.det_producto = state['det_producto'];
    }
  }


  ngOnInit() {
    console.log(this.det_producto)
    console.log(this.det_producto?.id_producto)
    this.id=this.det_producto?.id_producto
  }



  async confirmarEliminacion() {
    const confirmacion = confirm('¿Estás seguro de que quieres eliminar este producto?');
  
    if (confirmacion) {
      await this.EliminarProducto();
    } else {
      console.log('Eliminación cancelada');
      // Aquí puedes manejar la cancelación según sea necesario
    }
  }
  
  async EliminarProducto() {
    this.id = this.det_producto?.id_producto;
    this.nombreFoto = this.det_producto?.imagen;
    console.log(this.id);
  
    try {
      // Llamar al servicio para eliminar el producto
      await this.productoService.deleteProduct(this.id).toPromise();
      console.log('Producto eliminado correctamente');
  
      // Llamar a la función para eliminar la foto
      await this.eliminarFoto(this.nombreFoto);
  
      // Mostrar mensaje de éxito
      alert('Producto y foto eliminados correctamente');
  
      // Navegar a la página de productos y recargar la página
      this.router.navigate(['/producto']).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error('Error al eliminar producto:', error);
      alert('Error al eliminar el producto y/o la foto');
      // Manejar el error según sea necesario
    }
  }
  
  eliminarFoto(nombreFoto: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.delete<any>(`http://localhost:5000/eliminar_foto/${nombreFoto}`).subscribe(
        (response) => {
          console.log('Foto eliminada correctamente:', response);
          resolve();
        },
        (error) => {
          console.error('Error al eliminar la foto:', error);
          reject(error);
        }
      );
    });
  }
  
  

  async EditarProducto(){
    
  }
}

