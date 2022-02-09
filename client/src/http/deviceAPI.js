import {$authHost, $host} from "./index";


export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', {name:type})
    return data
}

export const createDevice = async (formData) => {
    const {data} = await $authHost.post('api/device', formData)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', {name:brand})
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const fetchDevices = async (limit,page,typeId,brandId) => {
    const {data} = await $host.get('api/device',{params:{limit,page,typeId,brandId}})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get(`api/device/${id}`)
    return data
}




