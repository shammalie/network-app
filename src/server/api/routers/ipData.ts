import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { prisma } from "~/server/db";

export const ipDataRouter = createTRPCRouter({
  getIpDataByFirstSeenRange: publicProcedure
    .input(
      z.object({
        gte: z.number(),
        lte: z.number(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.ip_data.findMany({
        where: {
          firstSeen: {
            lte: input.lte,
            gte: input.gte,
          },
        },
        orderBy: {
          firstSeen: "desc",
        },
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.ip_data.findMany({
      take: 50,
      orderBy: {
        firstSeen: "desc",
      },
    });
  }),

  getByCountry: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.ip_data.findMany({
      where: {
        countryName: input,
      },
    });
  }),

  getCountries: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.ip_data.findMany({
      distinct: ["countryName"],
    });
  }),

  getIpCountByCountries: publicProcedure
    .input(
      z.object({
        gte: z.number(),
        lte: z.number(),
        limit: z.number(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.ip_data.groupBy({
        by: ["countryName"],
        _count: {
          ip: true,
        },
        where: {
          firstSeen: {
            lte: input.lte,
            gte: input.gte,
          },
        },
        orderBy: {
          _count: {
            ip: "desc",
          },
        },
        take: input.limit,
      });
    }),
});
