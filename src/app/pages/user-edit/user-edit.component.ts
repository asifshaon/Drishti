// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Import Services
import { UserService } from '../../services/user.service';
import { FevContactsService } from '../../services/fev-contacts.service';

// Import Models
import { User } from '../../domain/drishti_db/user';
import { FevContacts } from '../../domain/drishti_db/fev-contacts';

// START - USED SERVICES
/**
* UserService.create
*	@description CRUD ACTION create
*
* UserService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* UserService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* FevContactsService.findByuid
*	@description CRUD ACTION findByuid
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a  User
 */
@Component({
    selector: 'app-user-edit',
    templateUrl: 'user-edit.component.html',
    styleUrls: ['user-edit.component.css']
})
export class UserEditComponent implements OnInit {
    item: any = {};
    itemDoc: AngularFirestoreDocument<User>;
    isNew: Boolean = true;
    formValid: Boolean;

    

    externalFevContacts_uid: FevContacts[];

    constructor(
        private userService: UserService,
        private fevcontactsService: FevContactsService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init list
        this.externalFevContacts_uid = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.isNew = false;
                this.itemDoc = this.userService.get(id);
                this.itemDoc.valueChanges().subscribe(item => this.item = item);

                this.fevcontactsService.findByUid(id).subscribe(list => this.externalFevContacts_uid = list);
            }
            // Get relations
        });
    }



    /**
     * Save User
     *
     * @param {boolean} formValid Form validity check
     * @param User item User to save
     */
    save(formValid: boolean): void {
        this.formValid = formValid;
        if (formValid) {
            if (this.isNew) {
                // Create
                this.userService.create(this.item);
                this.isNew = false;
            } else {
                // Update
                this.userService.update(this.itemDoc, this.item);
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
