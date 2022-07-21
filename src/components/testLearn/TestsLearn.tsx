export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AdressType
}
export type AdressType = {
    number: number
    street: TitleType
}

export type TitleType = {
    title: string
}

export type GovernmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: AddressCovermentBuildingsType
}
export type AddressCovermentBuildingsType = {
    street: TitleCovermentBuildingsType
}
export type TitleCovermentBuildingsType = {
    title: string
}
export type CityType = {
    title: string,
    houses: Array<HousesType>,
    governmentBuildings: Array<GovernmentBuildingsType>,
    citizensNumber: number
}

export function addMoneyToBudget(building: GovernmentBuildingsType, budget: number) {
    building.budget += budget
}

export const repairHouse = (house: HousesType) => {
    house.repaired = true
}

export const toFireStaff = (staff: GovernmentBuildingsType, number: number) => {
    staff.staffCount -= number
}
export const toHireStaff = (staff: GovernmentBuildingsType, number: number) => {
    staff.staffCount += number
}