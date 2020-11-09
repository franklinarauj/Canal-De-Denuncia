import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export interface Product {
    id?: number
    name: string
    category: string
    department: string
    date: string
    email: string | boolean
    contact: string
    description: string
}