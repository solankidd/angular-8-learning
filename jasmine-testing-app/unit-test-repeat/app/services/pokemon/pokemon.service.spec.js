describe('Pokemon factory', () => {
  // Load the api.pokemon module which we'll create next
  beforeEach(angular.mock.module('api.pokemon'));

  // Inject the Pokemon service, init variables
  beforeEach(inject( (_PokemonFactory_, _$q_, _$httpBackend_, _$rootScope_)=>{
    this.$rootScope = _$rootScope_.$new();
    this.PokemonFactory = _PokemonFactory_;
    this.$q = _$q_;
    this.$httpBackend = _$httpBackend_;
    // Add Pokeapi endpoint
    this.API = 'http://pokeapi.co/api/v2/pokemon/';
    this.result = {};

    this.search = 'pikachu';
    this.invalidSearch = 'godzilla';
    // Add mocked Pokéapi response
    this.RESPONSE_SUCCESS = {
      'id': 25,
      'name': 'pikachu',
      'sprites': {
        'front_default': 'http://pokeapi.co/media/sprites/pokemon/25.png'
      },
      'types': [{
        'type': { 'name': 'electric' }
      }]
    };
    // Add new mocked Pokéapi response
    this._RESPONSE_ERROR = {
      'detail': 'Not found.'
    };
    this.RESPONSE_ERROR = 'Not Found';
  }) );

  // Verify our controller exists
  it('should exist', () => {
    expect(this.PokemonFactory).toBeDefined();
  });

  describe('findByName', () => {
    beforeEach( ()=>{
      // Spy on our service call but allow it to continue to its implementation
      // By chaining the spy with callThrough we have the ability to track any calls made to this function
      spyOn(this.PokemonFactory, "findByName").and.callThrough();
    });

    it('should return valid pokemon when called with valid name', () => {
      //he $q service allows us to simulate resolving or rejecting a promise
      //The $httpBackend service allows us to verify whether or not our Pokemon factory makes an HTTP request to Pokéapi**
      //**without actually hitting the endpoint itself.
      //The two of these services combined provide us the ability to verify a request was made to the API while also giving us the option to resolve or reject**
      //**the response depending on which response we are testing.

      // Declare the endpoint we expect our service to hit and provide it with our mocked return values
      // when we call this API it should return RESPONSE_SUCCESS
      this.$httpBackend.whenGET(this.API + this.search).respond(200, $q.when(this.RESPONSE_SUCCESS));
      expect(this.PokemonFactory.findByName).not.toHaveBeenCalled();
      expect(this.result).toEqual({});

      this.PokemonFactory.findByName(this.search)
      .then((res) => {
        this.result = res;
      });
      // Flush pending HTTP requests
      // By flushing the request, we essentially replace the asynchronous $http request with our own mock response.
      // Always be sure to call $httpBackend.flush() to execute your mock requests.
      // link to understand: https://www.stackchief.com/tutorials/$httpBackend%20%7C%20Quick%20Tutorial%20With%20Example
      // flush replaces actual http response with our expected response
      // my take on flush
      // - we requested to http, now request with be resolved after some time
      // - but we are flushing above request
      // - immediately it will create our provided resolve
      // - so now we don't have to wait for it
      // = we can verify result with our response
      this.$httpBackend.flush();
      expect(this.PokemonFactory.findByName).toHaveBeenCalledWith(this.search);
      expect(result.id).toEqual(25);
      expect(result.name).toEqual('pikachu');
      expect(result.sprites.front_default).toContain('.png');
      expect(result.types[0].type.name).toEqual('electric');
    });
    /*
    it('should return 404 when called with invalid name', () => {
      // Update status code and response object (reject instead of when/resolve)
      this.$httpBackend.whenGET(this.API + this.invalidSearch).respond(404, $q.reject(this.RESPONSE_ERROR));
      expect(this.PokemonFactory.findByName).not.toHaveBeenCalled();
      expect(result).toEqual({});

      // Update chained method to catch
      this.PokemonFactory.findByName(this.invalidSearch)
      .then((res) => {
        this.result = res;
      }, (res)=> {
        this.result = res;
      });

      $httpBackend.flush();
    })
    */
  });
});