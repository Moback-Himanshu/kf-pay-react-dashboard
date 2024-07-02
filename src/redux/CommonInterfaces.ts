export interface IUserInfo {
    email: string,
    first_name: string,
    last_name: string,
    public_id: string,
    owner: true,
    registered_on: string,
    logo_avatar?: string,
    user_avatar?: string,
    locations: [
        {
            id: 0,
            name: string,
            address1: string,
            address2: string,
            city: string,
            state: string,
            zip: string,
            country: string
        }
    ],
    selectedLocation : any
}