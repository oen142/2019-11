import { EntityRepository, EntityManager } from "typeorm";
import { Users } from "../models/Users";
/** Entity Manager - Constructor Injecction
 *  1. TypeOrm 역시 TypeDI의 Container를 사용한다.(server.ts 참조)
 *  2. 그래서 TypeOrm의 EntityManager는 TypeDI에 등록되있다.
 *  3. 그렇기 때문에, 아래서 @Inject 데코레이터 없이 생성자 주입이 가능하다.
 *  4. TODO: TypeDi와 Container 연결없이, 생성자 Injection이 되는지 확인해보자.
 */

@EntityRepository()
export class UserRepository {
  constructor(private readonly em: EntityManager) {}

  public find() {
    return this.em.find(Users);
  }

  public findOne(loginId: string) {
    return this.em.findOne(Users, {
      where: { loginId }
    });
  }
  public findOnebyIdx(id: number) {
    return this.em.findOne(Users, {
      where: { id }
    });
  }

  public findOneByToken(accessToken: string) {
    return this.em.findOne(Users, {
      where: { accessToken }
    });
  }

  public save(user: Users) {
    return this.em.save(user);
  }

  public async setMannerPoint(id: number, point: number) {
    const users = new Users();
    users.id = id;
    users.mannerPoint = point;

    return await this.em.save(users);
  }
}
