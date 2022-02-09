import {autorun, makeAutoObservable} from "mobx";
import {
    createBrand,
    createDevice,
    createType,
    fetchBrands,
    fetchDevices,
    fetchOneDevice,
    fetchTypes
} from "../http/deviceAPI";

export default class DeviseStore {
    constructor() {
        this._types = [];
        this._brands = [];
        this._devices = [];
        this._device = {};
        this._loadingStatus = 'idle'
        this._selectedType = {};
        this._selectedBrand = {};
        this._page = 1;
        this._totalCount = 0;
        this._limit = 3;

        makeAutoObservable(this)
        autorun(()=> {
            this.initDeviceListPage()
        })
        autorun(async () => {
            if (this.page || this.selectedBrand || this.selectedType) {
                const devices = await fetchDevices(this.limit,this.page,this.selectedType.id,this.selectedBrand.id);
                this.setDevices(devices.rows);
                this.setTotalCount(devices.count)
            }
        })
    }

    async initDeviceListPage() {
        this.setLoadingStatus('loading')
        try {
            const brands = await fetchBrands();
            const types = await fetchTypes();
            const devices = await fetchDevices(this.limit,this.page);
            this.setBrands(brands);
            this.setTypes(types);
            this.setDevices(devices.rows);
            this.setTotalCount(devices.count)
            this.setLoadingStatus('success')
        } catch (err) {
            console.log(err)
        } finally {
            this.setLoadingStatus('success')
        }
    }

    async createType(newType) {
        this.setLoadingStatus('loading')
        try {
            const res = await createType(newType);
            this.setTypes([...this.types, res])
            this.setLoadingStatus('success')
        } catch (err) {
            console.log(err.message)
        }
    }
    async createDevice(formData) {
        this.setLoadingStatus('loading')
        try {
            const res = await createDevice(formData);
            this.setDevices([...this.devices, res])
            this.setLoadingStatus('success')
        } catch (err) {
            console.log(err.message)
        }
    }

    async createBrand(newBrand) {
        this.setLoadingStatus('loading')
        try {
            const res = await createBrand(newBrand);
            this.setBrands([...this.brands, res])
            this.setLoadingStatus('success')
        } catch (err) {
            console.log(err.message)
        }
    }

    async initDevicePage(id) {
        this.setLoadingStatus('loading')
        try {
            const res = await fetchOneDevice(id)
            this.setDevice(res)
            this.setLoadingStatus('success')
        } catch (err) {
            console.log(err)
        } finally {
            this.setLoadingStatus('success')
        }

    }


    setTypes(type) {
        this._types = type
    }
    setPage(page) {
        this._page = page
    }
    setLimit(limit) {
        this._limit = limit
    }
    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }

    setDevice(device) {
        this._device = device
    }

    setLoadingStatus(newStatus) {
        this._loadingStatus = newStatus
    }

    setBrands(brand) {
        this._brands = brand;
    }

    setDevices(devices) {
        this._devices = devices;
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
    get page() {
        return this._page
    }
    get limit() {
       return this._limit
    }
    get totalCount() {
        return this._totalCount
    }


    get loadingStatus() {
        return this._loadingStatus
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

    get device() {
        return this._device
    }


}