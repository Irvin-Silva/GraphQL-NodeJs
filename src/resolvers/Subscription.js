import { getUserId } from "../utils";

const Subscription = {
    
    count: {
        subscribe(parent, args, {request, pubsub }, info) {
            const userId = getUserId(request);
            console.log(pubsub.asyncIterator); // Verifica si el método está disponible
            let count = 0;
            setInterval(() => {
                count++;
                pubsub.publish('count', { count });
            }, 1000);
            return pubsub.asyncIterator('count');
        },
    },
};
export default Subscription;
