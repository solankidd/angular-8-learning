describe('components.profile', function() {
  var $controller, PokemonFactory, $q, $httpBackend, $state;

  var API = 'http://pokeapi.co/api/v2/pokemon/';
  var RESPONSE_SUCCESS = {
    id: 58,
    name: 'growlithe',
    sprites: {
      front_default: 'http://pokeapi.co/media/sprites/pokemon/58.png'
    },
    types: [
      {
        type: { name: 'fire' }
      }
    ]
  };

  // Add mocked Pokéapi response
  var RESPONSE_ERROR = {
    'detail': 'Not found.'
  };

  // Load Pokemon service
  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('api.pokemon'));
  beforeEach(angular.mock.module('components.profile'));

  // Inject Pokemon factory, $q, and $httpBackend for testing HTTP requests
  beforeEach(inject(function(_$controller_, _Pokemon_, _$q_, _$httpBackend_, _$state_) {
    $controller = _$controller_;
    PokemonFactory = _Pokemon_;
    $q = _$q_;
    $httpBackend = _$httpBackend_;
    $state = _$state_;
  }));

  describe('ProfileController', function() {
    var ProfileController, singleUser;

    beforeEach(function() {
      // Define singleUser and add resolvedUser as a dependency to our controller
      singleUser = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob',
        pokemon: { name: 'growlithe' }
      };

      // Create an instance of our controller
      ProfileController = $controller('ProfileController', { resolvedUser: singleUser });
    });

    // Verify our controller exists
    it('should be defined', function() {
      expect(ProfileController).toBeDefined();
    });
  });

  describe('Profile Controller with a valid resolved user', function() {
    var ProfileController, singleUser;

    beforeEach(function() {
      // Mock a valid user
      singleUser = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob',
        pokemon: { name: 'growlithe' }
      };

      // Add spy to service call
      spyOn(PokemonFactory, 'findByName').and.callThrough();

      // Add the valid user as our resolved dependency
      ProfileController = $controller('ProfileController', { resolvedUser: singleUser });
    });

    it('should set the view model user object to the resolvedUser', function() {
      expect(ProfileController.user).toEqual(singleUser);
    });

    it('should call Pokemon.findByName and return a Pokemon object', function() {
      // Add expectations before the request is finished
      expect(ProfileController.user.pokemon.id).toBeUndefined();
      expect(ProfileController.user.pokemon.name).toEqual('growlithe');
      expect(ProfileController.user.pokemon.image).toBeUndefined();
      expect(ProfileController.user.pokemon.type).toBeUndefined();

      // Add our HTTP request expectation and resolved response value
      $httpBackend.whenGET(API + singleUser.pokemon.name).respond(200, $q.when(RESPONSE_SUCCESS));
      $httpBackend.flush();

      // Add expectations after the request is finished
      expect(PokemonFactory.findByName).toHaveBeenCalledWith('growlithe');
      expect(ProfileController.user.pokemon.id).toEqual(58);
      expect(ProfileController.user.pokemon.name).toEqual('growlithe');
      expect(ProfileController.user.pokemon.image).toContain('.png');
      expect(ProfileController.user.pokemon.type).toEqual('fire');
    });
  });

  /*
  // Add our new test
  describe('Profile Controller with a valid resolved user and an invalid Pokemon', function () {
    var singleUser, ProfileController;
    beforeEach(function() {
      // Update Pokémon name
      singleUser = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob',
        pokemon: { name: 'godzilla' }
      };

      spyOn(PokemonFactory, "findByName").and.callThrough();

      ProfileController = $controller('ProfileController', { resolvedUser: singleUser, Pokemon: PokemonFactory });
    });

    it('should call Pokemon.findByName and default to a placeholder image', function() {
      expect(ProfileController.user.pokemon.image).toBeUndefined();
      // Declare the endpoint we expect our service to hit and provide it with our mocked return values
      $httpBackend.whenGET(API + singleUser.pokemon.name).respond(404, $q.reject(RESPONSE_ERROR));
      $httpBackend.flush();

      // Add expectation that our image will be set to a placeholder image
      expect(PokemonFactory.findByName).toHaveBeenCalledWith('godzilla');
      expect(ProfileController.user.pokemon.image).toEqual('http://i.imgur.com/HddtBOT.png');
    });
  });*/

  describe('Profile Controller with an invalid resolved user', function() {
    var singleUser, ProfileController;

    beforeEach(function() {
      // Add spy to $state service
      spyOn($state, "go");
      spyOn(PokemonFactory, "findByName");

      // Add $state service as a dependency to our controller
      ProfileController = $controller('ProfileController', { resolvedUser: singleUser, Pokemon: PokemonFactory, $state: $state });
    });

    it('should redirect to the 404 page', function() {
      expect(ProfileController.user).toBeUndefined();
      expect(PokemonFactory.findByName).not.toHaveBeenCalled();
      expect($state.go).toHaveBeenCalledWith('404');
    })
  })
});

fdescribe('A spy, when configured to fake a return value', function() {
  var foo, bar, fetchedBar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      },
      getBar: function() {
        return bar;
      }
    };

    spyOn(foo, 'getBar').and.returnValue(745);

    foo.setBar(123);
    fetchedBar = foo.getBar();
  });

  it('tracks that the spy was called', function() {
    expect(foo.getBar).toHaveBeenCalled();
  });

  it('should not affect other functions', function() {
    expect(bar).toEqual(123);
  });

  it('when called returns the requested value', function() {
    expect(fetchedBar).toEqual(745);
  });
});
