// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Import Services
import { FevContactsService } from '../../services/fev-contacts.service';
import { UserService } from '../../services/user.service';

// Import Models
import { FevContacts } from '../../domain/drishti_db/fev-contacts';
import { User } from '../../domain/drishti_db/user';

// START - USED SERVICES
/**
* FevContactsService.create
*	@description CRUD ACTION create
*
* FevContactsService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* FevContactsService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* UserService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a  FevContacts
 */
@Component({
    selector: 'app-fev-contacts-edit',
    templateUrl: 'fev-contacts-edit.component.html',
    styleUrls: ['fev-contacts-edit.component.css']
})
export class FevContactsEditComponent implements OnInit {
    item: any = {};
    itemDoc: AngularFirestoreDocument<FevContacts>;
    isNew: Boolean = true;
    formValid: Boolean;

    
    listUid: User[];
    


    constructor(
        private fevcontactsService: FevContactsService,
        private userService: UserService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init list
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.isNew = false;
                this.itemDoc = this.fevcontactsService.get(id);
                this.itemDoc.valueChanges().subscribe(item => this.item = item);

            }
            // Get relations
            this.userService.list().subscribe(list => this.listUid = list);
        });
    }



    /**
     * Save FevContacts
     *
     * @param {boolean} formValid Form validity check
     * @param FevContacts item FevContacts to save
     */
    save(formValid: boolean): void {
        this.formValid = formValid;
        if (formValid) {
            if (this.isNew) {
                // Create
                this.fevcontactsService.create(this.item);
                this.isNew = false;
            } else {
                // Update
                this.fevcontactsService.update(this.itemDoc, this.item);
            }
            this.goBack();
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }

}
