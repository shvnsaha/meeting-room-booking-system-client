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

export type TSlot = {
    _id: string
    room: Record<string, unknown>
    date: string
    startTime: string
    endTime: string
    isBooked: boolean
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date

}

export type TBooking = {
    _id: string
    date: string
    slots: string[]
    room: string
    user: string
    totalAmount: number
    isConfirmed: string
    isPaid: boolean
    tranId: string
    isDeleted: boolean
    createdAt: Date;
    updatedAt: Date
}