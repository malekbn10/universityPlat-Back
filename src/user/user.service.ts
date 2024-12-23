import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) 
  private readonly userRepository : Repository<User> 
){}


  async create(createUserDto: CreateUserDto) {
  return await this.userRepository.save(createUserDto);
  }
  async findOneByEmail(email: string) {
    return await this.userRepository.findOneBy({email}) ;
  }

  async findAll() {
    return await this.userRepository.findAndCount();
  }
 

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({id})
    if (!user) {
      return{ 
        message : "User not found !"
      }
    }
    try {
      await this.userRepository.update(
        id,
        updateUserDto,
      );
      return {
        message: 'User Updated Successfully',
      };
    } catch (error) {
      return {
        message: error.message,
      };
    // const user = await this.userRepository.findOneBy({id})
    // if (!user) {
    //   console.log("user not found")
    // }
    // console.log(user);
    // return await this.userRepository.update(id,updateUserDto);
  }
  }
  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
