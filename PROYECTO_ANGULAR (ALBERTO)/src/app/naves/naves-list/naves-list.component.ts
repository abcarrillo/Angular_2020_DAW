import { Component, OnInit } from '@angular/core';
import { Naves } from '../shared/models/naves.model';
import { Subscription } from 'rxjs';
import { NavesServiceService } from '../shared/services/naves-service.service';
import { NotificationsService } from 'src/app/core/notifications.service';

@Component({
  selector: 'app-naves-list',
  templateUrl: './naves-list.component.html',
  styleUrls: ['./naves-list.component.scss']
})
export class NavesListComponent implements OnInit {
  naves: Naves[];
  selectedNave: Naves;
  editNave: Naves | null = null;
  subscription: Subscription;



  constructor(private _navesService: NavesServiceService, private _notificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.getListNaves();
    this.log('Listando naves...');
  }

  private log(notif: string): void {
    this._notificationsService.add('Naves: ' + notif);
  }

  onSelect(nave: Naves): void {
    this.selectedNave = nave;
    this.editNave = nave;
    this.log('Seleccionando nave: ' + nave.name + '...');
  }

  onDelete(nave: Naves): void {
    if (confirm('¿Realmente quiere eliminar la nave ' + nave.name + '?')) {
      this.log('Borro la nave...' + nave.name);
      this.selectedNave = null;
      this.editNave = null;
      this.naves = this.naves.filter(p => p !== nave);
    }
  }

  onAdd(nave: Naves) {
    if (nave) {
      this.log('Añado la nave...' + nave.name);
      this.naves.push(nave);
    } else {
      alert('Se ha recibido una nave vacía');
    }
  }

  getListNaves(): void {
    const scope = this;

    scope.subscription = scope._navesService.getNavesObserv().subscribe(
      {
        complete() { },
        error(err) { },
        next(navesObservables) { scope.naves = navesObservables; }
      }
    );
  }


  ngOnDestroy(): void {
    this.log('Cancelo la subscripción a la API...');
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

}
