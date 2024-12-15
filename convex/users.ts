import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const syncUser = mutation({
  args: {
    userId: v.string(),
    email: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query('users')
      .filter(q => q.eq(q.field('userId'), args.userId))
      .first()
    console.log('Existing user:', existingUser);

    if (!existingUser) {
      await ctx.db.insert('users', {
        userId: args.userId,
        email: args.email,
        name: args.name,
        isPro: false,
      })
      console.log('User inserted:', { userId: args.userId, email: args.email, name: args.name });

    }
  }
})