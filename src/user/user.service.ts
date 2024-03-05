import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "src/schemas/user.schema";

@Injectable()
export class UserService{
   constructor(@InjectModel(User.name) private userModel:Model<UserDocument>){}
  async  getAllUsers(){
    return await this.userModel.find()
         
    }
   async createUser(allProps){
    const user=await new this.userModel(allProps)
    }
    async getUserById(id){
        return await this.userModel.findById(id)
    }
    async update(id,allProps){
        return await this.userModel.findByIdAndUpdate(id,allProps)
    }

}