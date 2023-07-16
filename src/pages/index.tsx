import moment from "moment";
import {
  type GetServerSideProps,
  type InferGetServerSidePropsType,
} from "next";
import { type IpDataCollection } from "~/types/ipDataTypes";
import { appRouter } from "~/server/api/root";
import { prisma } from "~/server/db";
import { AppPieChart } from "~/components/charts/pie-chart";

export const getServerSideProps: GetServerSideProps<{
  data: IpDataCollection;
}> = async () => {
  const caller = appRouter.createCaller({
    session: null,
    prisma: prisma,
  });
  const data = await caller.ipData.getIpCountByCountries({
    gte: moment().subtract(1, "month").valueOf(),
    lte: moment().valueOf(),
    limit: 20,
  });

  return { props: { data } };
};

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <div className="h-[230px] w-[500px]">
        <AppPieChart data={data} />
      </div>
    </>
  );
}
