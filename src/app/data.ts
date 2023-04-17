import {Person} from '../types';

export const myProfileData: Person =
  {
    name: 'Eugene Medvedev',
    profilePicUrl: 'assets/my-profile-pic.jpg',
    age: 52,
    bio: 'I like to program. I also like food',
    birthday: 'March 6, 1971',
    interests: ['Programming', 'Data Science', 'Sports', 'Foreign Languages']
  };

export const friendsData: Person[] = [
  {
    name: 'Miguel Wilson',
    profilePicUrl: 'assets/friend-1.jpg',
    age: 40,
    bio: 'Likes to travel to far-away places',
    birthday: 'March 7',
    interests: ['Traveling', 'Languages', 'Meet People']
  },
  {
    name: 'Melissa Reyes',
    profilePicUrl: 'assets/friend-2.jpg',
    age: 34,
    bio: 'Loves everything related to math',
    birthday: 'April 7',
    interests: ['Math', 'Data Science', 'Calculus', 'Statistics']
  },
  {
    name: 'Pauline Fowler',
    profilePicUrl: 'assets/friend-3.jpg',
    age: 27,
    bio: 'An all-around foodie. Loves to cook and eat',
    birthday: 'July 10',
    interests: ['Restaurants', 'Food', 'Cooking', 'Baking']
  }];
