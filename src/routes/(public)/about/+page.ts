import type { PageLoad } from './$types';

import Avatar1 from '$lib/assets/teams/msyukrillah.jpg?width=150&fit=cover&quality=80&format=webp&url';
import Avatar2 from '$lib/assets/teams/ekal.jfif?width=150&fit=cover&quality=80&format=webp&url';
import Avatar3 from '$lib/assets/teams/ofik.png?width=150&fit=cover&quality=80&format=webp&url';
import Avatar4 from '$lib/assets/teams/wendra.jfif?width=150&fit=cover&quality=80&format=webp&url';

export const load: PageLoad = () => {
	const Teams: App.Team[] = [
		{
			name: 'Michael Eibye',
			nickname: 'Mike',
			department: 'CEO',
			picture: '',
			quotes: '',
			email: 'mike@itvision.co.id',
			urls: [],
		},
		{
			name: 'Dimas P. Pradana',
			nickname: 'Dimas',
			department: 'Chief Officer Manager',
			picture: '',
			quotes: '',
			email: 'dimas@itvision.co.id',
			urls: [
				{icon: '', url: ''}
			]
		},
		{
			name: 'M. Syukrillah',
			nickname: 'Riel',
			department: 'IT Manager',
			picture: Avatar1,
			quotes: '',
			email: 'syukrillah@itvision.co.id',
			urls: []
		},
		{
			name: 'Wendra Irawan Jayadi',
			nickname: 'Wendra',
			department: 'Graphic Designer',
			picture: Avatar4,
			quotes: '',
			email: 'wendra@itvision.co.id',
			urls: []
		},
		{
			name: 'Ganda Wenang Sani',
			nickname: 'Ganda',
			department: 'Programmer',
			picture: '',
			quotes: '',
			email: 'wenangsani@itvision.co.id',
			urls: []
		},
		{
			name: 'Ahmad Nawawi',
			nickname: 'Awie',
			department: 'Technition Assistance',
			picture: '',
			quotes: '',
			email: 'nawawi@itvision.co.id',
			urls: []
		},
		{
			name: 'Bani Taufik',
			nickname: 'Ofik',
			department: 'Internship Programmer',
			picture: Avatar2,
			quotes: '',
			email: 'taufik@itvision.co.id',
			urls: []
		},
		{
			name: 'Hulaimi Haekal',
			nickname: 'Ekal',
			department: 'Internship UI Programmer',
			picture: Avatar3,
			quotes: '',
			email: 'haekal@itvision.co.id',
			urls: []
		}
	];

	return {
		teams: Teams
	};
}