// https://randomuser.me/documentation

export interface RandomUser {
  gender: string
  name: {
    title: string; //"Miss",
    first: string; //"Jennie",
    last: string; //"Nichols"
  },
  location: {
    street: {
      number: number; //8929,
      name: string; //"Valwood Pkwy",
    },
    city: string; //"Billings",
    state: string; //"Michigan",
    country: string; //"United States",
    postcode: string; //"63104",
    coordinates: {
      latitude: string; //"-69.8246",
      longitude: string; //"134.8719"
    },
    timezone: {
      offset: string; //"+9:30",
      description: string; //"Adelaide, Darwin"
    }
  },
  email: string; //"jennie.nichols@example.com",
  login: {
    uuid: string; //"7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
    username: string; //"yellowpeacock117",
    password: string; //"addison",
    salt: string; //"sld1yGtd",
    md5: string; //"ab54ac4c0be9480ae8fa5e9e2a5196a3",
    sha1: string; //"edcf2ce613cbdea349133c52dc2f3b83168dc51b",
    sha256: string; //"48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
  },
  dob: {
    date: string; //"1992-03-08T15:13:16.688Z",
    age: number; //30
  },
  registered: {
    date: string; //"2007-07-09T05:51:59.390Z",
    age: number; //14
  },
  phone: string; //"(272) 790-0888",
  cell: string; //"(489) 330-2385",
  id: {
    name: string; //"SSN",
    value: string; //"405-88-3636"
  },
  picture: {
    large: string; //"https://randomuser.me/api/portraits/men/75.jpg",
    medium: string; //"https://randomuser.me/api/portraits/med/men/75.jpg",
    thumbnail: string; //"https://randomuser.me/api/portraits/thumb/men/75.jpg"
  },
  nat: string; //"US"
}


export interface RandomUserResponse {
  results: RandomUser[];
  info: {
    seed: string; //"f0f6a3f4f0f6a3f4",
    results: number; //1,
    page: number; //1,
    version: string; //"1.3"
  }
}
