import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Import Services
import { FevContactsService } from '../../services/fev-contacts.service';
// Import Models
import { FevContacts } from '../../domain/drishti_db/fev-contacts';

// START - USED SERVICES
/**
* FevContactsService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* FevContactsService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of FevContacts
 * @class FevContactsListComponent
 */
@Component({
    selector: 'app-fev-contacts-list',
    templateUrl: './fev-contacts-list.component.html',
    styleUrls: ['./fev-contacts-list.component.css']
})
export class FevContactsListComponent implements OnInit {
    list: Observable<any[]>;
    search: any = {};
    idSelected: string;
    constructor(
        private fevcontactsService: FevContactsService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.list = this.fevcontactsService.list();
    }

    /**
     * Select FevContacts to remove
     *
     * @param {string} id Id of the FevContacts to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected FevContacts
     */
    deleteItem() {
        this.fevcontactsService.remove(this.idSelected);
    }

}
