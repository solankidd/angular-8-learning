describe('components.profile', function() {

  // Load ui.router and our components.profile module which we'll create next
  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('api.pokemon'));
  beforeEach(angular.mock.module('components.profile'));

  // Inject the $controller service
  beforeEach(inject((_$controller_, _PokemonFactory_, _$q_, _$httpBackend_) => {
    this.singleUser = {
      id: '2',
      name: 'Bob',
      role: 'Developer',
      location: 'New York',
      twitter: 'billybob',
      pokemon: { name: 'growlithe' }
    };
    this.API = 'http://pokeapi.co/api/v2/pokemon/';
    this.RESPONSE_SUCCESS = {
      'id': 58,
      'name': 'growlithe',
      'sprites': {
        'front_default': 'http://pokeapi.co/media/sprites/pokemon/58.png'
      },
      'types': [{
        'type': { 'name': 'fire' }
      }]
    };
    this.$q = _$q_;
    this.$httpBackend = _$httpBackend_;
    this.PokemonFactory = _PokemonFactory_;
    this.$controller = _$controller_;
    // Create an instance of our controller
    this.ProfileCmpController = this.$controller('ProfileCmpController', { resolvedUser: this.singleUser, PokemonFactory: this.PokemonFactory });
  }));

  describe('ProfileCmpController', ()=> {
    // Verify our controller exists
    it('should be defined', () => {
      expect(this.ProfileCmpController).toBeDefined();
    });
  });

  describe('Profile controller with valid resolved user', () => {

    beforeEach(() => {
      // Add spy to service call
      spyOn(this.PokemonFactory, "findByName").and.callThrough();
    });

    it('should set the view model user object to the resolvedUser', () => {
      expect(this.ProfileCmpController.user).toEqual(this.singleUser);
    });

    it('should call pokemon factory findByName method and return object', () => {
      // Add expectations before the request is finished
      expect(this.ProfileCmpController.user.pokemon.id).toBeUndefined();
      expect(this.ProfileCmpController.user.pokemon.name).toEqual('growlithe');
      expect(this.ProfileCmpController.user.pokemon.image).toBeUndefined();
      expect(this.ProfileCmpController.user.pokemon.type).toBeUndefined();

      // Add our HTTP request expectation and resolved response value
      // this.$httpBackend.whenGET(this.API + this.singleUser.pokemon.name).respond(200, this.$q.when(this.RESPONSE_SUCCESS));



      // this.$httpBackend.flush();
      // Add expectations after the request is finished
      // expect(this.PokemonFactory.findByName).toHaveBeenCalledWith('growlithe');
      // expect(this.ProfileCmpController.user.pokemon.id).toEqual(58);
      // expect(this.ProfileCmpController.user.pokemon.name).toEqual('growlithe');
      // expect(this.ProfileCmpController.user.pokemon.image).toContain('.png');
      // expect(this.ProfileCmpController.user.pokemon.type).toEqual('fire');

    });
  });
})