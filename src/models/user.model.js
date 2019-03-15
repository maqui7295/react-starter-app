/**
 * This is dummy model simulating serverside data
 */
import _ from 'lodash'

const users = [
    {id: 1, name: 'PetGriff', first_name: 'Peter', last_name: 'Griffin', gender: 'male' },
    {id: 2, name: 'LoisGriff', first_name: 'Lois', last_name: 'Griffin', gender: 'female' },
    {id: 3, name: 'MegGriff', first_name: 'Meg', last_name: 'Griffin', gender: 'female' },
    {id: 4, name: 'ChrisGriff', first_name: 'Chris', last_name: 'Griffin', gender: 'male' },
    {id: 5, name: 'StewieGriff', first_name: 'Stewie', last_name: 'Griffin', gender: 'male' },
]

export default class UserModel {
  
    data = users

    findAll(){
        return _.orderBy(this.data, ['id']) || []
    }

    findOne(id){  
        return _.find(this.data, {id} ) || []
    }

    save(user){
        this.data = [...this.data, ...[user]]
    }

    delete(id){
        return  this.data = _.reject(this.data, {id})
    }

    userExists(id){

        let index = this.data.findIndex(data => data.id === id)
        if(index === -1){
            return {exist: false}
        } else {
            return { exist: true, index }
        }

    }

}