import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ProductoService } from '../servicios/producto.service';
import { producto } from '../models/producto';
import { HttpClient } from '@angular/common/http';


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



  async EliminarProducto(){
    this.id = this.det_producto?.id_producto
    this.nombreFoto = this.det_producto?.imagen
    console.log(this.id)
    this.productoService.deleteProduct(this.id).subscribe(
      () => {
        console.log('Producto eliminado correctamente');
        this.eliminarFoto(this.nombreFoto)
        this.router.navigate(['/producto']).then(() => {
          // Recarga la página solo después de haber navegado a la página de productos
          window.location.reload();
        });
      },
      (error) => {
        console.error(error);
        // Aquí manejar error
      }
    );

  }

  eliminarFoto(nombreFoto: string) {
    this.http.delete<any>(`http://localhost:5000/eliminar_foto/${nombreFoto}`).subscribe(
      (response) => {
        console.log(response);
        alert('Foto eliminada correctamente');
        this.nombreFoto = '';
      },
      (error) => {
        console.error(error);
        alert('Error al eliminar la foto');
      }
    );
  }

  async EditarProducto(){
    
  }
}
