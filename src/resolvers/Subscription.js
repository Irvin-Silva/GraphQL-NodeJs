const Subscription = {
    count: {
        subscribe(parent, args, { pubsub }, info) {
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
