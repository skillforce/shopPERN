import {makeAutoObservable} from "mobx";

export default class DeviseStore {
    constructor() {
        this._types = [{id: 1, name: 'Refrigerator'},
            {id: 2, name: 'TV'},
            {id: 3, name: 'Mobile'},
            {id: 4, name: 'LapTop'}];
        this._brands = [{id: 1, name: 'Apple'},
            {id: 2, name: 'Samsung'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Huawei'}];
        this._devices = [
            {
                id: 1,
                name: 'Iphone 12 PRO',
                price: 25000,
                rating: 5,
                img: 'https://mobillife.by/images/virtuemart/product/30052907b.jpg'
            },
            {
                id: 2,
                name: 'Samsung S21',
                price: 50000,
                rating: 5,
                img: 'https://mobillife.by/images/virtuemart/product/30052907b.jpg'
            },
            {
                id: 3,
                name: 'Huawei P40 lite',
                price: 45000,
                rating: 5,
                img: 'https://mobillife.by/images/virtuemart/product/30052907b.jpg'
            },
            {
                id: 4,
                name: 'Apple Iphone SE',
                price: 45000,
                rating: 5,
                img: 'https://mobillife.by/images/virtuemart/product/30052907b.jpg'
            },  {
                id: 4,
                name: 'Apple Iphone SE',
                price: 45000,
                rating: 5,
                img: 'https://mobillife.by/images/virtuemart/product/30052907b.jpg'
            },  {
                id: 4,
                name: 'Apple Iphone SE',
                price: 45000,
                rating: 5,
                img: 'https://mobillife.by/images/virtuemart/product/30052907b.jpg'
            },  {
                id: 4,
                name: 'Apple Iphone SE',
                price: 45000,
                rating: 5,
                img: 'https://mobillife.by/images/virtuemart/product/30052907b.jpg'
            },  {
                id: 4,
                name: 'Apple Iphone SE',
                price: 45000,
                rating: 5,
                img: 'https://mobillife.by/images/virtuemart/product/30052907b.jpg'
            },  {
                id: 4,
                name: 'Apple Iphone SE',
                price: 45000,
                rating: 5,
                img: 'https://mobillife.by/images/virtuemart/product/30052907b.jpg'
            },  {
                id: 4,
                name: 'Apple Iphone SE',
                price: 45000,
                rating: 5,
                img: 'https://mobillife.by/images/virtuemart/product/30052907b.jpg'
            },  {
                id: 4,
                name: 'Apple Iphone SE',
                price: 45000,
                rating: 5,
                img: 'https://mobillife.by/images/virtuemart/product/30052907b.jpg'
            },
        ];
        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this)
    }

    setTypes(type) {
        this._types = type
    }

    setBrands(brand) {
        this._brands = brand;
    }

    setDevice(device) {
        this._devices = device;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }


}