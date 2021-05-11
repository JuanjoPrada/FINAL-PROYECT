## Directory structure

```

Components/
├── <App/> 
│   └── this.state = loggedUser, adminUser, partnerUser
├── Layout
│   │── <Navigation/> Props: loggedUser, storeUser, adminUser, partnerUser
│   └── <Footer/>
├── Routes
│   └── <Routes/> Props: loggedUser, storeUser, adminUser, partnerUser
├── Pages
│   └── Index
│   │   └── <Index/>
│   │   Cities
│   │   └── <CityList/>
│   │── Login
│   │   │── <Login/> Props: storeUser, history
│   │   └── <LoginForm/> Props: storeUser, history // this.state= username, password
│   │── SignUp
│   │   │── <SignUp/> Props: history
│   │   └── <SignUpForm/> this.state= username, password
│   │── Admin
│   │   │── <Admin/>
│   │   │── <AdminRestaurantList/> Props: _id name city
│   │   │── <AdminPlaceList/> Props: _id name 
│   │── Profile
│   │   │── <Profile/>
│   │   │── <ProfileCard/> Props: _id name surname username address favourites 
│   │   └── <FavouriteCard/> restaurant_id place_id event_id 
│   ├── Restaurants
│   │   │── <Restaurants/>/>
│   │   │── <RestaurantList/>
│   │   └── <RestaurantCard/> Props: _id name city foodType image cost
│   ├── Restaurant Details
│   │   │── <RestaurantDetails/>
│   │   └── <RestaurantDetailsCard/> Props: _id name address city foodType description image cost location
│   ├── New Restaurant
│   │   └── <NewRestaurantForm/> this.state = name address city foodType description image cost location
│   ├── Edit Restaurant
│   │   └── <EditRestaurantForm/> Props: _id name address city foodType description image cost location
│   ├── Places
│   │   │── <Places/>/>
│   │   │── <PlaceList/>
│   │   └── <PlaceCard/> Props: _id name city image cost
│   ├── Place Details
│   │   │── <PlaceDetails/>
│   │   └── <PlaceDetailsCard/> Props: _id name city image description cost url location
│   ├── New Place
│   │   └── <NewPlaceForm/> this.state=  name city image description cost url location
│   ├── Edit Place
│   │   └── <EditPlaceForm/> Props: _id name city image description cost url location
│   ├── Events
│   │   │── <Events/>/>
│   │   │── <EventList/>
│   │   └── <EventCard/>
│   ├── Event Details
│   │   │── <EventDetails/>
│   │   └── <EventDetailsCard/>
│   ├── Favourite Button
│   │   └── <FavouriteButton/>
│   ├── Google Maps
│   │   └── <Map/>

```
