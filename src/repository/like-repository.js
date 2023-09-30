import Like from '../models/like.js';
import CrudRepository from './crud-repository.js';

class LikeRepository extends CrudRepository{
    constructor() {
        super(Like);
    }

    async findByUserAndLikeable(data){
        // console.log('Query Data: ', data);
        try {
            const like = await Like.findOne(data).exec();
            return like;
        } catch (error) {
            console.log('Error in likeRepo');
            throw error;
        }
    }
}

export default LikeRepository;