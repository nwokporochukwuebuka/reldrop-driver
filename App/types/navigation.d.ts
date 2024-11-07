// types/navigation.d.ts
export type AuthStackParamList = {
    OnboardPage: undefined;
    CreateAccount: undefined;
    VerifyAccount: undefined;
    AlmostThere: undefined;
    Login: undefined;
    Onboarding: undefined;
    SuccessFulPage:undefined;
    // Add other auth screens here if needed
  };
  
  export type MainStackParamList = {
    Home: undefined;
    Orders: undefined;
    PlaceOrders: undefined;
    MainPlaceOrdersPage: undefined;
    TrackOrderPage: undefined;
    Tabs: undefined;
    AuthNavigator:undefined;
    SuccessFulPage:undefined;
    MyProfilePage:undefined;    
    SettingsPage:undefined;
    SupportPage:undefined

  };


  export type DrawerStackParamList = {
    Home: undefined;
    Orders: undefined;
    PlaceOrders: undefined;
    Tabs: undefined;
    OrderTabs:undefined
    SuccessFulPage:undefined;
    MyProfilePage:undefined;
    SettingsPage:undefined;
    SupportPage:undefined
  };

  export type OrdersStackParamList = {
    All: undefined;
    Ongoing: undefined;
    Completed: undefined;
    Cancelled: undefined;
    MainPlaceOrdersPage: undefined;
    TrackOrderPage: undefined;
    SuccessFulPage:undefined
    
    // Add other main app screens here if needed
  };