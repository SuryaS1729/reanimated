import {faker} from "@faker-js/faker"
 
 
 faker.seed (12);
 const mockData = [... Array(20).keys()].map(() => ({
 key: faker.string.uuid(),
 title: faker.music.artist(),
 image: faker.image.urlLoremFlickr({
         width: 300,
         height: 300 * 1.4,
         category: "nature",}),
 
 bg: faker.color.rgb(),
 description: faker.lorem.sentences({ min: 1, max: 3 }),
 author: {
 name: faker.person.fullName(), 
 avatar: faker.image.avatarGitHub(),
 },
 })) ;
 
 export type Item  = (typeof mockData )[0];
 export default mockData;