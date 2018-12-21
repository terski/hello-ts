export const Query = {
    subscriptions(parent: any, args: any, ctx: any, info: any) {
        return ctx.prisma.query.subscriptions();
    },
};
