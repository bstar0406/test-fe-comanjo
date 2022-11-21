export type DogType = {
    breederDOB: string,
    breederDesc: string,
    breederGender: string,
    breederName: string,
    breederPhoto: string,
    petTypeId: {
        petTypeId: string,
        petTypeDadCalled: string,
        petTypemomCalled: string,
        _id: string
    },
    _id: string
}

export type BreedInfoType = {
    image: string,
    title: string,
    description: string
}

export interface ISeeker {
    id: string,
    firstname: string,
    lastname: string,
    address: string,
    email: string,
    phone: string,
}

export interface ICompany {
    id: string,
    name: string,
    address: string,
    ceo: string,
    vat: string,
    email: string,
    phone: string
}

export interface IUser {
    type:string|null,
    seeker:ISeeker|null,
    company:ICompany|null
}