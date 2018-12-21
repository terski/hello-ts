export const Mutation = {
    async createSubscription(parent: any, args: any, ctx: any, info: any) {
        const subscription = await ctx.prisma.mutation.createSubscription(
            {
                data: { planName: args.planName, description: 'some plan' },
            },
            info
        );

        return subscription;
    },
};
