import store from "./store/store";

export type IReducer = ReturnType<typeof store>


export interface IData{

        original_title:string
        overview:string
        popularity:number
        release_date:string
        vote_average:number



}