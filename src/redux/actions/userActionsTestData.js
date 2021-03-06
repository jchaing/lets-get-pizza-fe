export const testData = {
  creds: {
    username: "JDawg",
    password: "1234",
  },
  message: "Welome pizzalover",
  token: "XXXXXXXXX",
  toggleClickSame: {
    event: { target: { id: "location" } },
    field: "location",
  },
  toggleClickDifferent: {
    event: { target: { id: "location" } },
    field: "dietary_preference",
  },
  settingsDietInput: {
    event: { target: {} },
    value: ["vegan"],
  },
  settingsAllInput: {
    event: { target: { name: "location" } },
    value: "L.A.",
  },
  user: {
    id: 1,
    bio: "I love my pizza",
    events: [
      {
        id: 1,
        user_id: 1,
        location_id: 1,
        title: "event1",
        description: "super amazing event",
        start_time: Date.now(),
        end_time: Date.now + 100,
      },
      {
        id: 2,
        user_id: 1,
        location_id: 1,
        title: "event2",
        description: "very terrible event",
        start_time: Date.now() + 1,
        end_time: Date.now + 101,
      },
    ],
    reviews: [
      {
        location_id: 80,
        user_id: 2,
        id: 52,
        rating: 5,
        review_title: "SOOOO GOOD",
        review_text: "yum yum yum!! GO HERE",
        business_name: "Rosa's Italian Resaurant",
        address: "2400 Columbus St, Bakersfield, CA 93306, United States",
      },
    ],
    friends: [
      {
        user_id: 1,
        friends_id: 1,
        status: "accepted",
        id: 1,
      },
      {
        user_id: 2,
        friends_id: 2,
        status: "accepted",
        id: 2,
      },
      {
        user_id: 3,
        friends_id: 3,
        status: "accepted",
        id: 3,
      },
    ],
    favShopDetails: {
      name: "Dominoes Pizza",
      latitude: 40.7050150708864,
      longitude: -73.9336165250072,
      address: "13 pizza rd",
      location_id: 25,
    },
    savedPromos: [
      {
        id: 1,
        location_id: 1,
        title: "Cheese Sale!",
        text: "Half Price extra cheese!",
        start_date: "2020-01-02T00:00:00.000Z",
        end_date: "2020-01-03T00:00:00.000Z",
      },
      {
        id: 2,
        location_id: 2,
        title: "Double Double Time!",
        text: "Buy one pizza and pay double for the second!",
        start_date: "2020-01-03T00:00:00.000Z",
        end_date: "2020-02-03T00:00:00.000Z",
      },
      {
        id: 3,
        location_id: 3,
        title: "Jailhouse Rock!",
        text: "Sing a song for 10 bucks off your order!",
        start_date: "2020-02-03T00:00:00.000Z",
        end_date: "2020-02-03T00:00:00.000Z",
      },
    ],
  },
  users: [
    {
      id: 1,
      username: "Billy",
      email: "billy@pizzaluv.com",
      password: "luckyGuess",
      profile_image:
        "https://res.cloudinary.com/plza/image/upload/v1588043869/qxhdqbj4sthf57bdgltz.jpg",
      display_name: "PizzaBruh420",
      dietary_preference: ["gluten"],
      favorite_pizza_toppings: "Mushrooms",
      display_location: "Miami, Florida",
      favorite_pizza_shop: 2,
      bio: "Pizza! Pizza! Pizza! Ain't nothing like it",
    },
    {
      id: 3,
      username: "Betty",
      email: "betty@pizzaluv.com",
      password: "luckyGuess",
      profile_image:
        "https://res.cloudinary.com/plza/image/upload/v1588043869/qxhdqbj4sthf57bdgltz.jpg",
      display_name: "PizzaGurl",
      dietary_preference: ["gluten"],
      favorite_pizza_toppings: "Pepperoni",
      display_location: "Billings",
      favorite_pizza_shop: 3,
      bio: "Can't spell pizza without Betty!",
    },
  ],
  save: { target: { id: "save" } },
  cancel: { target: { id: "cancel" } },
  locations: [
    {
      id: 1,
      last_name: "McTesterson",
      username: "DUNCAN",
      email: "test@test.com",
      password: "secret",
      first_name: "Jest",
      update_foursquare: true,
      phone_number: "5551234567",
      foursquare_id: "1",
      business_name: "Pizza King",
      latitude: 0,
      longitude: 0,
      address: "1234 Sauce St",
      website_url: "",
      official_description: "We like sauce like you like cheese",
      thumbnail_image: "",
      inside_image: "",
      street_view_image: "",
      menu_image: "",
      order_service: "horse & buggy",
      store_bio: "We reeeallly like sauce.",
      dietary_offerings: ["vegan"],
      events: [
        {
          description: "Its dat time boys, pizza!",
          end_time: "2020-01-22T00:00:00.000Z",
          id: 1,
          location_id: 1,
          start_time: "2020-01-20T00:00:00.000Z",
          title: "Lets Get Pizza!",
          user_id: 1,
        },
        {
          description: "Are Nacho pizzas a thing? Lets find out!",
          end_time: "2020-01-22T00:00:00.000Z",
          id: 2,
          location_id: 1,
          start_time: "2020-01-20T00:00:00.000Z",
          title: "Nacho Pizza Hunt!",
          user_id: 1,
        },
      ],
    },
  ],
  image: {
    id: 11,
    username: "pizzalover",
    email: "iluvpizza@test.com",
    profile_image:
      "https://res.cloudinary.com/plza/image/upload/v1592089926/bcdtzp5eoh9twubtrfmq.png",
    display_name: "PizzaLover",
    dietary_preference: null,
    favorite_pizza_toppings: "Pineapple",
    display_location: "Denver, CO",
    favorite_pizza_shop: 2,
    bio: "I could eat pizza for every meal",
  },
};
