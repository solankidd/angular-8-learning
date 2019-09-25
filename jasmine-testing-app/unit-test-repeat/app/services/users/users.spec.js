// STEP
// we're saying, "Before each of my tests
// 1) load the module api.users and
// 2) inject the Users service (wrapped with underscores) and set it to the Users variable I defined locally."
/*
describe('Users factory', () => {
  var Users;

  // Before each test load our api.users module
  beforeEach(angular.mock.module('api.users'));

  beforeEach(inject( (_Users_) => {
    Users = _Users_;
  } ));

  // A simple test to verify the Users factory exists
  it('should exist', () => {
    expect(Users).toBeDefined();
  });
});
*/


describe('Users factory', () => {
  // Before each test load our api.users module
  beforeEach(angular.mock.module('api.users'));

  beforeEach(inject( (_Users_) => {
    this.Users = _Users_;
    this.userList_TEST_DATA = [
      {
        id: '1',
        name: 'Jane',
        role: 'Designer',
        location: 'New York',
        twitter: 'gijane',
        pokemon: { name: 'blastoise' }
      },
      {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob',
        pokemon: { name: 'growlithe' }
      },
      {
        id: '3',
        name: 'Jim',
        role: 'Developer',
        location: 'Chicago',
        twitter: 'jimbo',
        pokemon: { name: 'hitmonchan' }
      },
      {
        id: '4',
        name: 'Bill',
        role: 'Designer',
        location: 'LA',
        twitter: 'dabill',
        pokemon: { name: 'barney' }
      }
    ];

    this.singleUser_TEST_DATA = {
      id: '4',
      name: 'Bill',
      role: 'Designer',
      location: 'LA',
      twitter: 'dabill',
      pokemon: { name: 'barney' }
    }
  } ));

  // A simple test to verify the Users factory exists
  it('should exist', () => {
    expect(this.Users).toBeDefined();
  });

  // test case for user all method
  describe('.all()', () => {
    it('should exist', () => {
      expect( this.Users.all ).toBeDefined();
    });

    it('should return hard coded list of users', () => {
      expect(this.Users.all()).toEqual(this.userList_TEST_DATA)
    })
  });

  // test find by id method
  describe('.findById()', () => {
    // verify if method exist
    it('should exist', () => {
      expect(this.Users.findById).toBeDefined();
    });

    // check if find by id is providing proper data
    it('should return user object if exist', () => {
      expect(this.Users.findById(4)).toEqual(this.singleUser_TEST_DATA)
    });

    // when invalid id, return undefined
    it('should return undefined when invalid id', () => {
      expect(this.Users.findById('invalid')).toBeUndefined();
    });
  });
});