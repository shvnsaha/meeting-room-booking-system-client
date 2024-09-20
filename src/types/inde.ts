export type TRoom = {
    _id: string;
    name: string
    image: string
    roomNo: number
    floorNo: number
    capacity: number
    pricePerSlot: number
    amenities: string[]
    isDeleted: false
    createdAt: Date
    updatedAt: Date

}