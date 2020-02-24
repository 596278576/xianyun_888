export const state=()=>{
    return {
        // 酒店详情
        hotelDetail:[]
    }
}
export const mutations= {
    setHotelList(state,data){
        state.hotelDetail=data
    }
}