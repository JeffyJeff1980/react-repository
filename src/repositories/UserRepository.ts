import { BaseRepository } from "../base/BaseRepository";

export interface IUser {
  id: number;
  username: string;
}

class UserRepository extends BaseRepository<IUser> {
  collection = "user";

  getMany() {
    return super.getMany();
  }

  get(id: string) {
    return super.get(id);
  }

  create(id: string, data: IUser) {
    return super.create(id, data);
  }

  update(id: string, data: IUser) {
    return super.update(id, data);
  }

  delete(id: string) {
    return super.delete(id);
  }
}

export default UserRepository;
