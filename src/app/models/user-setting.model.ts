import { UserModel } from "./user.model";

export const Status = {
  "1":"online",
  "0":"offline",
}

export interface UserSettingModel {
    creatorId: string;  
    userId: string;  
    lock: boolean;   
    mute: boolean;   
    online:boolean;
    notification: boolean; 
}