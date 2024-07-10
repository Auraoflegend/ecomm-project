import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuType: string = 'default';
  sellerName:string='';
  constructor (private router:Router){}
  
    isMenuActive: boolean = false;
  
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    }
  
    closeMenu() {
      this.isMenuActive = false;
    }

    ngOnInit():void{
      this.router.events.subscribe((val:any)=>{
        if(val.url){
          if(localStorage.getItem('seller') && val.url.includes('seller'))
          {
            this.menuType = 'seller';
            console.log("in seller area")
            if(localStorage.getItem('seller'))
            {
              let name = localStorage.getItem('seller')

              let data = name && JSON.parse(name)[0]
              this.sellerName = data.name
            }

          }
          else
          {
            this.menuType = 'default';
          }
        }

      })

    }

    logout(){
      localStorage.removeItem('seller');
      this.router.navigate(['/home'])
    }


  }
