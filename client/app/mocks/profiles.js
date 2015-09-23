define(['models/profile'], function(Profile) {
	var damian = new Profile();
	damian.firstname('Damian');
	damian.middlename('Jerry-Ryan');
	damian.lastname('Bonacci');

	damian.birthmonth('August');
	damian.birthday(6);
	damian.birthyear(2004);

	damian.gender('m');
	damian.email('Damian-Bonacci@gmail.com');
	damian.image('https://scontent-sea1-1.xx.fbcdn.net/hphotos-xpl1/v/t1.0-9/12002050_10205944361060468_1202821409954152528_n.jpg?oh=b1e7779fb4435baf63e8fed2ffab8d98&oe=567411A8');
	damian.description('A tenacious child that loves legos, video games, nerf guns and wheezing when he laughs');

	var kassie = new Profile();
	kassie.firstname('Kassandra');
	kassie.middlename('Marlene');
	kassie.lastname('Bonacci');

	kassie.birthmonth('February');
	kassie.birthday(23);
	kassie.birthyear(2007);

	kassie.gender('f');
	kassie.email('Kassie-Bonacci@gmail.com');
	kassie.image('https://scontent-sea1-1.xx.fbcdn.net/hphotos-xpf1/t31.0-8/1015987_10205135422677514_1699683285411087182_o.jpg');
	kassie.description('A sweet girl that that\'s always eager to please but has too much energy to stop listen');

	return { 
		detailed: { 1392:damian, 1942:kassie }, 
		ref: { 
			1392:{ 
				image:damian.image, 
				fullname:damian.fullname
			},
			1942:{
				image:kassie.image,
				fullname:kassie.fullname
			}
		}
	};
});