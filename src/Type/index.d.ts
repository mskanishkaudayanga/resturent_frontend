declare interface Resturant {
    restaurantName: string;
    address: string;
    discription?: string;
    email?: string;
    phoneNumber?: string;
    password?: string;
    confirmPassword?: string;
    city?: string;
    openTime?: string;
    closeTime?: string;
}
declare interface Menu{
    menuName: string;
}
declare interface LoginData{
    email: string;
    password: string;
}

export { Resturant, Menu, LoginData };