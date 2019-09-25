describe('UsersCmpController', function() {

  // load ui.router and component.user
  beforeEach( angular.mock.module('ui.router') );
  beforeEach( angular.mock.module('components.users') );
  beforeEach(angular.mock.module('api.users'));

  // inject compo controller
  beforeEach( inject((_$controller_, _Users_) => {
    this.userList = [
      { id: '1', name: 'Jane', role: 'Designer', location: 'New York', twitter: 'gijane' },
      { id: '2', name: 'Bob', role: 'Developer', location: 'New York', twitter: 'billybob' },
      { id: '3', name: 'Jim', role: 'Developer', location: 'Chicago', twitter: 'jimbo' },
      { id: '4', name: 'Bill', role: 'Designer', location: 'LA', twitter: 'dabill' }
    ];
    this.Users = _Users_;
    this.$controller = _$controller_;


    // spy on user factory 'all' method, force the provided return value
    // The callFake method allows us to intercept a call to that method and supply it our own return value.
    // we use Jasmine's callFake function to intercept the actual call and return a hard coded list of users (our expectation).
    spyOn(this.Users, 'all').and.callFake( ()=>{
      return this.userList;
    } );
    this.UsersCmpController = this.$controller('UsersCmpController', {Users: this.Users});

  }));

  // verify if it exist
  it('should exist', () => {
    expect(this.UsersCmpController).toBeDefined();
  });

  // add a new test to check if all called and controller's variable is getting the list
  it('should call Users.all()', ()=>{
    expect(this.Users.all).toHaveBeenCalled();
    expect(this.UsersCmpController.users).toEqual(this.userList);
  });
})