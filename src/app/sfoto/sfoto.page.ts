import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,NavController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { producto } from '../models/producto';
import { ProductoService } from '../servicios/producto.service';


@Component({
  selector: 'app-sfoto',
  templateUrl: './sfoto.page.html',
  styleUrls: ['./sfoto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SfotoPage implements OnInit {  

  selectedFile: File | null = null;
  nombreFoto: string | undefined;

  produc = {
    codigo_producto: "",
    nombre: "",
    descripcion: "",
    id_marca: 1,
    id_categoria: 1,
    stock: 1,
    imagen: "",
    precio: ""
  }

  constructor(private http: HttpClient,
              private router: Router,
              private activateRoute: ActivatedRoute,
              public toastController: ToastController,
              private productService: ProductoService,
              private navCtrl: NavController) 
              { }

  ngOnInit() {
   }


  async presentToast(message: string, duration: number = 2000) {
    const toast = await this.toastController.create({
      message,
      duration,
      position: 'bottom'
    });
    toast.present();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(pro: any) {
    if (this.selectedFile) {
      const formData = new FormData();

      formData.append('foto', this.selectedFile);

      this.http.post<any>('http://localhost:5000/upload', formData).subscribe(

        (response) => {
          console.log(response);
          this.presentToast('Imagen subida con éxito');
          this.nombreFoto = response.nombre_foto;
          this.produc.imagen = response.nombre_foto;
          console.log(this.produc);

          // Agregar el producto
          this.productService.AgregarFoto(pro).subscribe({
            next: (response: any) => {
              this.presentToast('Registro exitoso.', 3000);
              setTimeout(() => {
                console.log("exito")
                this.navCtrl.navigateRoot('/home');
              }, 3200);
            },
            error: (error: any) => {
              console.log("AQUIIIIIIIII",this.produc)
              console.error('Error al subir producto:', error);
              this.presentToast('Error al Subir producto. Inténtalo de nuevo.');
            }
          });
        },
        (error) => {
          console.error(error);
          alert('Error al subir la imagen');
        }
      );
    }
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

  showMenu = false;
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  goProducto(){
    this.router.navigate(['/producto']);
  }

  home(){
    this.router.navigate(['/home']);
  }

  perfil(){
    this.router.navigate(['/perfil']);
  }

  salir(){

  }
  puntoLimpio(){

  }

  goBack() {
    this.navCtrl.back();
  }
  
  

  

}
