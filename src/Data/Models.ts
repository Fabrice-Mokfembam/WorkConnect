

export interface User {
  _id?:string;
  email: string;
  password: string;
  name?: string;
  isProfessional?: boolean;
  title?: string;
  occupation?: string;
  rating?: number;
  reviews?: number;
  location?: string;
  yearsExperience?: number;
  clientsServed?: number;
  image?: string;
  coverImage?: string;
  contact?: {
    phone?: string;
  };
  certifications?: string[];
  otherServices?: string[];
  gallery?: string[];
  about?: string;
  createdAt?: Date;
  updatedAt?: Date;
}



export interface Category {
  _id?: string; 
  name: string;
  pros?: string;
}
