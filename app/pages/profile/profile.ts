import {Page} from 'ionic-angular';

@Page({
	templateUrl: 'build/pages/profile/profile.html'
})
export class ProfilePage {

	public profile = {
		picture: 'images/anis-Shamshuddin-Socialmosaic.jpg',
		firstName: 'Anis',
		lastName: 'Momin',
		phone: '021-333-4444',
		email: 'anis_momin@hotmail.com',
		mobilePhone: '0334-3853136'
	};
	constructor() {

	}
}
